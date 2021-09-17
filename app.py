from flask import Flask, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='frontend/build')
CORS(app)


# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/hello')
def say_hello_world():
    return {'result': "This is version 3"}
