import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { detallePokemonAction } from "../redux/pokeDucks";

const Detalle = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch(detallePokemonAction());
    };
    fetchData();
  }, [dispatch]);

  const pokemon = useSelector((store) => store.pokemones.unPokemon);

  return pokemon ? (
    <div className="card text-center mb-4 shadow p-2">
      <h3>Detalle Pokemon</h3>
      <div className="card-body">
        <img src={pokemon.img} alt={pokemon.nombre} className="img-fluid" />
        <div className="card-title text-uppercase">{pokemon.nombre}</div>
        <p className="card-text">
          Ancho: {pokemon.ancho} | Alto: {pokemon.alto}
        </p>
      </div>
    </div>
  ) : null;
};

export default Detalle;
