
const getCountries = require('../dist/CountryDetails').default;
const { CFields, SFields } = require('../dist/CountryDetails');

it('should return all countries\' full data when no options are provided', () => {

    let countries = getCountries({
        fields: [CFields.countryName],
        filters:{
            continentName:"12321",
            alpha2Code:"US"
        }

    })
    console.log("countries ", countries)
    expect(countries.length).toBe(1);
});