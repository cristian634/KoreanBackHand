const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/kbh')
    .then(() => console.log("MongoDB is connected..."))
    .catch(err => console.log(err)); 

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
}); 
