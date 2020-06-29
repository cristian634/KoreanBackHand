const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(press.env.MONGODB_URI || "mongodb://localhost/kbh", {
    useNewUrlParser: true,
    useFindAndModift: false
}); 

app.listen(PORT, () => {
    console.log(`App running on port: ${POST}`);
}); 
