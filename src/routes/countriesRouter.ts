import express from "express";
import availableCountriesController from "../controllers/availableCountriesController";
import countryInfoController from "../controllers/countryInfoController";

const router = express.Router();

router.route("/").get(availableCountriesController);
router.route("/:code").get(countryInfoController);

export default router;
