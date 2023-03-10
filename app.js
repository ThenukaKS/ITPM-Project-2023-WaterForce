const express = require("express");
require("express-async-errors");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db/connect");
const donateRoute = require("./routes/donate.route");
app.use(express.json());
app.use(cors());

//routes
app.use("/api/donate", donateRoute);

//error middleware

const start = async () => {
    port = process.env.PORT;
  
    //create server and connect with mongoDB
    try {
      await connectDB(process.env.MONGO_URL).then((err) =>
        console.log("Database connected successfully!")
      );
      app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  start();