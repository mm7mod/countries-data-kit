import { countries, CFields, SFields } from "./dataMappings";
import { getFilteredAlpha2Codes } from "./getAlpha2CodeFromFilters";


interface GetCountriesParams {
    fields?: CFields[];
    filters?: { [key in CFields]: string[] | string } | [string];
}

type CountryData = {
    [key in CFields]: (string | string[] | { [key: string]: string });
};


export default function getCountries(options?: GetCountriesParams): Partial<CountryData>[] {
    if (!options)
        return getAllCountriesFullData();

    const { fields, filters } = options;

    if (!fields && !filters)
        return getAllCountriesFullData();


    if (!filters && fields)
        return getAllCountriesFilteredData(fields);


    if (filters && !fields) {
        let validFilters: string[] = [];
        if (Array.isArray(filters)) {
            validFilters = filters.flat();
        } else {
            validFilters = getFilteredAlpha2Codes(filters);
        }

        return getCertainCountriesFullData(validFilters);
    }

    if (filters && fields) {
        let validFilters: string[] = [];
        if (Array.isArray(filters)) {
            validFilters = filters.flat();
        } else {
            validFilters = getFilteredAlpha2Codes(filters);
        }
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
    fields: CFields[] | string[] | CFields | string
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
    fields: CFields[] | string[] | CFields | string
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
    fields: CFields[] | string[] | CFields | string
): Partial<CountryData> | undefined {

    let countryData = getCountryFullData(Alpha2Code);

    if (countryData === undefined) return undefined;

    let details: Partial<CountryData> = {};

    const fieldsArray = Array.isArray(fields) ? fields : [fields];

    fieldsArray.forEach(field => {
        if (countryData[field as CFields] !== undefined) {
            details[field as CFields] = countryData[field as CFields];
        }
    });
    if (Object.keys(details).length === 0) {
        return undefined;
    }
    return details;
}


type CountryAlpha2Code = string;
function isCountryAlpha2Code(code: string): code is CountryAlpha2Code {
    return code in countries;
}


function getCountryFullData(Alpha2Code: string): CountryData | undefined {
    if (isCountryAlpha2Code(Alpha2Code)) {
        return countries[Alpha2Code] as CountryData;
    }
    return undefined;
}


export {
    CFields,
    SFields
}