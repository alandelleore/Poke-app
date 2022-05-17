import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  anteriorPokemonAction,
  obtenerPokemonesAction,
  siguientePokemonAction,
  detallePokemonAction,
} from "../redux/pokeDucks";
import Detalle from "./Detalle";

const Pokemones = () => {
  const dispatch = useDispatch();

  const pokemones = useSelector((store) => store.pokemones.results);
  const next = useSelector((store) => store.pokemones.next);
  const previous = useSelector((store) => store.pokemones.previous);

  useEffect(() => {
    const fetchData = () => {
      dispatch(obtenerPokemonesAction());
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="row m-0 mt-5 ">
      <div className="col-md-6 shadow p-2 ">
        <h3>Lista de Pokemones</h3>
        <ul className="list-group mt-3">
          {pokemones.map((item) => (
            <li key={item.name} className="list-group-item text-uppercase">
              {item.name}
              <button
                className="btn btn-warning btn-sm float-end"
                onClick={() => dispatch(detallePokemonAction(item.url))}
              >
                info
              </button>
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-between mt-2 mb-2 ">
          {pokemones.length === 0 && (
            <button
              onClick={() => dispatch(obtenerPokemonesAction())}
              className="btn btn-dark"
            >
              Get Pokemones
            </button>
          )}
          {previous && (
            <button
              onClick={() => dispatch(anteriorPokemonAction())}
              className="btn btn-dark"
            >
              Anterior
            </button>
          )}
          {next && (
            <button
              onClick={() => dispatch(siguientePokemonAction())}
              className="btn btn-dark"
            >
              Siguiente
            </button>
          )}
        </div>
      </div>
      <div className="col-md-6 ">
        <Detalle />
      </div>
    </div>
  );
};

export default Pokemones;
