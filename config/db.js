const mongoose = require("mongoose");
const connectDB = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB Connected...");
    })
    .catch((err) => {
      console.error(err.message);
      process.exit();
    });
};

module.exports = connectDB;
