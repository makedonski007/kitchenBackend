import express from 'express';
const router = express.Router();
import { checkIn, checkOut } from '../controllers/worker.controller.js';
import { kitchenDbMiddleware } from "../middlewares/kitchenMiddleware.js"

router.post("/checkin", kitchenDbMiddleware, checkIn);
router.post("/checkout", kitchenDbMiddleware, checkOut);

export default router;