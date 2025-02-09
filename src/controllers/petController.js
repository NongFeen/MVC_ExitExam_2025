const petModel = require("../models/petModel");

exports.getAllPets = (req, res) => {
    const pets = petModel.getAllPets();
    console.log(">>")
    res.json(pets);
};

//get all data by type
exports.getPetsByType = (req, res) => {
    const type = req.params.type.toLowerCase();
    const pets = petModel.getPetsByType(type);

    if (pets) {
        res.json(pets);
    } else {
        res.status(404).json({ message: "Invalid pet type" });
    }
};

//2 input 
// type=x, petID=12345678
exports.getPetById = (req, res) => {
    const type = req.params.type.toLowerCase();
    const petId = req.params.id;

    const pet = petModel.getPetById(type, petId);

    if (pet) {
        res.json(pet);
    } else {
        res.status(404).json({ message: "Pet not found" });
    }
};
