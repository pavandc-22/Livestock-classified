// // const express = require("express");
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const livestockRoutes = require("./routes/livestock");

// dotenv.config();

// const app = express();

// // ✅ allow Vite (5173) + CRA (3000)
// app.use(cors({
//   origin: [
//     "http://localhost:3000",
//     "http://localhost:5173"
//   ],
//   methods: ["GET", "POST"],
//   allowedHeaders: ["Content-Type"]
// }));

// app.use(express.json({ limit: "10mb" }));

// // Routes
// app.get("/", (req, res) => {
//   res.send("Livestock API running ✅");
// });
// app.use("/api/livestock", livestockRoutes);

// // DB + Server
// const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/livestockDB";
// const PORT = process.env.PORT || 5000;

// mongoose.connect(MONGO_URI)
//   .then(() => {
//     console.log("✅ MongoDB Connected");
//     app.listen(PORT, () => console.log(`✅ Backend running at http://localhost:${PORT}`));
//   })
//   .catch(err => console.error("❌ DB Connection Error:", err));


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const livestockRoutes = require("./routes/livestock");

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  res.send("Livestock API running ✅");
});

// ✅ Correct API prefix
app.use("/api/livestock", livestockRoutes);

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/livestockDB";
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`✅ Backend running at http://localhost:${PORT}`));
  })
  .catch(err => console.error("❌ DB Connection Error:", err));
