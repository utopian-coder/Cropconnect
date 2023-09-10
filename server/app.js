const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const appError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);

//Handling request to routes that aren't defined on the server
app.all("*", (req, res, next) =>
  next(new appError(`Can't find ${req.originalUrl} on this server!`, 404))
);

//Global error handling middleware
app.use(globalErrorHandler);

module.exports = app;
