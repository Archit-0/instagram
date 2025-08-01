import e from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
const app = e();

dotenv.config();

// MongoDB connection
const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST"],
  credentials: true,
  optionsSuccessStatus: 200,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"], // Explicitly allow necessary headers
};

// Middleware

app.use(cors(corsOptions));
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_url);
    console.log(`Successfully connected to MongoDB 👍`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Mongoose Schema & Model
const loginSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const LoginModel = mongoose.model("Login", loginSchema);

app.use(e.json()); // middleware to parse JSON

// Register route
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await LoginModel.create({ email, password });
    if (user) {
      res.status(200).json({ email, password });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

connectDB();

app.listen(3000, () => {
  console.log("running on port 3000");
});
