const router = require("express").Router();
const get_invoice_without_saving_controller = require("./controllers/get_invoice_without_saving");
const get_invoice_link_saving_controller = require("./controllers/get_invoice_pdf_link_controller");

router.get("/invoice/file",get_invoice_without_saving_controller);
router.get("/invoice/link",get_invoice_link_saving_controller);

module.exports = router;