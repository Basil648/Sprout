import express from "express";
import { simpleSearch } from "../controllers/simpleSearchController.js";

const router = express.Router();

router.get("/products", simpleSearch);

export default router;
