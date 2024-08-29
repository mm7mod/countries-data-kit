
# 🌍 Countries Data Kit "BETA"

`countries-data-kit` is a powerful, minimal-sized JavaScript package offering over 15 types of detailed country information with advanced filtering options. It adhers to ISO 3166 for countries, ISO 4217 for currencies, and ISO 639 for languages.

## ✨ Key Features

- 🔧 **Wide Compatibility**: Runs seamlessly in Node.js, React, React Native, and browser environments.
  
- 📚 **Comprehensive Data**: Fetch Currency Details, Get Dialing Codes, Display Flag Emojis, Provide Language Info, Access Emergency Numbers, Driving Side Info, Get Phone Number Masks
  
- 📏 **ISO Standards Compliance**: Adheres to ISO 3166 for countries, ISO 4217 for currencies, and ISO 639 for languages.

- 🔍 **Flexible Filtering**: Filter data by over 10 different criteria to get precisely the information you need.


## 📦 Installation

You can install the package via npm or yarn:

```bash
npm install countries-data-kit
```

or

```bash
yarn add countries-data-kit
```

## 🚀 Usage

The main function, `getCountries({ fields:[], filters:{}|[] })`, retrieves country details based on two parameters:

1. **fields**: Specify which country data you want, such as mobile number mask, capital, or dialing code. Use the `CFields` enum or pass a string array.

2. **filters**: Define criteria to filter countries, like continent, alpha-2/alpha-3 code, name, or dialing number.

This setup gives you control over the data you receive and how countries are selected.

### Importing the Package

#### For Node.js:

```javascript
const { getCountries, SFields, CFields } = require('countries-data-kit');

```

#### For ES6 Modules or React/React Native:

```javascript
import { getCountries, CFields, SFields } from 'countries-data-kit';
```



## 📚 Examples

### Example 1: Retrieve All Countries with Full Data

To get data for all 249 countries, simply call the `getCountries` function:

```javascript
const countries = getCountries();
or
const countries = getCountries({});
```


-----

### Example 2: Select Specific Fields to Retrieve

If you only need certain fields, such as phone number details, you can specify them using the `fields` parameter:

```javascript
const countriesPhoneNumberDetails = getCountries({
    fields: [
        CFields.dialingCode,
        CFields.phoneNumberMask
    ]
});
```
Alternatively, you can pass them as strings:

```javascript
const countriesPhoneNumberDetails = getCountries({
    fields: [
        "dialingCode",
        "phoneNumberMask"
    ]
});
```

-----

### Example 3: Filter Countries by Specific Criteria

To filter countries by certain criteria, such as continent or country code, use the `filters` parameter.

Get all Asian and European countries:

```javascript
const asianCountries = getCountries({
    filters: [
        SFields.continentNames.Asia
    ]
});
```
or 
```javascript
const asianCountries = getCountries({
    filters: {
        continentName:"Asia"
    }
});
```
or 
```javascript
const asianCountries = getCountries({
    filters: {
        continentName:["Asia"]
    }
});

```

You can also filter by specific country codes:

```javascript
let countries = getCountries({
    filters: {
        alpha2Code: ["US", "CA", "EG", "JP"]
    }
});
```

-----

### Example 4: Combine Filters and Fields for Specific Data

You can combine `fields` and `filters` to retrieve specific data. For example, to get the capital city of Germany:

```javascript
let countries = getCountries({
    fields: [CFields.capitalCity],
    filters: [SFields.countryNames.Germany]
});
```
or 
```javascript
let countries = getCountries({
    fields: [
        CFields.capitalCity
    ],
    filters: {
        countryName: "Germany"
    }
});
```

Retrieve in which continents specific countries exist based on their alpha3 codes:

```javascript
let countries = getCountries({
    fields: [
        CFields.continentName
    ],
    filters: {
        alpha3Code: ["DZA", "AUT"]
    }
});
```

-----

### Example 5: Mix Multiple Filters for Complex Queries

You can apply multiple filters to retrieve data that meets several criteria. For example, to get all countries with Cairo as the capital, a specific flag, and those that use the Euro:

```javascript
let countries = getCountries({
    fields: [CFields.continentName],
    filters: [
        SFields.capitalCities.Cairo,
        SFields.flagEmojis["🇺🇸"],
        SFields.currencyCodes.EUR
    ]
});
```
or 
```javascript
let countries = getCountries({
    fields:[CFields.continentName],
    filters:{
        capitalCity:"Cairo",
        flagEmoji:"🇺🇸",
        currencyCode:"EUR"
    }
})

```
the above call will return all countries that use Euro + Egypt + USA 


## 📋 Available Data Fields

The package provides the following data fields: **CFields**

| Field               | Description                                                         | Example                      | How to Access                  |
|---------------------|---------------------------------------------------------------------|------------------------------|--------------------------------|
| `alpha2Code`        | ISO 3166-1 alpha-2 code                                             | "US"                          | `CFields.alpha2Code`           |
| `alpha3Code`        | ISO 3166-1 alpha-3 code                                             | "USA"                         | `CFields.alpha3Code`           |
| `capitalCity`       | Capital city                                                        | "Washington, D.C."            | `CFields.capitalCity`          |
| `continentName`     | Continent name                                                      | "North America"               | `CFields.continentName`        |
| `countryName`       | Official country name                                               | "United States of America"    | `CFields.countryName`          |
| `currency`          | Official currency name                                              | "United States dollar"        | `CFields.currency`             |
| `currencyCode`      | ISO 4217 currency code                                              | "USD"                         | `CFields.currencyCode`         |
| `currencySymbol`    | Currency symbol                                                     | "$"                           | `CFields.currencySymbol`       |
| `dialingCode`       | International dialing code                                          | "+1"                          | `CFields.dialingCode`          |
| `drivingSide`       | Driving side ("left" or "right")                                    | "right"                       | `CFields.drivingSide`          |
| `emergencyNumbers`  | List of emergency numbers                                           | {"police": "911", "fire": "911", "ambulance": "911"}                       | `CFields.emergencyNumbers`     |
| `flagEmoji`         | Flag emoji                                                          | "🇺🇸"                         | `CFields.flagEmoji`            |
| `flagSVGUrl`        | URL to SVG image of the flag                                        | "https://example.com/flag.svg"| `CFields.flagSVGUrl`           |
| `numericCountryCode`| Numeric country code                                                | "840"                         | `CFields.numericCountryCode`   |
| `phoneNumberMask`   | Phone number format mask                                            | "+1 (###) ###-####"              | `CFields.phoneNumberMask`      |
| `primaryLanguage`   | Primary language                                                    | "English"                     | `CFields.primaryLanguage`      |





## 🔍  Filtering Methods

#### 1. **Filter Using an Array of `SFields` Values**:
This method allows you to filter countries by providing an array of values from the `SFields` mappings.

- **Example**:
  ```javascript
  const filteredCountries = getCountries({
    filters: [SFields.alpha2Codes.US, SFields.continentNames.Africa]
  });
  ```

- **SFields Table**:

  | Field                | How to Access                        |
  |----------------------|--------------------------------------|
  | `alpha2Codes`        | `SFields.alpha2Codes`                |
  | `alpha3Codes`        | `SFields.alpha3Codes`                |
  | `capitalCities`      | `SFields.capitalCities`              |
  | `continentNames`     | `SFields.continentNames`             |
  | `countryNames`       | `SFields.countryNames`               |
  | `currencies`         | `SFields.currencies`                 |
  | `currencyCodes`      | `SFields.currencyCodes`              |
  | `dialingCodes`       | `SFields.dialingCodes`               |
  | `drivingSides`       | `SFields.drivingSides`               |
  | `flagEmojis`         | `SFields.flagEmojis`                 |
  | `numericCountryCodes`| `SFields.numericCountryCodes`        |
  | `phoneNumberMasks`   | `SFields.phoneNumberMasks`           |
  | `primaryLanguages`   | `SFields.primaryLanguages`           |

#### 2. **Filter Using an Object for More Control**:
This method provides more control by allowing you to specify filters as key-value pairs, where the keys correspond to the filter object keys and the values are the criteria you want to filter by.

- **Example**:
  ```javascript
  const filteredCountries = getCountries({
    filters: {
      continentName: ["Europe", "Asia"],
      alpha2Code: "EG"
    }
  });
  ```

- **Filter Object Key Table**:

  | Filter Object Key     | Example                                           |
  |-----------------------|---------------------------------------------------|
  | `alpha2Code`          | `"EG"`                                            |
  | `alpha3Code`          | `"USA"`                                           |
  | `capitalCity`         | `"Cairo"`                                         |
  | `continentName`       | `["Europe", "Asia"]`                              |
  | `countryName`         | `"United States of America"`                      |
  | `currency`            | `"Egyptian pound"`                                |
  | `currencyCode`        | `"USD"`                                           |
  | `dialingCode`         | `["+20", "+1"]`                                   |
  | `drivingSide`         | `"right"`                                         |
  | `flagEmoji`           | `"🇪🇬"`                                           |
  | `numericCountryCode`  | `"840"`                                           |
  | `phoneNumberMask`     | `"(###) ###-####"`                                |
  | `primaryLanguage`     | `["English", "Arabic"]`                           |




## 🤝 Contributing

Contributions are welcome! Please check the contribution guidelines for more details.

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 📧 Contact

For questions or support, please open an issue on GitHub or contact us via email at mm7modmgdy@gmail.com.

---

Happy coding! 🎉
