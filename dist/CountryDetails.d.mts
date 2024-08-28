declare enum CountryInfoFields {
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

interface GetCountriesParams {
    fields?: CountryInfoFields[] | string[] | CountryInfoFields | string;
    filters?: {
        [key in CountryInfoFields]?: (string[] | string);
    } | {
        [key in string]: (string[] | string);
    };
}
type CountryData = {
    [key in CountryInfoFields]: string | string[] | {
        [key: string]: string;
    };
};
/**
 * Retrieves country data based on the specified fields and filters.
 *
 * @param {GetCountriesParams} [options] - Options to filter and select specific fields of country data.
 * @returns {Partial<CountryData>[]} - An array of objects containing the filtered country data.
 */
declare function getCountries(options?: GetCountriesParams): Partial<CountryData>[];

export { getCountries as default };
