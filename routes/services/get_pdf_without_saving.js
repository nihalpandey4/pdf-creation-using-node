const PDFDocument = require("pdfkit");

/**
 * Generates pdf and writes it directly onto the stream 
 * defined based on datacallback and endcallback
 * ref - https://pdfkit.org/docs/guide.pdf
 * @param {function} dataCallback 
 * @param {function} endCallback 
 * @param {objects} params 
 */
const buildPDF = (dataCallback, endCallback, params) => {
    const doc = new PDFDocument();
    doc.on("data",dataCallback);
    doc.on("end",endCallback);
    doc.fontSize(25)
    .text("Some text worth checking out",{
        align : "center"
    })
    .text("left text",{
        align : "left"
    });
    doc.end();
}

module.exports = { buildPDF }