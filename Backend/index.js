const express = require("express");
const app = express();
const mainRouter = require("./routes/index");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/api/v1", mainRouter);

app.listen(1000, () => {
    console.log("Port Running at 1000")
})
