import { Request, Response } from "express";

import { getAvailableCountries } from "../services/getCountriesData";
import catchAsync from "../utils/catchAsync";

const availableCountriesController = catchAsync(
  async (req: Request, res: Response) => {
    const availableCountries = await getAvailableCountries();

    res.status(200).json(availableCountries);
  }
);

export default availableCountriesController;
