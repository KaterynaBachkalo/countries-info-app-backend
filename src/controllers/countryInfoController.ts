import { Request, Response } from 'express';

import catchAsync from '../utils/catchAsync';
import {
  getBorders,
  getCountryNameFromList,
  getFlagData,
  getPopulation,
  getPopulationByName,
} from '../services/getCountriesData';

const countryInfoController = catchAsync(
  async (req: Request, res: Response) => {
    const { code } = req.params;
    let flagUrl;
    let population;

    const borders = await getBorders(code);

    const countryFlagData = await getFlagData(code);

    if (Object.keys(countryFlagData).length > 0) {
      flagUrl = countryFlagData[0].flag;
      population = await getPopulation(countryFlagData[0].iso3);
    } else {
      flagUrl = '';

      let contryName = await getCountryNameFromList(code);

      population = await getPopulationByName(contryName);
    }

    res.status(200).json({ borders, flagUrl: flagUrl, population });
  },
);

export default countryInfoController;
