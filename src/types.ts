import {
    countries, alpha3Alpha2Mapping, drivingSideApha2Mapping, capitalsAlpha2Mapping,
    dialingCodeAlpha2Mapping, flagEmojiAlpha2Mapping, countryNameAlpha2Mapping, languageAlpha2Mapping, phoneMaskalpha2Mapping, currencyAlpha2Mapping,
    numericCodeAlpha2Mapping, continentAlpha2Mapping, currencyCodeAlpha2Mapping
} from "./dataMappings";

export enum CountryInfoFields {
    Alpha2Code = "alpha2Code",
    Alpha3Code = "alpha3Code",
    CapitalCity = "capitalCity",
    ContinentName = "continentName",
    CountryName = "countryName",
    Currency = "currency",
    CurrencyCode = "currencyCode",
    CurrencySymbol = "currencySymbol",
    DialingCode = "dialingCode",
    DrivingSide = "drivingSide",
    EmergencyNumbers = "emergencyNumbers",
    FlagEmoji = "flagEmoji",
    FlagSVGUrl = "flagSVGUrl",
    NumericCountryCode = "numericCountryCode",
    PhoneNumberMask = "phoneNumberMask",
    PrimaryLanguage = "primaryLanguage"
}

export const CFields = CountryInfoFields;

// export enum SearchFields {
//     Alpha2Code = "alpha2code",
//     Alpha3Code = "alpha3code",
//     CapitalCity = "capitalcity",
//     ContinentName = "continentname",
//     CountryName = "countryname",
//     Currency = "currency",
//     CurrencyCode = "currencycode",
//     DialingCode = "dialingcode",
//     DrivingSide = "drivingside",
//     FlagEmoji = "flagemoji",
//     NumericCountryCode = "numericcountrycode",
//     PrimaryLanguage = "primarylanguage",
//     CountryCode = "countrycode",
//     PhoneNumberMask = "phonenumbermask"
// }
// export const SFields = CountryInfoFields;

type MappingFiles = {
    [key: string]: { [key: string]: string }
    | { [key: string]: string | string[] }
};

export const valuesAlpha2MappingFiles: MappingFiles = {
    "alpha3code": alpha3Alpha2Mapping,
    "capitalcity": capitalsAlpha2Mapping,
    "continentname": continentAlpha2Mapping,
    "countryname": countryNameAlpha2Mapping,
    "currency": currencyAlpha2Mapping,
    "currencycode": currencyCodeAlpha2Mapping,
    "dialingcode": dialingCodeAlpha2Mapping,
    "drivingside": drivingSideApha2Mapping,
    "flagemoji": flagEmojiAlpha2Mapping,
    "numericcountrycode": numericCodeAlpha2Mapping,
    "primarylanguage": languageAlpha2Mapping,
    "phonenumbermask": phoneMaskalpha2Mapping,
    "countrycode": phoneMaskalpha2Mapping //just a random value not needed , should be handled
}


export { countries };