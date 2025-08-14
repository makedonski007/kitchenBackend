import express from 'express';
const router = express.Router();

import {
  loginSuperAdmin,
  createKitchen,
  createKitchenAdmin,
  getAllKitchens,
  getAllAdmins,
} from "../controllers/superAdmin.controllers.js";
import { protectSuperAdmin } from "../middlewares/authMiddleware.js";

router.post("/login", loginSuperAdmin);

router.use(protectSuperAdmin);

router.post("/kitchens", createKitchen);
router.post("kitchens", getAllKitchens);

router.post("/admins", createKitchenAdmin);
router.get("/admins", getAllAdmins);

export default router;