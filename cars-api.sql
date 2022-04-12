DROP TABLE Vehicles;
DROP TABLE Makes;

CREATE TABLE IF NOT EXISTS Makes(
    make_id SERIAL PRIMARY KEY,
    name TEXT UNIQUE,
    origin TEXT
);

CREATE TABLE IF NOT EXISTS Vehicles(
    vehicle_id SERIAL PRIMARY KEY,
    -- make SERIAL FOREIGN KEY REFERENCES Makes(make_id),
    make INT,
    CONSTRAINT FK_make_id FOREIGN KEY (make)
    REFERENCES Makes(make_id),
    model TEXT NOT NULL,
    engine TEXT NOT NULL,
    color TEXT NOT NULL, 
    license_plate_number TEXT, 
    drive INT NOT NULL
);

INSERT INTO Makes VALUES(DEFAULT, 'BMW', 'Germany');
INSERT INTO Makes VALUES(DEFAULT, 'Ford', 'USA');
INSERT INTO Makes VALUES(DEFAULT, 'Chevy', 'USA');
INSERT INTO Makes VALUES(DEFAULT, 'GMC', 'USA');


INSERT INTO Vehicles VALUES (DEFAULT, (SELECT make_id FROM Makes WHERE name = 'BMW'), 'i8', 'V12', 'GREY', 'V34-7168', '2');
INSERT INTO Vehicles VALUES (DEFAULT, (SELECT make_id FROM Makes WHERE name = 'Ford'), 'F-250', 'V8', 'RED', 'V86-7154', '4');
INSERT INTO Vehicles VALUES (DEFAULT, (SELECT make_id FROM Makes WHERE name = 'Chevy'), 'Silverado', 'V12', 'SILVER', 'OFFROAD', '4');
INSERT INTO Vehicles VALUES (DEFAULT, (SELECT make_id FROM Makes WHERE name = 'GMC'), 'Yukon Denali', 'V8', 'MIDNIGHT-BLUE', 'V56-3179', '4');
INSERT INTO Vehicles VALUES (DEFAULT, (SELECT make_id FROM Makes WHERE name = 'Ford'), 'Mustang', 'V12', 'Black', 'V95-54572', '2');
INSERT INTO Vehicles VALUES (DEFAULT, (SELECT make_id FROM Makes WHERE name = 'Chevy'), 'Corvette', 'V8', 'Yellow', 'NOTHERE', '2');


