const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const countryRoute = require("./routes/countryRoute");
const productionRoute = require("./routes/productionRoute");
const categoryRoute = require("./routes/categoryRoute");
const castRoute = require("./routes/castRoute");
const movieRoute = require("./routes/movieRoute");
const characterRoute = require("./routes/characterRoute");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/countries", countryRoute);
app.use("/api/productions", productionRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/casts", castRoute);
app.use("/api/movies", movieRoute);
app.use("/api/characters", characterRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
