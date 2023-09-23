const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 8080
const colors = require("colors");
const { userRouter } = require("./routes/userRoute");
const { productRouter } = require("./routes/productRoute");
const { categoryRouter } = require("./routes/categoryRoute");
const { cartRouter } = require("./routes/cartRoute");
const { orderRouter } = require("./routes/orderRoute");
const { requestLoggerMiddleware } = require("./middleware/loggerMiddleware")

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");


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

// **************************SWAGGER*****************************

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Triveous Ecommerce Backend",
      version: "1.0.0",
      description:
        "This is Triveous Ecommerce API, user can register and login with valid credentials and after authentication user can see products and purchase any product with their category. If user wants to view the single product items etc. they can also view and if user wants to edit anything so they can also do this in the cart section and in order section they can either place and order and can see order history.",
    },
    servers: [
      {
        url: "http://52.22.2.243:8080/api"
      }
    ],
  },
  apis: ["./docs/*.js"],
};
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));


// Routes (API Endpoints)
app.use(requestLoggerMiddleware);
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
