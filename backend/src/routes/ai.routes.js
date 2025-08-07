const express = require('express');//express package imported

const router = express.Router();//router created. object of router is created from the express package

const {getResponse}=require('../controllers/ai.controller');//getResponse function imported from ai.controller.js file 

router.get("/get-response",getResponse);  //route created for getResponse function in ai.controller.js and the path is given as "/get-response" getResponse is the element of the ai.controller.js file

module.exports = router;  //exporting the router so that it can be used in other files in future