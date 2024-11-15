import { Router } from "express";
import mocksController from "../controllers/mocks.controller.js";

const router = Router();

router.get("/mockingusers", mocksController.mockingusers);
router.get("/mockingpets", mocksController.mockingpets);
//router.post("/generateData", petsController.generateData);

export default router;
