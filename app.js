const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const fetchDataRouter = require("./routes/fetch-data");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(fetchDataRouter);


mongoose.connect('mongodb+srv://development:X3TcC8tKnI5JINuR@betalive.9sakb.gcp.mongodb.net/database')
.then(() => {
    app.listen(process.env.PORT || 8000);
})
.catch(err => {
    console.error(err);
})