INSERT INTO Users (id, full_name, email, roomnumber, user_password) VALUES (1, "Dennis Smith", "dennis.smith@gmail.com", 2803, "secret123");
INSERT INTO Users (id, full_name, email, roomnumber, user_password) VALUES (2, "Florian Geisberger", "florian.geisberger@gmail.com", 2518, "moresecure");

INSERT INTO Symptoms(id, description) VALUES (1, "healthy");
INSERT INTO Symptoms(id, description) VALUES (2, "cough");
INSERT INTO Symptoms(id, description) VALUES (3, "diarrhea");
INSERT INTO Symptoms(id, description) VALUES (4, "cough and diarrhea");

INSERT INTO Reports (userId, day, temperature, symptom) VALUES (1, 1, 36.1, 1);
INSERT INTO Reports (userId, day, temperature, symptom) VALUES (1, 1, 36.6, 1);

