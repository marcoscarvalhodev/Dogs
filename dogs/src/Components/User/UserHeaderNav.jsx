import React from "react";
import styles from "./UserHeaderNav.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MyPics } from "../../Assets/feed.svg";
import { ReactComponent as Stats } from "../../Assets/estatisticas.svg";
import { ReactComponent as AddPics } from "../../Assets/adicionar.svg";
import { ReactComponent as LogOut } from "../../Assets/sair.svg";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const mobile = useMedia("(max-width: 700px)");
  const { userLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const {pathname} = useLocation();
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])



  //const {matches} = window.matchMedia('(max-width: 700px)');//verificar se a tela chegou em um determinado valor, retornando um boolean, mas podemos criar um hook para esse tipo de funcionalidade para podermos reaproveitar.

  return (
    <>
      {mobile && <button className={`${styles.mobileButton} ${mobileMenu  && styles.mobileButtonActive}`}
        aria-label="Menu"
        onClick={() => setMobileMenu(!mobileMenu)}
      ></button>}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to="/account" end>
          <MyPics />
          {mobile && "My Pics"}
        </NavLink>
        <NavLink to="/account/stats">
          <Stats />
          {mobile && "Statistics"}
        </NavLink>
        <NavLink to="/account/post">
          <AddPics />
          {mobile && "Add Pics"}
        </NavLink>
        <button onClick={userLogout}>
          <LogOut />
          {mobile && "LogOut"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
