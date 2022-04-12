const { application } = require('express');
const express = require('express');
const db = require('./queries.js');
const port = 3030;
const app = express();

let data = {
    name: 'Shinny Dango',
    power: 'Allem'
};

let info ={
    carMake: 'Mustang',
    year: 1969,
    style: 'GT',
    transmission: 'Manual'    
};

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', function (req, res) {
  res.send('Hello World!!!');
});

app.get('/name', function (req, res){
    res.send('Mike');
  });

app.get('/json', function(req, res){
    res.status(200).json(data);
});

app.post('/json', function(req, res){
    console.log(req.body);
    // data = {...data, ...req.body}
    Object.assign(data, req.body);
    res.status(200).json(data);
});

app.post('/addCarMake', function(req, res){
    console.log(req.body);
    Object.assign(info, req.body);
    res.status(200).json(info);
});

app.post('/updateVehicle', db.updateVehicle);

app.get('/getAllVehicles', db.getAllVehicles);
app.get('/getAllMakes', db.getAllMakes);

    console.log(`Starting server on port ${port}`);
app.listen(port);