const { Router } = require("express");
const getPokemon = require("../controllers/getPokemon");
const getPokemonById = require("../controllers/getPokemonById");
const getPokemonByName = require("../controllers/getPokemonByName");

const router = Router();

router.get("/pokemons", getPokemon);
router.get("/pokemons/:id", getPokemonById);
router.get("/searchPokemons", getPokemonByName);

module.exports = router;
