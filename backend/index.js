require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

const User = require("./models/UserModel");
const Car = require('./models/CarModel');

const express = require("express");
const cors = require("cors");
const app = express();

const jwt = require("jsonwebtoken");
const { authentificateToken } = require("./utilities");

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);






app.post("/create-account", async (req, res) => {
  const { fullname, email, password, role } = req.body;

  // Validate input
  if (!fullname) {
    return res.status(400).json({ error: true, message: "Full name is required" });
  }
  if (!email) {
    return res.status(400).json({ error: true, message: "Email is required" });
  }
  if (!password) {
    return res.status(400).json({ error: true, message: "Password is required" });
  }
  if (!role || !['client', 'agency'].includes(role)) {
    return res.status(400).json({ error: true, message: "Invalid role" });
  }

  // Check if user already exists
  const isUser = await User.findOne({ email });
  if (isUser) {
    return res.status(400).json({
      error: true,
      message: "User already exists",
    });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const user = new User({
    fullname,
    email,
    password: hashedPassword,
    role,
  });

  try {
    await user.save();
  } catch (error) {
    console.error("Error saving user to database:", error);
    return res.status(500).json({
      error: true,
      message: "An error occurred while saving the user.",
    });
  }})














app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  const userInfo = await User.findOne({ email });
  if (!userInfo) {
    return res.status(400).json({ message: "User not found!" });
  }

  if (userInfo.email === email && userInfo.password === password) {
    const accessToken = jwt.sign(
      { userId: userInfo._id }, // Make sure userInfo._id is defined
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "36000m" }
    );

    return res.json({
      error: false,
      message: "Login successfully",
      email,
      accessToken,
    });
  } else {
    return res.status(400).json({
      error: true,
      message: "Invalid credentials",
    });
  }
});
app.get("/get-users", authentificateToken, async (req, res) => {
    try {
      const users = await User.find();
  
      return res.json({
        error: false,
        users: users.map(user => ({
          fullName: user.fullname,
          email: user.email,
          role: user.role,   // Include role in the response
          _id: user._id,
          createdOn: user.createdOn,
        })),
        message: "Users retrieved successfully",
      });
    } catch (error) {
      console.error("Error retrieving users:", error);
      return res.status(500).json({ error: true, message: "Internal server error." });
    }
  });
  
  
// Update user information
app.put("/update-user/:userId", authentificateToken, async (req, res) => {
  const { userId } = req.params; // Get userId from URL parameter
  const { fullname, email, password } = req.body; // Get updated information from request body

  // Ensure at least one field is provided to update
  if (!fullname && !email && !password) {
    return res
      .status(400)
      .json({
        error: true,
        message: "At least one field is required to update.",
      });
  }

  try {
    const user = await User.findById(userId); // Find user by userId

    if (!user) {
      return res.status(404).json({ error: true, message: "User not found." });
    }

    // Update fields if provided
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (password) user.password = password; // Ensure to hash the password before saving

    await user.save(); // Save the updated user

    return res.json({
      error: false,
      message: "User updated successfully.",
      user: {
        fullname: user.fullname,
        email: user.email,
        _id: user._id,
        createdOn: user.createdOn,
      },
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return res
      .status(500)
      .json({ error: true, message: "Internal server error." });
  }
});

// Delete user
app.delete("/delete-user/:userId", authentificateToken, async (req, res) => {
  const { userId } = req.params; // Get userId from URL parameter

  try {
    const user = await User.findByIdAndDelete(userId); // Find and delete user by userId

    if (!user) {
      return res.status(404).json({ error: true, message: "User not found." });
    }

    return res.json({ error: false, message: "User deleted successfully." });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res
      .status(500)
      .json({ error: true, message: "Internal server error." });
  }
});

// Get user by ID
app.get("/get-user/:userId", authentificateToken, async (req, res) => {
  const { userId } = req.params; // Get userId from URL parameter

  try {
    const user = await User.findById(userId); // Find user by userId

    if (!user) {
      return res.status(404).json({ error: true, message: "User not found." });
    }

    return res.json({
      error: false,
      user: {
        fullname: user.fullname,
        email: user.email,
        _id: user._id,
        createdOn: user.createdOn,
      },
      message: "User retrieved successfully.",
    });
  } catch (error) {
    console.error("Error retrieving user:", error);
    return res
      .status(500)
      .json({ error: true, message: "Internal server error." });
  }
});

app.post("/add-car", authentificateToken, async (req, res) => {
  const { brand, model, year, registrationNumber, transmission, fuelType, pricePerDay, seats, mileage, location, features, images } = req.body;
  const { userId } = req.user; // Access userId

  // Ensure all required fields are provided
  if (!brand || !model || !year || !registrationNumber || !transmission || !fuelType || !pricePerDay || !seats || !mileage || !location) {
    return res.status(400).json({ error: true, message: "All required fields must be filled" });
  }

  try {
    const car = new Car({
      brand,
      model,
      year,
      registrationNumber,
      transmission,
      fuelType,
      pricePerDay,
      seats,
      mileage,
      location,
      features: features || [],
      images: images || [],
      addedBy: userId // Save the user ID who added the car
    });

    await car.save();

    return res.json({
      error: false,
      car,
      message: "Car added successfully",
    });
  } catch (error) {
    console.error("Error while adding car:", error); 
    return res.status(500).json({
      error: true,
      message: "Internal server error"
    });
  }
});


app.put("/edit-car/:carId", authentificateToken, async (req, res) => {
  const carId = req.params.carId;
  const { brand, model, year, registrationNumber, transmission, fuelType, pricePerDay, seats, mileage, location, features, images, available } = req.body;
  const { userId } = req.user; // Get userId

  // Ensure user is authenticated
  if (!userId) {
    return res.status(403).json({ error: true, message: "User not authenticated" });
  }

  try {
    const car = await Car.findOne({ _id: carId, addedBy: userId }); // Ensure the car belongs to the user

    if (!car) {
      return res.status(404).json({ error: true, message: "Car not found or you don't have permission to edit this car" });
    }

    // Update only the fields that are provided
    if (brand) car.brand = brand;
    if (model) car.model = model;
    if (year) car.year = year;
    if (registrationNumber) car.registrationNumber = registrationNumber;
    if (transmission) car.transmission = transmission;
    if (fuelType) car.fuelType = fuelType;
    if (pricePerDay) car.pricePerDay = pricePerDay;
    if (seats) car.seats = seats;
    if (mileage) car.mileage = mileage;
    if (location) car.location = location;
    if (features) car.features = features;
    if (images) car.images = images;
    if (available !== undefined) car.available = available;

    await car.save();

    return res.json({
      error: false,
      car,
      message: "Car updated successfully",
    });
  } catch (error) {
    console.error("Error while updating car:", error); 
    return res.status(500).json({
      error: true,
      message: "Server error",
    });
  }
});

app.get("/get-all-cars", authentificateToken, async (req, res) => {
  try {
    const cars = await Car.find().sort({ createdOn: -1 }); // Fetch all cars sorted by creation date

    return res.json({
      error: false,
      cars,
      message: "All cars retrieved successfully"
    });
  } catch (error) {
    console.error("Error while fetching cars:", error);
    return res.status(500).json({
      error: true,
      message: "Server error",
    });
  }
});
app.delete("/delete-car/:carId", authentificateToken, async (req, res) => {
  const carId = req.params.carId;
  const { userId } = req.user; // Get userId from the request

  try {
    // Find the car by ID and ensure it belongs to the user
    const car = await Car.findOneAndDelete({ _id: carId, addedBy: userId });
    
    if (!car) {
      return res.status(404).json({ error: true, message: "Car not found or you don't have permission to delete this car" });
    }

    return res.json({ error: false, message: "Car deleted successfully" });
  } catch (error) {
    console.error("Error while deleting car:", error);
    return res.status(500).json({ error: true, message: "Server error" });
  }
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});

module.exports = app;
