import express from "express";
import {
  createItem,
  deleteItem,
  getItemById,
  getItems,
  updateItem,
} from "../controllers/itemController.js";

const router = express.Router();

// These routes will handle the "Serial Number" automatically 
// because they link to the controller functions we just updated.

router.get("/", getItems);           // GET /api/items
router.get("/:id", getItemById);     // GET /api/items/:id
router.post("/", createItem);        // POST /api/items (Supports Serial Number)
router.put("/:id", updateItem);      // PUT /api/items/:id (Supports Serial Number)
router.delete("/:id", deleteItem);   // DELETE /api/items/:id

export default router;