const express = require("express");
const {createproduct, getproducts, getproduct, deleteproduct, updateproduct} = require("../controllers/product.controller")

const router = express.Router();

router.post("/createproduct", createproduct);
router.get("/getproducts", getproducts);
router.get("/getproduct/:productId", getproduct)
router.delete("/deleteproduct/:productId", deleteproduct)
router.put("/updateproduct/:productId", updateproduct)

module.exports = router;
