import base64
import io
import os
import tempfile
import shutil
import time
from flask import Flask, jsonify, request
from PIL import Image

from Test import inference as Paddleocr_inference


app = Flask(__name__)


def decode_image(encoded_image):
    """Decode base64-encoded image and return a PIL Image."""
    try:
        image_data = base64.b64decode(encoded_image)
        image = Image.open(io.BytesIO(image_data))
        return image
    except Exception as e:
        raise ValueError(f"Invalid image data: {e}")


def save_temp_image(image):
    """Save the PIL Image to a temporary file and return the file path."""
    temp_dir = tempfile.gettempdir()
    temp_path = os.path.join(temp_dir, next(tempfile._get_candidate_names()) + ".png")
    image.save(temp_path)
    return temp_path

def save_temp_folder_image(image):
    """Save the PIL Image to a temporary folder and return the folder path."""
    # Create a temporary directory
    temp_folder = tempfile.mkdtemp()

    # Generate a unique file path inside the temporary folder
    temp_path = os.path.join(temp_folder, "image.png")

    # Save the image
    image.save(temp_path)

    return temp_folder  # Return the temporary folder path

def measure_time(func, *args, **kwargs):
    start_time = time.time()
    Extracted_Image,confidense_score = func(*args, **kwargs)
    end_time = time.time()
    execution_time = end_time - start_time
    return Extracted_Image,confidense_score, execution_time

@app.route("/")
def hello_world():
    return "<p>Paddleocr inference!!!</p>"

@app.route("/Paddleocr_inference", methods=["POST"])
def model1_ocr():
    """Endpoint for Model 1 to extract text from an image."""
    try:
        data = request.get_json()
        encoded_image = data.get("image")
        if not encoded_image:
            return jsonify({"error": "No image provided"}), 400

        image = decode_image(encoded_image)
        temp_path = save_temp_image(image)
        Extracted_Image,confidense_score, execution_time = measure_time(Paddleocr_inference, temp_path)
        os.remove(temp_path)  # Clean up the temporary file

        return jsonify({"extracted_text": Extracted_Image,"Confidense_score":confidense_score,"Execution time":execution_time }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)

