from flask import Flask,jsonify 
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin
from bson import json_util, ObjectId
import json
app = Flask (__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/comics"
app.config["CORS_HEADERS"] = 'Content-Type'

cors = CORS(app, resources={r"/comics": {"origins":"*"}})
mongo = PyMongo(app)

@app.route("/api/comics/<string:nav>")
@cross_origin(origin='*')
def get_comic(nav):
    comic = mongo.db.comics.find_one({"nav": nav})
    response = jsonify(json.loads(json_util.dumps(comic)))
    #response.headers.add('Access-Control-Allow-Origin','*')
    return response

@app.route("/api/comics/navs")
@cross_origin(origin='*')
def get_navs():
    navs = mongo.db.comics.find_one({"name" : "navs"})
    response = jsonify(json.loads(json_util.dumps(navs)))
    #response.headers.add('Access-Control-Allow-Origin','*')
    return response

app.run(port=5000)