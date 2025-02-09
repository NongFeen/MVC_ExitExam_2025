const fs = require("fs");
const path = require("path");

const phoenixFilePath = path.join(__dirname, "phoenixData.json");
const dragonFilePath = path.join(__dirname, "dragonData.json");
const owlFilePath = path.join(__dirname, "owlData.json");

//for get all pets
const readJSON = (file) => {
    if (!fs.existsSync(file)) {
        console.error(`❌ Error: File ${file} not found.`);
        return [];
    }
    return JSON.parse(fs.readFileSync(file, "utf8"));
};

exports.getAllPets = () => {
    return {
        phoenix: readJSON(phoenixFilePath),
        dragon: readJSON(dragonFilePath),
        owl: readJSON(owlFilePath),
    };
};

//for pet type
const filePaths = {
    phoenix: phoenixFilePath,
    dragon: dragonFilePath,
    owl: owlFilePath,
};
exports.getPetsByType = (type) => {
    if (!filePaths[type]) {
        return null;
    }
    return readJSON(filePaths[type]);
};

//for find by id in type
exports.getPetById = (type, id) => {
    const pets = exports.getPetsByType(type);
    if (!pets) return null;

    return pets.find((pet) => pet.pet_id === id);
};
