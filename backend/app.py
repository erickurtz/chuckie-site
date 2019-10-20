from flask import Flask,jsonify 
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin

app = Flask (__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/comics"
app.config["CORS_HEADERS"] = 'Content-Type'

cors = CORS(app, resources={r"/comics": {"origins":"http://localhost:4000"}})
mongo = PyMongo(app)

@app.route("/comics/<string:nav>")
@cross_origin(origin='localhost')
def get_comic(nav):
    comic = mongo.db.comics.find_one({"nav": nav})
    response = jsonify(comic)
    ##response.headers.add('Access-Control-Allow-Origin','*')
    return response



app.run(port=5000)