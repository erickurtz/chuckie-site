const folder = "./escape"; 

var fs = require ('fs');
var path = require ('path');
var process = require ("process");
var mongoClient = require('mongodb').MongoClient;


var toInsert = [];

var myTitle = "Escape from Za ";
var myDate = new Date("2019-12-09");
var path = "/assets/scanned_comics/"

fs.readdir(folder, (err,files) => {
    var i = 1;
    files.forEach(file=> {
	var currTitle = myTitle + i.toString();
	var currPath = path + file;
	var nav = file.replace('/.jpg', ''); 
	myObj = new Object();
	myObj.title = currTitle;
	myObj.path = currPath;
	myObj.published = myDate;
	myObj.created = myDate;
	myObj.nav = nav;
	toInsert.push(myObj)
	console.log(myObj);
	i++; 
    });

}); 


mongoClient.connect("mongodb://localhost27017/comics", function(err, db) {


}); 
