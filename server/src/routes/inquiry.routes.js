// routes/inquiryRoutes.js

import express from "express";
import {
  createInquiry,
  getAllInquiries,
  getInquiryById,
  updateInquiry,
  deleteInquiry,
} from "../controller/inquiryController.js";

const router = express.Router();

router.post("/", createInquiry);
router.get("/", getAllInquiries);
router.get("/:id", getInquiryById);
router.put("/:id", updateInquiry);
router.delete("/:id", deleteInquiry);

export default router;
