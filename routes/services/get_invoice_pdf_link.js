const PDFDocument = require("pdfkit");
const save_file_pdf_aws = require("./save_file_pdf_aws").media_upload;

/**
 * Generates pdf and writes it directly onto the stream 
 * defined based on datacallback and endcallback
 * ref - https://pdfkit.org/docs/guide.pdf
 * @param {function} dataCallback 
 * @param {function} endCallback 
 * @param {objects} params 
 */
const savePdf = async () => {
    try {
        const doc = new PDFDocument();
        doc.fontSize(25)
            .text("Some text worth checking out", {
                align: "center"
            })
            .text("left text", {
                align: "left"
            });
        doc.end();
        const link = await save_file_pdf_aws(doc,"application/pdf","/testing/document/"+Date.now()+".pdf");
        return link;
    }
    catch (err) {
        console.log(err);
        throw new Error("Something went wrong");
    }
}

module.exports = { savePdf }