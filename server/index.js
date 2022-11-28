const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

let data = {}

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

app.get('/receivedAction', (req, res) => {
    res.send(data);
});

app.get('/', (req, res) => {
    res.send("Hello");
});

app.post('/receivedAction', (req, res) => {
	data=req.body
	console.log(req.body)
   res.send("received action")
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
