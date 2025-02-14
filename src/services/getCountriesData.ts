import axios from 'axios';
import dotenv from 'dotenv';

import { IAvailableCountries, IFlag, IPopulation } from '../types';

dotenv.config();

const BASE_URL_DATE_NAGER = process.env.BASE_URL_DATE_NAGER;
const BASE_URL_COUNTRIES_NOW = process.env.BASE_URL_COUNTRIES_NOW;

const getAvailableCountries = async () => {
  const response = await axios.get(`${BASE_URL_DATE_NAGER}/AvailableCountries`);

  return response.data;
};

const getBorders = async (code: string) => {
  const { data } = await axios.get(
    `${BASE_URL_DATE_NAGER}/CountryInfo/${code}`,
  );

  return data;
};

const getPopulation = async (iso3: string) => {
  const { data } = await axios.get(`${BASE_URL_COUNTRIES_NOW}/population`);

  const population = data.data.filter((pop: IPopulation) => pop.iso3 === iso3);

  return population[0].populationCounts;
};

const getPopulationByName = async (name: string) => {
  const { data } = await axios.get(`${BASE_URL_COUNTRIES_NOW}/population`);

  const population = data.data.filter((pop: IPopulation) =>
    pop.country.includes(name),
  );

  if (Object.keys(population).length > 0) {
    return population[0].populationCounts;
  }

  return [];
};

const getFlagData = async (code: string) => {
  const { data } = await axios.get(`${BASE_URL_COUNTRIES_NOW}/flag/images`);

  const countryFlag = data.data.filter((flag: IFlag) => flag.iso2 === code);

  return countryFlag;
};

const getCountryNameFromList = async (code: string) => {
  const countryList = await getAvailableCountries();
  const country = countryList.filter((country: IAvailableCountries) => {
    return country.countryCode === code;
  });

  return country[0].name;
};

export {
  getAvailableCountries,
  getBorders,
  getPopulation,
  getFlagData,
  getCountryNameFromList,
  getPopulationByName,
};
