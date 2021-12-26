const express = require("express");
const app = express();
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

app.use(express.json());

dotenv.config({ path: "./config.env" });

const transaction = require("./routes/transactions");

const DB = process.env.DATABASE.replace("<password>", process.env.PASSWORD);
//Connecting to mongoose server
const connect = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to mongoDB".rainbow);
  } catch (err) {
    console.log("error connecting to mongoose".red);
    process.exit(1);
  }
};
connect();
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const port = process.env.PORT || 4000;

app.use("/api/v1/transactions", transaction);

//listening on http://localhost:4000
app.listen(port, () => {
  console.log(`app is running on ${port}`.red.bold);
});
