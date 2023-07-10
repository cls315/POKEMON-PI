const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getPokemonById = async (req, res) => {
  try {
    const pokemonId = req.params.id;
    const pokemonDb = await Pokemon.findByPk(pokemonId, {
      include: Type,
    });
    if (pokemonDb) {
      const pokemonData = {
        id: pokemonDb.id,
        name: pokemonDb.name,
        types: pokemonDb.Types.map((type) => type.name),
      };
      return res.status(201).json(pokemonData);
    }

    if (pokemonDb !== pokemonId) {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      const pokemonApi = {
        id: response.data.id,
        name: response.data.name,
        types: response.data.types.map((type) => type.type.name),
      };
      return res.status(200).json(pokemonApi);
    }
    return res.status(400).send("No se encontro un Pokemon");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getPokemonById;
