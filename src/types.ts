export interface IBorderCountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null;
}

export interface IPopulation {
  country: string;
  code: string;
  iso3: string;
  populationCounts: IPopulationCounts[];
}

export interface IPopulationCounts {
  year: string;
  value: string;
}

export interface IAvailableCountries {
  countryCode: string;
  name: string;
}

export interface IFlag {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}
