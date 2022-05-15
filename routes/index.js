const router = require("express").Router();
const get_invoice_without_saving_controller = require("./controllers/get_invoice_without_saving");

router.get("/invoice/direct",get_invoice_without_saving_controller);

module.exports = router;