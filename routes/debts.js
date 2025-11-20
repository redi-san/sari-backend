const express = require("express");
const { getDebt, getDebtsByUser, createDebt, deleteDebt, addDebtProducts, updateStatus, addPayment, updateDebt,  } = require("../controllers/debtsController");


const router = express.Router();


router.get("/", getDebt);
router.get("/user/:uid", getDebtsByUser); // ✅ Added route
router.post("/", createDebt);
router.delete("/:id", deleteDebt);
router.post("/:debtId/products", addDebtProducts);
router.put("/:id/status", updateStatus);
router.put("/:id", updateDebt);

router.post("/:id/payment", addPayment);


module.exports = router;



