
# 🌍 Countries Data Kit "BETA"

`countries-data-kit` is a versatile JavaScript package designed to provide detailed information about world countries. Whether you're working in a Node.js backend, React, React Native, or a web browser, this package delivers a comprehensive set of country details following the ISO 3166 standard for countries, as well as relevant ISO standards for languages and currencies.

## ✨ Features

- **🔧 Wide Compatibility**: Runs seamlessly in Node.js, React, React Native, and browser environments.
- **📚 Comprehensive Data**: Provides extensive details about world countries, including codes, capitals, currencies, languages, and more.
- **📏 ISO Standards Compliance**: Adheres to ISO 3166 for countries, ISO 4217 for currencies, and ISO 639 for languages.
- **🔍 Flexible Filtering**: Filter data by over 10 different criteria to get precisely the information you need.

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

### Importing the Package

#### For Node.js:

```javascript
const { getCountries, SFields, CFields } = require('countries-data-kit');

```

#### For ES6 Modules or React/React Native:

```javascript
import { getCountries, CFields, SFields } from 'countries-data-kit';
```

### 🛠 Example Usage

Here’s an example of how to use the package to get country details:

```javascript
const { getCountries, SFields, CFields } = require('countries-data-kit');

function getCountryDetails() {
    return getCountries({
        fields: [CFields.alpha2Code, CFields.alpha3Code, CFields.capitalCity],
        filters: [SFields.continentNames.Africa]
    })
}
```

### 📋 Available Data Fields

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





### Filtering Methods

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




### 🔍 Filtering Countries

You can filter countries based on various criteria, such as continent, currency, or language.

```javascript
    return getCountries({
        fields: [CFields.alpha2Code, CFields.alpha3Code, CFields.capitalCity],
        filters: [SFields.continentNames.Africa, SFields.capitalCities['Addis Ababa']]
    })
```

```javascript
function getCountryDetails() {
    return getCountries({
        fields: [CFields.alpha2Code, CFields.alpha3Code, CFields.capitalCity,CFields.dialingCode˝],
        filters: {
            continentName:["Africa", "Asia"],
            flagEmoji:["🇦🇫","🇧🇩","🇧🇧","🇧🇹"]
        }
    })
}
```

## 📚 Examples

### Example 1: Get all 249 countries with all their data

```javascript
const country = getCountryDetails();
console.log(country.countryName); // "India"
```

### Example 2: Filter Countries by Continent

```javascript
const europeanCountries = getCountries({
        filters: [SFields.continentNames.Europe]
    })
console.log(europeanCountries.length); // Outputs the number of European countries
```

### Example 3: Get Countries with a Specific Currency

```javascript
const euroCountries = getCountries({
        filters: [SFields.currencyCodes.EUR]
    })
console.log(euroCountries.map(c => c.countryName)); // List of countries using the Euro
```

## 🤝 Contributing

Contributions are welcome! Please check the contribution guidelines for more details.

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 📧 Contact

For questions or support, please open an issue on GitHub or contact us via email at support@example.com.

---

Happy coding! 🎉
