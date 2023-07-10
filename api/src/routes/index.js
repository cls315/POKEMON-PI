const { Router } = require("express");
const getPokemon = require("../controllers/getPokemon");
const getPokemonById = require("../controllers/getPokemonById");

const router = Router();

router.get("/pokemons", getPokemon);
router.get("/pokemons/:id", getPokemonById);

module.exports = router;
