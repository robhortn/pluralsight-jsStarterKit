import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
	// Hard coding for simplicity; pretend this is hitting a DB.
	res.json([
		{"id": 1, "firstName": "Production", "lastName": "Horton", "email": "prdhorton@outlook.com"},
		{"id": 2, "firstName": "Heather", "lastName": "Horton", "email": "heatherhorton@outlook.com"},
		{"id": 3, "firstName": "Joshua", "lastName": "Horton", "email": "joshuahorton@outlook.com"}
	]);
});

app.listen(port, function(err){
	if (err) {
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});

