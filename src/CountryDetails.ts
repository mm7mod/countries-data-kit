import { getFilteredAlpha2Codes } from "./getAlpha2CodeFromFilters";
import { countries, CountryInfoFields } from "./types";

interface GetCountriesParams {
    fields?: CountryInfoFields[] | string[] | CountryInfoFields | string;
    filters?: { [key in CountryInfoFields]?: (string[] | string) } | { [key in string]: (string[] | string) };
}

type CountryData = {
    [key in CountryInfoFields]: string | string[] | { [key: string]: string };
};


/**
 * Retrieves country data based on the specified fields and filters.
 * 
 * @param {GetCountriesParams} [options] - Options to filter and select specific fields of country data.
 * @returns {Partial<CountryData>[]} - An array of objects containing the filtered country data.
 */
export default function getCountries(options?: GetCountriesParams): Partial<CountryData>[] {
    if (!options)
        return getAllCountriesFullData();

    const { fields, filters } = options;

    if (!fields && !filters)
        return getAllCountriesFullData();


    if (!filters && fields)
        return getAllCountriesFilteredData(fields);


    if (filters && !fields) {
        let validFilters = getFilteredAlpha2Codes(filters);
        return getCertainCountriesFullData(validFilters);
    }

    if (filters && fields) {
        let validFilters = getFilteredAlpha2Codes(filters);
        return getCertailCountriesFilteredData(validFilters, fields);
    }
    return []
}

function getCertainCountriesFullData(Alpha2Codes: string[]): CountryData[] {
    let details: CountryData[] = [];
    Alpha2Codes.forEach(code => {
        let countryFullData = getCountryFullData(code);
        if (countryFullData != undefined) {
            details.push(countryFullData);
        }
    });
    return details;
}

function getAllCountriesFullData(): CountryData[] {
    return Object.values(countries) as CountryData[];
}

function getAllCountriesFilteredData(
    fields: CountryInfoFields[] | string[] | CountryInfoFields | string
): Partial<CountryData>[] {

    let details: Partial<CountryData>[] = [];

    Object.keys(countries).forEach((alpha2Code) => {
        let countryFilteredData = getCountryFilteredData(alpha2Code, fields);
        if (countryFilteredData != undefined) {
            details.push(countryFilteredData);
        }
    });
    return details;
}

function getCertailCountriesFilteredData(
    Alpha2Codes: string[],
    fields: CountryInfoFields[] | string[] | CountryInfoFields | string
): Partial<CountryData>[] {

    let details: Partial<CountryData>[] = [];

    Alpha2Codes.forEach(code => {
        let countryFullData = getCountryFilteredData(code, fields);
        if (countryFullData != undefined) {
            details.push(countryFullData);
        }
    });
    return details;
}

function getCountryFilteredData(
    Alpha2Code: string,
    fields: CountryInfoFields[] | string[] | CountryInfoFields | string
): Partial<CountryData> | undefined {

    let countryData = getCountryFullData(Alpha2Code);

    if (countryData === undefined) return undefined;

    let details: Partial<CountryData> = {};

    const fieldsArray = Array.isArray(fields) ? fields : [fields];

    fieldsArray.forEach(field => {
        if (countryData[field as CountryInfoFields] !== undefined) {
            details[field as CountryInfoFields] = countryData[field as CountryInfoFields];
        }
    });
    if (Object.keys(details).length === 0) {
        return undefined;
    }
    return details;
}


type CountryAlpha2Code = keyof typeof countries;
function isCountryAlpha2Code(code: string): code is CountryAlpha2Code {
    return code in countries;
}


function getCountryFullData(Alpha2Code: string): CountryData | undefined {
    if (isCountryAlpha2Code(Alpha2Code)) {
        return countries[Alpha2Code] as CountryData;
    }
    return undefined;
}


