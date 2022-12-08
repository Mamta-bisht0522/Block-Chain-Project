const express = require("express")
const mongoose = require("mongoose")
const route = require("./route/route")
const app = express()

app.use(express.json())
mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log("mongodb is connected"))
    .catch((error) => console.log(error))

app.use("/", route)

app.listen(process.env.PORT || 3000, function () {
    console.log("port is running on 3000 port")
})



