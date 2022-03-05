export interface FlagData {
  emoji: string;
  image: string;
  coat_of_arms: string;
}

export interface CountryData {
  demonym: string;
  flag_data: FlagData;
}

export interface HermanoData {
  number: string;
  first_name: string;
  last_name: string;
  cross: string;
  major: string;
  graduation_year: string;
  country: string;
  image: string;
  country_data: CountryData;
}
