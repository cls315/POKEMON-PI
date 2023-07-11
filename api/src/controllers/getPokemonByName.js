const axios = require("axios");
const { Pokemon } = require("../db");

const getPokemonByName = async (req, res) => {
  try {
    const pokemonName = req.query.name.toLowerCase();

    const pokemon = await Pokemon.findOne({
      where: {
        name: pokemonName,
      },
    });
    if (pokemon) {
      return res
        .status(200)
        .json({
          name: pokemon.name,
          life: pokemon.life,
          stroke: pokemon.stroke,
          defending: pokemon.defending,
        });
    } else {
      return res.status(400).send("No se encontro el nombre asignado");
    }
    //const response = await axios.get(
    //  `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    //);
    //const pokemon = response.data.name;
    //if (pokemon === pokemonName) {
    //   return res.status(200).json(pokemon);
    //}
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getPokemonByName;
