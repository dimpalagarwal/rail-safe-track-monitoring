from fastapi import FastAPI
from sensor_model import run_sensor_model
from camera_model import run_camera_model
from fusion import fuse

app = FastAPI()

@app.post("/analyze")
def analyze(data):
    sensor = run_sensor_model(data["vibration"])
    camera = run_camera_model(data["image"])
    risk = fuse(sensor, camera)

    return {
        "sensor": sensor,
        "camera": camera,
        "final_risk": risk
    }
