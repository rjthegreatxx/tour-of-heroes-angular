from types import MethodDescriptorType
import flask
from flask import jsonify, request
from flask import json
from flask_cors import CORS

app = flask.Flask(__name__)
app.config["DEBUG"] = True
CORS(app)

all_heroes = [ { 'id': 11, 'name': 'Dr. Strange' },
  { 'id': 12, 'name': 'Morbius' },
  { 'id': 13, 'name': 'Chicken Little' },
  { 'id': 14, 'name': 'Lightning McQueen' },
  { 'id': 15, 'name': 'Heisenberg' },
  { 'id': 16, 'name': 'Darth Vader' },
  { 'id': 17, 'name': 'Arthus' },
  { 'id': 18, 'name': 'Sylvanus' },
  { 'id': 19, 'name': 'Lich King' },
  { 'id': 20, 'name': 'Ugly Boy' }]

@app.route('/heroes', methods=['GET'])
def heroes():
    return jsonify(all_heroes)


app.run()