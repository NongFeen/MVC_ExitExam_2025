const express = require("express");
const router = express.Router();
const petController = require("../controllers/petController");

//route of api then call in controller
router.get("/", petController.getAllPets); 
router.get("/:type", petController.getPetsByType); 
router.get("/:type/:id", petController.getPetById); 

module.exports = router;
