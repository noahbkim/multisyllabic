from flask import Flask
from flask_cors import CORS

import json

app = Flask("multisyllabic")
CORS(app)


@app.route("/")
def index():
    return json.dumps({"message": "Hello, world!"})
