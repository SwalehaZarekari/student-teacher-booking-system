const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path=require('path')

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));


app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/teacher", require("./routes/teacherRoutes"));


app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});





const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
    );
});






























