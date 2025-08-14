import express from "express";
const router = express.Router();
import { protectWorker } from "../middlewares/authMiddleware";
import { kitchenDbMiddleware } from "../middlewares/kitchenMiddleware";

import {
  getTables,
  getCategories,
  getCategoryProducts,
} from "../controllers/admin.controller.js";

import {
  createOrder,
  getOrders,
  loginWorker,
} from "../controllers/worker.controller.js"

router.post("/login", kitchenDbMiddleware, loginWorker);

router.use(protectWorker);
router.use(kitchenDbMiddleware);

// Orders
router.post("/orders", createOrder);
router.get("/orders", getOrders);

// Tables
router.get("/tables", getTables);

