const axios = require("axios")
const cryptocoinModel = require("../model/cryptocoinModel")

let getCryptoCoin = async function (req, res) {
    try {
        let header = req.header('Authorization')
        if (!header) return res.send({ msg: "this is required" })
        let apiKey = "91defc6b-94df-444f-b66e-9dad96e5ea41"
        if (header != `Bearer ${apiKey}`) return res.send({ msg: "unauthorised" })
        let options = {
            method: "get",
            url: 'https://api.coincap.io/v2/assets'
        }

        let result = await axios(options)

        let data = result.data.data
             let sortData=data.sort((a,b)=>a.changePercent24Hr-b.changePercent24Hr)
             let coinData = await cryptocoinModel.insertMany(sortData)

       res.status(200).send({ status: true, data: sortData })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}

module.exports.getCryptoCoin = getCryptoCoin