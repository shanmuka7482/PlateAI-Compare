from paddleocr import PaddleOCR,draw_ocr
from PIL import Image
import time


# def inference(image_path):
#     ocr = PaddleOCR(rec_model_dir="Backend\Paddleocr\infrence2",use_angle_cls=True, lang='en') # need to run only once to download and load model into memory
#     # image_path = 'Model\Test2\WhatsApp Image 2025-02-16 at 20.07.23_177b5f61.jpg'
#     result = ocr.ocr(image_path, cls=True)
#     for idx in range(len(result)):
#         res = result[idx]
#         for line in res:
#             print(line)
#             return line
#     return None
            

def inference(image_path):
    ocr = PaddleOCR(rec_model_dir="infrence2",use_angle_cls=True, lang='en') # need to run only once to download and load model into memory
    result = ocr.ocr(image_path, cls=True)
    result = result[0]
    boxes = [line[0] for line in result]
    txts = [line[1][0] for line in result]
    scores = [line[1][1] for line in result]
    print(txts)
    return txts, scores