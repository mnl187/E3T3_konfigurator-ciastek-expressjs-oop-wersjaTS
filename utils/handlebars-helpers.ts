type Entries = [string, number][];

export const handlebarsHelpers = {
    findPrice: (entries: Entries, selectedItem: string): number => {
        const found = entries.find(el => el[0] === selectedItem);

        if (!found) {
            throw new Error(`Cannot find price of "${selectedItem}".`);
        }

        const [, price] = found;
        return price;
    },

    pricify: (price: number): string => price.toFixed(2),

    isNotInArray: <T>(array: T[], element: T) => !array.includes(element),

    isInArray: <T>(array: T[], element: T) => array.includes(element),
};