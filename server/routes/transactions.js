const express = require("express");
const router = express.Router();
const allTransactions = require("../controller/allTransactions");

router.route("/").get(allTransactions.getTransaction).post(allTransactions.add);
router.route("/:id").delete(allTransactions.deleteTransaction);
module.exports = router;
