const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/product.route")
const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB is connected"))
  .catch((error) => console.log(error));

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser())

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  try {
    console.log("requette fonctionnelle");
    res.status(200).json()
  } catch (error) {
    console.log("error");
  }
});

app.use("/api/product", productRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
