
const { getCountries } = require('../dist/CountryDetails');
const { CFields, SFields } = require('../dist/CountryDetails');

it('should return all countries\' full data when no options are provided', () => {

    let countries = getCountries({
        fields:[CFields.continentName],
        filters:{
            capitalCity:"Cairo",
            flagEmoji:"🇺🇸",
            currencyCode:"EUR"
        }
    })
    console.log("countries ", countries)
    expect(countries.length).toBe(1);
});