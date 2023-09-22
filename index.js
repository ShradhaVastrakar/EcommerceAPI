const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 8080
const {userRouter} = require("./routes/userRoute")

require("dotenv").config();

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
