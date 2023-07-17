import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <NavLink className={styles.logo} to="/" end aria-label="Dogs - Home">
          <Dogs />
        </NavLink>
        {data ? (
          <NavLink className={styles.login} to="/conta">
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </NavLink>
        ) : (
          <NavLink className={styles.login} to="/login">
            Login / Sign Up
          </NavLink>
        )}
        
      </nav>
    </header>
  );
};

export default Header;
