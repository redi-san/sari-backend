const express = require("express");
const { registerUser, getUser, updateUser } = require("../controllers/usersController");
const router = express.Router();

router.post("/", registerUser);  
router.get("/:uid", getUser);     
router.put("/:uid", updateUser);


module.exports = router;
