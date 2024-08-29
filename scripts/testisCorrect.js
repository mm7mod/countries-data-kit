const currencyCodeAlpha2Mapping = require('../data/alpha2FlagSVGMapping.json')

const allValues = Object.keys(currencyCodeAlpha2Mapping);

// Flatten the array to ensure all elements are individual items
const flattenedValues = allValues.flat();

// Create a Set to store unique values
const uniqueValuesSet = new Set(flattenedValues);

console.log(`uniqueValuesSet size: ${uniqueValuesSet.size}`);

// The provided list
let providedList= [
    "AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", 
    "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "CV", "KH", "CM", "CA", 
    "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CD", "CG", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CI", "DK", 
    "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", 
    "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", 
    "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", 
    "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", 
    "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", 
    "NG", "NU", "NF", "MK", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", 
    "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", 
    "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", 
    "TL", "TG", "TK", "TO", "TT", "TN", "TM", "TC", "TV", "TR", "UG", "UA", "AE", "GB", "UM", "US", "UY", "UZ", "VU", "VE", 
    "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW", "AX"
  ]

  console.log("the list of alpha2 codes size is ", providedList.length)

// Find the missing items in providedList that are not in uniqueValuesSet
const missingItems = providedList.filter(item => !uniqueValuesSet.has(item));
console.log(`Missing items in providedList: ${missingItems}`);

// Find the items in uniqueValuesSet that are not in providedList
const extraItems = [...uniqueValuesSet].filter(item => !providedList.includes(item));
console.log(`Extra items in uniqueValuesSet: ${extraItems}`);
