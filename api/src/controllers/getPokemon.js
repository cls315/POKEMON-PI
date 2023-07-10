const axios = require("axios");

const getPokemon = async (req, res) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    const pokemon = response.data.results;
    if (pokemon.length > 0) {
      return res.status(200).json(pokemon);
    } else {
      return res.status(400).send("No se encontro un pokemon");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = getPokemon;
