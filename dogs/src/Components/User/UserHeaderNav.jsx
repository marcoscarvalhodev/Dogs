import React from "react";
import styles from './UserHeaderNav.module.css'
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MyPics } from "../../Assets/feed.svg";
import { ReactComponent as Stats } from "../../Assets/estatisticas.svg";
import { ReactComponent as AddPics } from "../../Assets/adicionar.svg";
import { ReactComponent as LogOut } from "../../Assets/sair.svg";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  return (
    <nav className={styles.nav}>
      <NavLink to="/account" end>
        <MyPics />
        {mobile && 'My Pics'}
      </NavLink>
      <NavLink to="/account/stats">
        <Stats />
        {mobile && 'Statistics'}
      </NavLink>
      <NavLink to="/account/post">
        <AddPics />
        {mobile && 'Add Pics'}
      </NavLink>
      <button onClick={userLogout}>
        <LogOut />
        {mobile && 'LogOut'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
