import { CFields, valuesAlpha2MappingFiles } from "./dataMappings";


type searchItemsType = { [key in  CFields]: string[] | string }


type ValidFilter = {
    key: string;
    value: string | string[];
};


export function getFilteredAlpha2Codes(filters: searchItemsType): string[] {
    const alpha2CodesSet = new Set<string>();

    // Get valid filters using the getValidFilters function
    const validFilters = getValidFilters(filters);

    // Helper function to add alpha2 codes to the set
    const addAlpha2CodesToSet = (codes: string | string[] | undefined) => {
        if (!codes) return;
        Array.isArray(codes) ? codes.forEach(code => alpha2CodesSet.add(code)) : alpha2CodesSet.add(codes);
    };

    // Iterate over the valid filters
    validFilters.forEach(({ key: filterKey, value: filterValues }) => {
        const filterKeyAlpha2MappingFile = valuesAlpha2MappingFiles[filterKey]?.file;
        if (filterKeyAlpha2MappingFile == undefined) return;

        const values = Array.isArray(filterValues) ? filterValues : [filterValues];
        values.forEach(value => {
            if (filterKey === "alpha2code") {
                addAlpha2CodesToSet(value);
            } else {
                addAlpha2CodesToSet(filterKeyAlpha2MappingFile[value]);
            }
        });
    });
    return Array.from(alpha2CodesSet);
}

function getValidFilters(filters: searchItemsType): ValidFilter[] {
    return Object.entries(filters)
        .map(([filterKey, filterValue]) => {
            const normalizedKey = filterKey.toLowerCase();
            return { key: normalizedKey, value: filterValue };
        })
        .filter(({ key, value }) => {


            const isValidKey = key in valuesAlpha2MappingFiles;
            const isValidValue =
                value !== undefined &&
                (typeof value === 'string' || (Array.isArray(value) && value.every(v => typeof v === 'string')));

            return isValidKey && isValidValue;
        }) as ValidFilter[];
}
