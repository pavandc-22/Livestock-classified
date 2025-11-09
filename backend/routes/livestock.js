// // // backend/routes/livestock.js
// // const express = require("express");
// // const Livestock = require("../models/Livestock");
// // const router = express.Router();

// // router.get("/", async (_req, res) => {
// //   try {
// //     const items = await Livestock.find().sort({ createdAt: -1 });
// //     res.json(items);
// //   } catch (e) {
// //     res.status(500).json({ error: "Failed to fetch livestock" });
// //   }
// // });

// // router.get("/:id", async (req, res) => {
// //   try {
// //     const item = await Livestock.findById(req.params.id);
// //     if (!item) return res.status(404).json({ error: "Not found" });
// //     res.json(item);
// //   } catch (e) {
// //     res.status(400).json({ error: "Invalid ID" });
// //   }
// // });

// // router.post("/", async (req, res) => {
// //   try {
// //     const required = ["name", "type", "price", "city", "contactName", "contactPhone", "imageBase64"];
// //     for (const f of required) {
// //       if (!req.body[f]) return res.status(400).json({ error: `Missing field: ${f}` });
// //     }
// //     const created = await Livestock.create(req.body);
// //     res.status(201).json({ message: "Livestock added", id: created._id });
// //   } catch (e) {
// //     res.status(500).json({ error: "Failed to add livestock" });
// //   }
// // });

// // module.exports = router;


// // backend/routes/livestock.js
// const express = require("express");
// const Livestock = require("../models/Livestock");
// const router = express.Router();

// router.get("/", async (_req, res) => {
//   try {
//     const items = await Livestock.find().sort({ createdAt: -1 });
//     res.json(items);
//   } catch (e) {
//     res.status(500).json({ error: "Failed to fetch livestock" });
//   }
// });

// router.get("/:id", async (req, res) => {
//   try {
//     const item = await Livestock.findById(req.params.id);
//     if (!item) return res.status(404).json({ error: "Not found" });
//     res.json(item);
//   } catch (e) {
//     res.status(400).json({ error: "Invalid ID" });
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const required = ["name", "type", "price", "city", "contactName", "contactPhone", "imageBase64"];
//     for (const f of required) {
//       if (!req.body[f]) return res.status(400).json({ error: `Missing field: ${f}` });
//     }
//     const created = await Livestock.create(req.body);
//     res.status(201).json({ message: "Livestock added", id: created._id });
//   } catch (e) {
//     res.status(500).json({ error: "Failed to add livestock" });
//   }
// });

// // ✅ DELETE livestock by ID
// router.delete("/:id", async (req, res) => {
//   try {
//     const deleted = await Livestock.findByIdAndDelete(req.params.id);
//     if (!deleted) return res.status(404).json({ error: "Livestock not found" });
//     res.json({ message: "Livestock deleted ✅" });
//   } catch (e) {
//     res.status(400).json({ error: "Delete failed" });
//   }
// });

// module.exports = router;
const express = require("express");
const Livestock = require("../models/Livestock");
const router = express.Router();

// ✅ Get all livestock
router.get("/", async (_req, res) => {
  try {
    const items = await Livestock.find().sort({ createdAt: -1 });
    res.json(items);
  } catch {
    res.status(500).json({ error: "Failed to fetch livestock" });
  }
});

// ✅ Get single by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await Livestock.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Not found" });
    res.json(item);
  } catch {
    res.status(400).json({ error: "Invalid ID" });
  }
});

// ✅ Add new livestock
router.post("/", async (req, res) => {
  try {
    const created = await Livestock.create(req.body);
    res.status(201).json({ message: "Livestock added", id: created._id });
  } catch {
    res.status(500).json({ error: "Failed to add livestock" });
  }
});

// ✅ DELETE livestock
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Livestock.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Livestock deleted ✅" });
  } catch {
    res.status(400).json({ error: "Delete failed" });
  }
});

module.exports = router;
