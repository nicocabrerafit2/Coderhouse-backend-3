import { Router } from "express";
import mocksController from "../controllers/mocks.controller.js";

const router = Router();

router.post("/mockingusers", mocksController.mockingusers);
router.post("/mockingpets", mocksController.mockingpets);
router.post("/generateData", mocksController.generateData);

export default router;
