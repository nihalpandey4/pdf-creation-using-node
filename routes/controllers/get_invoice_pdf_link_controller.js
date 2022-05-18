const get_pdf_without_saving_service = require("../services/get_invoice_pdf_link");

const get_invoice_without_saving_controller = async(req,res)=>{
    
    const query_params = req.query;
    const link = await get_pdf_without_saving_service.savePdf();
    res.status(200).json({
        link
    })
}

module.exports = get_invoice_without_saving_controller;