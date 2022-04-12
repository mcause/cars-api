//loads the data from .env and stores it to process.env
const dotenv = require('dotenv');
dotenv.config();
const Pool = require('pg').Pool;

// destructure keys from our local .env so our passwords are not stored on github
const {PSQL_HOST, PSQL_USER, PSQL_PASS, PSQL_DB, PSQL_PORT} = process.env;

//Create a connection to our database
const pool = new Pool({
    user: PSQL_USER,
    password: PSQL_PASS,
    database: PSQL_DB,
    host: PSQL_HOST,
    port: PSQL_PORT
});

const getAllVehicles= (req, res) => {
    pool.query('SELECT * FROM Vehicles;')
        .then(results => {
            res.status(200).json(results.rows);

    })
    .catch(error =>{
        throw error;
    })
} 
const getAllMakes= (req, res) => {
    pool.query('SELECT * FROM Makes;')
        .then(results => {
            res.status(200).json(results.rows);
    })
    .catch(error =>{
        throw error;
    })
}
const updateVehicle= (req, res) => {
    pool.query(`UPDATE Vehicles SET 
    make = $1,
    model = $2, 
    engine = $3, 
    color = $4, 
    license_plate_number = $5,
    drive = $6
    WHERE vehicle_id = $7 RETURNING *;`, [req.body.make, req.body.model, req.body.engine, req.body.color, req.body.license_plate_number, req.body.drive, req.body.vehicle_id])
        .then(results => {
            res.status(204).json(results.rows);
        })
        .catch(error =>{
            throw error;
        })
        
}
module.exports = {
    getAllVehicles,
    getAllMakes,
    updateVehicle
}

