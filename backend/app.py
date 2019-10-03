from flask import Flask,jsonify 
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin

app = Flask (__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/comics"
app.config["CORS_HEADERS"] = 'Content-Type'
mongo = PyMongo(app)

@app.route("/comics/<int:id>")
@cross_origin()
def get_comic(id):
    comic = mongo.db.comics.find_one({"_id": id})
    return jsonify(comic)



app.run(port=5000)