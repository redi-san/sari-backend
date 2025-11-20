const express = require("express");
const { getOrders, getOrdersByUser, getOrderById, createOrder, deleteOrder, updateOrder } = require("../controllers/ordersController");

const router = express.Router();

router.get("/user/:uid", getOrdersByUser);

router.get("/", getOrders);
router.get("/:id", getOrderById);

router.post("/", createOrder);
router.delete("/:id", deleteOrder);
router.put("/:id", updateOrder);

module.exports = router;



