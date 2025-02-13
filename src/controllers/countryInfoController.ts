import { Request, Response } from "express";

import catchAsync from "../utils/catchAsync";
import {
  getBorders,
  getFlagUrl,
  getPopulation,
} from "../services/getCountriesData";

const countryInfoController = catchAsync(
  async (req: Request, res: Response) => {
    const { code } = req.params;

    const borders = await getBorders(code);

    const countryFlag = await getFlagUrl(code);

    const population = await getPopulation(countryFlag[0].iso3);

    res.status(200).json({ borders, flagUrl: countryFlag[0].flag, population });
  }
);

export default countryInfoController;
