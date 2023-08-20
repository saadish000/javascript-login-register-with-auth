const mongoose = require("mongoose");
const app = require("./app");

// Load environment variables from config.env
//require("dotenv").config();

// Connect to the database
mongoose
  .connect(
    "mongodb+srv://saadisheikh000:saad1234@cluster0.6b83bif.mongodb.net/javascriptapi?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.log(`Error ${e} occurred while connecting to db`);
  });

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
