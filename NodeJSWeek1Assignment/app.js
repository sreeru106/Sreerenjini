var http = require("http");
var express = require("express");
var path = require('path');

var app = express();

var students = [{"name":"Ramu","age":"25","id":"101"},{"name":"Ramus","age":"24","id":"102"}];

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static(__dirname + "/"));

app.use('/client', express.static(__dirname + '/client/'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);


app.get('/Student',function(req,res,next){
	console.log("Request");
	res.render("./index.html");
	});

app.get('/view',function(req,res){
	console.log("Received getStudent"+students);
	res.json(students);
});

app.post('/add',function(req,res){
		console.log("Received addNewStudent"+req.query.gender);
		var name = req.body.name;
		var age =req.body.age;
		var id = req.body.id;
		var newStudent = {"name":name,"age":age,"id":id};
		console.log("new Srudent "+newStudent);
		students.push(newStudent);
		res.json(students);
});

app.delete('/delete/:id',function(req,res){
	console.log("Received remopve student "+req.params.firstName);
	var id = req.params.id;
	for (var i = 0; i < students.length; i++){
		if (students[i].id == id){
			console.log("Found Student "+students[i].id);
			students.splice(i, 1); 
		}
	}
	res.json(students);
});


app.put('/update/:id',function(req,res){
	console.log("Received updateStudent "+req.query.firstname);
		var name = req.body.name;
		var age =req.body.age;
		var id = req.body.id;
	for (var i = 0; i < students.length; i++){
		if (students[i].id == id){
			console.log("Found Student "+students[i].name);
			students[i].name = name;
			students[i].age = age;
		}
	}
	res.json(students);
});

app.listen(8888);
console.log("Welcome to Node");
