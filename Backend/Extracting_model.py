
import tempfile
import gdown
import zipfile


google_drive_file_id = "157Nkamg72pOo5xxfoGoUbj8b3vVy3q1I"
print("Downloading model from Google Drive...")
gdown.download(f"https://drive.google.com/uc?id={google_drive_file_id}", quiet=False)

# # Extract the zip file
# print("Extracting model...")
# with zipfile.ZipFile(zip_path, "r") as zip_ref:
#     zip_ref.extractall(temp_dir)

# # Ensure extracted model file is in the expected location
# if not os.path.exists(saved_model):
#     print(f"Error: Model file not found at {saved_model}")
# else:
#     print("Model successfully extracted.")