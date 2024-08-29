// src/dataMappings.ts

// import countries from '../data/countries.json';
import alpha2codesonly from "../data/alpha2Codes.json";
import alpha3Alpha2Mapping from '../data/alpha3Alpha2Mapping.json';
import alpha2CurrencySymbolMapping from '../data/alpha2CurrencySymbolMapping.json';
import drivingSideApha2Mapping from '../data/drivingSideApha2Mapping.json';
import capitalsAlpha2Mapping from '../data/capitalsAlpha2Mapping.json';
import dialingCodeAlpha2Mapping from '../data/dialingCodeAlpha2Mapping.json';
import alpha2EmergencyNumbersMapping from '../data/alpha2EmergencyNumbersMapping.json';
import flagEmojiAlpha2Mapping from '../data/flagEmojiAlpha2Mapping.json';
import alpha2FlagSVGMapping from '../data/alpha2FlagSVGMapping.json';
import countryNameAlpha2Mapping from '../data/countryNameAlpha2Mapping.json';
import languageAlpha2Mapping from '../data/languageAlpha2Mapping.json';
import phoneMaskalpha2Mapping from '../data/phoneMaskalpha2Mapping.json';
import currencyAlpha2Mapping from '../data/currencyAlpha2Mapping.json';
import numericCodeAlpha2Mapping from '../data/numericCodeAlpha2Mapping.json';
import continentAlpha2Mapping from '../data/continentAlpha2Mapping.json';
import currencyCodeAlpha2Mapping from '../data/currencyCodeAlpha2Mapping.json';


type valuesAlpha2MappingFiles = {
  [key: string]: { file: { [key: string]: (string | string[]) }, keyVal: CFields }
};

export enum CFields {
  alpha2Code = "alpha2Code",
  alpha3Code = "alpha3Code",
  capitalCity = "capitalCity",
  continentName = "continentName",
  countryName = "countryName",
  currency = "currency",
  currencyCode = "currencyCode",
  currencySymbol = "currencySymbol",
  dialingCode = "dialingCode",
  drivingSide = "drivingSide",
  emergencyNumbers = "emergencyNumbers",
  flagEmoji = "flagEmoji",
  flagSVGUrl = "flagSVGUrl",
  numericCountryCode = "numericCountryCode",
  phoneNumberMask = "phoneNumberMask",
  primaryLanguage = "primaryLanguage"
}


export const valuesAlpha2MappingFiles: valuesAlpha2MappingFiles = {
  "alpha3code": { "file": alpha3Alpha2Mapping, keyVal: CFields.alpha3Code },
  "capitalcity": { "file": capitalsAlpha2Mapping, keyVal: CFields.capitalCity },
  "continentname": { "file": continentAlpha2Mapping, keyVal: CFields.continentName },
  "countryname": { "file": countryNameAlpha2Mapping, keyVal: CFields.countryName },
  "currency": { "file": currencyAlpha2Mapping, keyVal: CFields.currency },
  "currencycode": { "file": currencyCodeAlpha2Mapping, keyVal: CFields.currencyCode },
  "dialingcode": { "file": dialingCodeAlpha2Mapping, keyVal: CFields.dialingCode },
  "drivingside": { "file": drivingSideApha2Mapping, keyVal: CFields.drivingSide },
  "flagemoji": { "file": flagEmojiAlpha2Mapping, keyVal: CFields.flagEmoji },
  "numericcountrycode": { "file": numericCodeAlpha2Mapping, keyVal: CFields.numericCountryCode },
  "primarylanguage": { "file": languageAlpha2Mapping, keyVal: CFields.primaryLanguage },
  "phonenumbermask": { "file": phoneMaskalpha2Mapping, keyVal: CFields.phoneNumberMask },
  "alpha2code": { "file": phoneMaskalpha2Mapping, keyVal: CFields.phoneNumberMask }//just a random value not needed , should be handled
}


type alpha2ValuesMappingFilesEntries = {
  [key: string]: { file: { [key: string]: (string | string[] | {}) }, keyVal: CFields }
};
const alpha2ValuesMappingFiles: alpha2ValuesMappingFilesEntries = {
  "alpha2CurrencySymbol": { "file": alpha2CurrencySymbolMapping, keyVal: CFields.currencySymbol },
  "emergencyNumbers": { "file": alpha2EmergencyNumbersMapping, keyVal: CFields.emergencyNumbers },
  "flagSVGUrl": { "file": alpha2FlagSVGMapping, keyVal: CFields.flagSVGUrl }
}




// Create a namespace
export namespace SFields {
  export const alpha2Codes = alpha2CurrencySymbolMapping;
  export const alpha3Codes = alpha3Alpha2Mapping;
  export const capitalCities = capitalsAlpha2Mapping;
  export const continentNames = continentAlpha2Mapping;
  export const countryNames = countryNameAlpha2Mapping;
  export const currencies = currencyAlpha2Mapping;
  export const currencyCodes = currencyCodeAlpha2Mapping;
  export const dialingCodes = dialingCodeAlpha2Mapping;
  export const drivingSides = drivingSideApha2Mapping;
  export const flagEmojis = flagEmojiAlpha2Mapping;
  export const numericCountryCodes = numericCodeAlpha2Mapping;
  export const phoneNumberMasks = phoneMaskalpha2Mapping;
  export const primaryLanguages = languageAlpha2Mapping;
}


type CountryData = {
  [key in CFields]: string | string[] | { [key: string]: string };
};
const countries: { [key: string]: CountryData } = {};

let initCountryData = () => ({
  alpha2Code: "",
  alpha3Code: "",
  capitalCity: "",
  continentName: "",
  countryName: "",
  currency: "",
  currencyCode: "",
  currencySymbol: "",
  dialingCode: "",
  drivingSide: "",
  emergencyNumbers: "",
  flagEmoji: "",
  flagSVGUrl: "",
  numericCountryCode: "",
  phoneNumberMask: "",
  primaryLanguage: ""
});

Object.values(alpha2ValuesMappingFiles).forEach(({ file, keyVal }) => {
  for (const [alpha2, value] of Object.entries(file)) {
    if (!countries[alpha2]) {
      countries[alpha2] = initCountryData();
    }
    countries[alpha2][keyVal] = value;
    countries[alpha2]["alpha2Code"] = alpha2;
  }
});

Object.values(valuesAlpha2MappingFiles).forEach(({ file, keyVal }) => {
  for (const [key, alpha2] of Object.entries(file)) {
    const alpha2Array = Array.isArray(alpha2) ? alpha2 : [alpha2];
    alpha2Array.forEach(code => {
      if (!countries[code]) {
        countries[code] = initCountryData();
      }
      countries[code][keyVal] = key; // Append with the representable name
    });
  }
});


export { countries }
