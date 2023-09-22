const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 8080
const { userRouter } = require("./routes/userRoute");
const { productRouter } = require("./routes/productRoute");
const { categoryRouter } = require("./routes/categoryRoute");
const { cartRouter } = require("./routes/cartRoute");
const { orderRouter } = require("./routes/orderRoute");


require("dotenv").config();

// Middleware Location
const { authenticateToken } = require("./middleware/auth_middleware");

//middleware to parse json request bodies
app.use(cors())
app.use(express.json())


// Home page Route
app.get("/", async (req, res) => {
    try {
        res.status(200).json({ success: "Welcome to the home page of Triveous backend Ecommerce API" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

// Routes (API Endpoints)
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", orderRouter);

app.listen(PORT, async () => {
  try {
    // Establishing database connection
    await connection;
    
    //
    console.log({message: `Server is running at ${PORT}`})
  } catch (error) {
    console.log(error.message)
  }
})
