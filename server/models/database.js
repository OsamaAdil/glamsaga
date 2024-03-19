const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// let mongoHost =  "mongodb://192.168.1.15";
let mongoHost =  "mongodb://localhost";
let mongoPort = "27017";
let dbName = process.env.DB_NAME;

// mongodb+srv://osamaadilkhan25:<password>@cluster0.rkpzlop.mongodb.net/?retryWrites=true&w=majority

const connectMongoDBDatabaseWithRetry = async function(){
    try {
        const res = mongoose.connect(`${mongoHost}:${mongoPort}/${dbName}`);
        console.log("succesfully connect to database");
    }catch (err) {
        console.log("error in connecting to database");
        setTimeout(() => connectMongoDBDatabaseWithRetry(), 2000 );
    }
}

connectMongoDBDatabaseWithRetry();

module.exports = mongoose;