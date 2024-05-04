const mongoose = require("mongoose");

// Check if the User model is already defined
let User;
try {
  User = mongoose.model("User");
} catch (e) {
  // Define the Mongoose schema if the User model is not already defined
  const userSchema = new mongoose.Schema({
    Username: { type: "string", required: true },
    Email: { type: "string", required: true },
    Password: { type: "string", required: true },
  });
  User = mongoose.model("User", userSchema);
}
//const User = mongoose.model('User', userSchema);

async function addData(tmp) {
  try {
    const mongoose = require("mongoose");
    // Connect to MongoDB
    const a = await mongoose.connect(
      "mongodb+srv://poohvs555:1234@cluster0.sabvxtw.mongodb.net/User",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    const newUser = new User({
      Username: "BBB",
      Password: "123",
      Email: "a@a",
    });

    // Save the document to the database
    await newUser.save();
    console.log("User inserted:", newUser);
  } catch (error) {
    console.error("Error adding data:", error);
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

addData();
