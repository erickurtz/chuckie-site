from flask import Flask, jsonify
import datetime

app = Flask(__name__)

today = datetime.date.today() 

comics = [
    {
        'id': 1, 
        'title': 'Banana', 
        'path': './assets/test-comics/banana1000.png', 
        'published': datetime.date.today(),
        'created': datetime.date.today()
    },
    {
        'id': 2, 
        'title': 'Cat 1', 
        'path': './assets/test-comics/cat1000.png', 
        'published': datetime.date.today(), 
        'created': datetime.date.today()
    },
    {
        'id': 3, 
        'title': 'Cat 2', 
        'path': './assets/test-comics/cat2-1000.jpg', 
        'published': datetime.date.today(), 
        'created': datetime.date.today()
    }
]


@app.route('/')
def hello_world():
    return 'Hello world!'

@app.route('/comics/<int:id>')
def get_book(id): 
    for comic in comics: 
        if comic["id"] == id:
            return_value = {
                'id': comic["id"],
                'title':  comic["title"],
                'path':  comic["path"],
                'published':  comic["published"],
                'created':  comic["published"]
                }
    
    return jsonify(return_value)

app.run(port=5000)