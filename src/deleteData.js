const express = require('express');
// const route = require('./route/route.js');
const mongoose = require('mongoose');
const cryptocoinModel = require("./model/cryptocoinModel")

const app = express();

app.use(express.json());

mongoose.set('strictQuery', true)

mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

const deleteData = async (req,res) => {
    try{
        await cryptocoinModel.deleteMany();
        console.log("Data deleted Successfully");
        
    } catch (err) {
        console.log(err);
    }};
    deleteData();

   