import axios from "axios";

const API = axios.create({
  // This uses your environment variable or falls back to localhost
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

// GET all items
export const getItems = () => API.get("/items");

// GET a single item by ID
export const getItemById = (id) => API.get(`/items/${id}`);

// CREATE a new item (itemData now includes name, category, price, description, imageUrl, and serialNumber)
export const createItem = (itemData) => API.post("/items", itemData);

// UPDATE an existing item
export const updateItem = (id, itemData) => API.put(`/items/${id}`, itemData);

// DELETE an item
export const deleteItem = (id) => API.delete(`/items/${id}`);

export default API;