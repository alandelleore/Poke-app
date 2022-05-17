import React from "react";
import { Link, NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { cerrarSesionAccion } from "../redux/usuarioDucks";

import { withRouter } from "react-router-dom";

const Navbar = (props) => {
  const dispatch = useDispatch();

  const cerrarSesion = () => {
    dispatch(cerrarSesionAccion());
    props.history.push("/login");
  };

  const activo = useSelector((store) => store.usuario.activo);

  return (
    <div className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand mx-2" to="/">
        POKE APP
      </Link>
      <div className="d-flex">
        {activo ? (
          <>
            <NavLink className="btn btn-dark mx-2" to="/" exact>
              Inicio
            </NavLink>
            <button
              className="btn btn-dark mx-2"
              onClick={() => cerrarSesion()}
            >
              Cerrar Sesión
            </button>
          </>
        ) : (
          <NavLink className="btn btn-dark mx-2" to="/login" exact>
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default withRouter(Navbar);
