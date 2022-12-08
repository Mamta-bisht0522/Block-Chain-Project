const express = require('express');
const router = express.Router();
const cryptocoinController=require("../controller/cryptocoinController")

router.get("/getBlock" ,cryptocoinController.getCryptoCoin)




module.exports = router;
