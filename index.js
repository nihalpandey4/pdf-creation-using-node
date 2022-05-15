const express = require("express");

const app = express();
const routes = require("./routes");

const PORT = 3000;

app.use("/api",routes);

app.listen(PORT,()=>console.log(`Server started at ${PORT}`));