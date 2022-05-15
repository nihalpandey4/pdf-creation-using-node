const get_pdf_without_saving_service = require("../services/get_pdf_without_saving");

const get_invoice_without_saving_controller = async(req,res)=>{
    const stream = res.writeHead(200,{
        "Content-Type" : "application/pdf",
        "Content-Disposition" : "attachment;filename=invoice.pdf"
    });
    const query_params = req.query;
    get_pdf_without_saving_service.buildPDF(
        // keep on writing whatever chunk of data you are getting into the stream
        (chunk)=>stream.write(chunk),
        //end the stream, send the response, similar to res.end()
        ()=>stream.end(),
        //whatever extra params you want to pass
        query_params
    );
}

module.exports = get_invoice_without_saving_controller;