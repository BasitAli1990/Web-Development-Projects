const ballerina = {
  commonName: "Spanish lavender",
  scientificName: "Lavandula stoechas",
  cultivar: "Ballerina"
}
const prettyPolly = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Pretty Polly"
}

const willowVale = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Willow Vale"
}

const hidcote = {
    commonName: "English lavender",
    scientificName: "Lavandula angustifolia",
    cultivar: "Hidcote"
}

const imperialGem = {
    commonName: "English lavender",
    scientificName: "Lavandula angustifolia",
    cultivar: "Imperial Gem"
}

const royalCrown = {
    commonName: "French lavender",
    scientificName: "Lavandula dentata",
    cultivar: "Royal Crown"
}

const catalog = new Map(); 
// catalog.set("ballerina", ballerina);
catalog.set(ballerina, {small: 20, medium: 15, large: 12});
catalog.set(prettyPolly, {small: 31, medium: 14, large: 24});
catalog.set(willowVale, { small: 3, medium: 5, large: 0 });
catalog.set(hidcote, { small: 33, medium: 13, large: 18 });
catalog.set(imperialGem, { small: 19, medium: 35, large: 28 });
catalog.set(royalCrown, { small: 40, medium: 22, large: 9 });

// console.log(catalog);

const removePlant = plant => catalog.delete(plant);

const sellPlants = (plant, size, potsNo) => {
    if (!catalog.has(plant)) return "Item not found.";
    const name = `${plant.ScientificName} '${plant.cultivar}'`
    const pots = catalog.get(plant);
    if(pots[size] - potsNo < 0) {
        return `Not enough ${size} size pots for ${name}. Only ${pots[size]} left.`
    }
    pots[size] -= potsNo;
    return `Catalog successfully updated.`
}
// console.log(removePlant("ballerina"));
// console.log(sellPlants(ballerina, "small", 10));
// const getBallerina = catalog.get(ballerina);
// console.log(getBallerina);
// getBallerina.small = 18;
// console.log(catalog);
// // console.log(catalog.size);
// console.log(getBallerina);
const displayCatalog = () => {
    let catalogString = "";
    catalog.forEach((val, key) => {
        catalogString +=`${key.scientificName} '${key.cultivar}': ${val.small} S, ${val.medium} M, ${val.large} L\n`;
    })
    return catalogString;
}

// console.log(displayCatalog());

const displyPlantsSet = () => {
const catalogSet = new Set();
catalogSet.add(ballerina);
catalogSet.add(ballerina);
catalogSet.add(prettyPolly);

return catalogSet;
};

const plantsSet = displyPlantsSet();

plantsSet.clear();
console.log(plantsSet.has(ballerina));
console.log(plantsSet);