const mongoose = require('mongoose');
require('dotenv').config({path: __dirname + '../.env'});

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');