const db = require('../config/database');

module.exports = class Report {
    constructor(id, name, roomnumber, day, temperature, symptoms){
        this.id = id;
        this.name = name;
        this.roomnumber = roomnumber;
        this.day = day;
        this.temperature = temperature;
        this.symptoms = symptoms;
    }

    save(){
        // save report to database
        const reports = db.execute('SELECT * FROM reports');
        console.log(reports);
    };

    delete() {
        // delete report from DB
    }

    static deleteById(){
        // delete report by id
    }

    static getAllByRoomnumber() {

    }



};