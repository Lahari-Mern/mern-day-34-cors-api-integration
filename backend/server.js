const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({
  origin: "http://localhost:3000"
}));
app.use(express.json());
app.get("/api/profile", (req, res) => {
  res.status(200).json({
    name: "Surendra",
    email: "surendra@gmail.com",
    role: "Developer"
  });
});
app.post("/api/users", (req, res) => {
  try {
    const user = req.body;

    if (!user.name) {
      return res.status(400).json({
        error: "Name is required"
      });
    }
    res.status(201).json({
      message: "User created successfully",
      data: user
    });

  } catch (error) {
    res.status(500).json({
      error: "Something went wrong"
    });
  }
});
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});
app.listen(5000, () => {
  console.log(" Server running on port 5000");
});