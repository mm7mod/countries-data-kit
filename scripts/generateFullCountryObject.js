// Importing the JSON files
const alpha3Alpha2Mapping = require('../data/alpha3Alpha2Mapping.json');
const dialingCodeAlpha2Mapping = require('../data/dialingCodeAlpha2Mapping.json');
const alpha2CurrencySymbolMapping = require('../data/alpha2CurrencySymbolMapping.json');
const capitalsAlpha2Mapping = require('../data/capitalsAlpha2Mapping.json');
const flagEmojiAlpha2Mapping = require('../data/flagEmojiAlpha2Mapping.json');
const drivingSideApha2Mapping = require('../data/drivingSideApha2Mapping.json');
const continentAlpha2Mapping = require('../data/continentAlpha2Mapping.json');
const languageAlpha2Mapping = require('../data/languageAlpha2Mapping.json');
const alpha2EmergencyNumbersMapping = require('../data/alpha2EmergencyNumbersMapping.json');
// const countries = require('../data/countries.json');
const numericCodeAlpha2Mapping = require('../data/numericCodeAlpha2Mapping.json');
const alpha2FlagSVGMapping = require('../data/alpha2FlagSVGMapping.json');
const countryNameAlpha2Mapping = require('../data/countryNameAlpha2Mapping.json');
const phoneMaskalpha2Mapping = require('../data/phoneMaskalpha2Mapping.json');
const currencyAlpha2Mapping = require('../data/currencyAlpha2Mapping.json');
const currencyCodeAlpha2Mapping = require('../data/currencyCodeAlpha2Mapping.json');


console.log(alpha2CurrencySymbolMapping);
// // Initialize an object to store the results
// const alpha2Data = {};

// // Process files with Alpha2Mapping
// const alpha2MappingFiles = [
//     { file: alpha2CurrencySymbolMapping, name: 'currencySymbol' },
//     { file: alpha2EmergencyNumbersMapping, name: 'emergencyNumbers' },
//     { file: alpha2FlagSVGMapping, name: 'flagSVGUrl' }
// ];

// alpha2MappingFiles.forEach(({ file, name }) => {
//     for (const [alpha2, value] of Object.entries(file)) {
//         if (!alpha2Data[alpha2]) {
//             alpha2Data[alpha2] = {};
//         }
//         alpha2Data[alpha2][name] = value; 
//         alpha2Data[alpha2]["alpha2Code"] = alpha2;
//     }
// });

// // Append data to the alpha2 objects for other files
// const additionalFiles = [
//     { file: alpha3Alpha2Mapping, name: 'alpha3Code' },
//     { file: dialingCodeAlpha2Mapping, name: 'dialingCode' },
//     { file: capitalsAlpha2Mapping, name: 'capitalCity' },
//     { file: flagEmojiAlpha2Mapping, name: 'flagEmoji' },
//     { file: continentAlpha2Mapping, name: 'continentName' },
//     { file: languageAlpha2Mapping, name: 'primaryLanguage' },
//     { file: numericCodeAlpha2Mapping, name: 'numericCountryCode' },
//     { file: countryNameAlpha2Mapping, name: 'countryName' },
//     { file: currencyAlpha2Mapping, name: 'currency' },
//     { file: currencyCodeAlpha2Mapping, name: 'currencyCode' },
//     { file: drivingSideApha2Mapping, name: 'drivingSide' },
//     { file: phoneMaskalpha2Mapping, name: 'phoneNumberMask' },
// ];

// additionalFiles.forEach(({ file, name }) => {
//     for (const [key, alpha2] of Object.entries(file)) {
//         const alpha2Array = Array.isArray(alpha2) ? alpha2 : [alpha2];
//         alpha2Array.forEach(code => {
//             if (!alpha2Data[code]) {
//                 alpha2Data[code] = {};
//             }
//             alpha2Data[code][name] = key; // Append with the representable name
//         });
//     }
// });

// // Output the result
// // console.log(alpha2Data);



// // Assuming alpha2Data is already populated

// // Function to get the number of fields in each object and summarize counts
// const summarizeFieldCounts = (data) => {
//     const countsMap = new Map();

//     for (const obj of Object.values(data)) {
//         const fieldCount = Object.keys(obj).length;
//         countsMap.set(fieldCount, (countsMap.get(fieldCount) || 0) + 1);
//     }

//     // Output the count map
//     countsMap.forEach((count, fieldCount) => {
//         console.log(`Count: ${fieldCount} ---> Occurrences: ${count}`);
//     });

//     // Output the total number of items
//     console.log(`Total items: ${Object.keys(data).length}`);
// };

// // Example usage
// //summarizeFieldCounts(alpha2Data);





// // Assuming alpha2Data is already populated

// // Define the list of required fields
// const requiredFields = [
//     'currencySymbol', 'drivingSide', 'emergencyNumbers', 'flagSVG', 'phoneMask',
//     'alpha3Code', 'dialingCode', 'capital', 'flagEmoji', 'continent', 'language',
//     'numericCode', 'countryName', 'currency'
// ];

// // Function to identify items with fewer than 14 fields and show missing fields
// const findMissingFields = (data) => {
//     const missingFieldItems = [];

//     for (const [key, obj] of Object.entries(data)) {
//         const fieldCount = Object.keys(obj).length;
//         if (fieldCount < 14) {
//             // Identify missing fields
//             const existingFields = new Set(Object.keys(obj));
//             const missingFields = requiredFields.filter(field => !existingFields.has(field));

//             if (missingFields.length > 0) {
//                 missingFieldItems.push({ item: key, missingFields });
//             }
//         }
//     }

//     // Output the names of items with missing fields
//     if (missingFieldItems.length > 0) {
//         console.log('Items with fewer than 14 fields and missing values:');
//         missingFieldItems.forEach(({ item, missingFields }) => {
//           //  if(missingFields.includes("language"))
//           console.log(`${item} ---> Missing fields: ${missingFields.join(', ')}`);
//               //   console.log(`${item}`);
//         });
//     } else {
//         console.log('All items have 14 or more fields, or no missing fields.');
//     }
// };

// // Example usage
// //findMissingFields(alpha2Data);



// const fs = require('fs');
// const jsonData = JSON.stringify(alpha2Data); // Pretty-print with 2 spaces indentation
// fs.writeFileSync('../data/countries.json', jsonData, 'utf8');
