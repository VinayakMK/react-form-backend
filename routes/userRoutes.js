const express = require("express");
const { userRegister } = require("../controllers/userController");
const router = express.Router();


router.route('/userRegister').post(userRegister);

module.exports = router