import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import {ReactComponent as Dogs} from '../Assets/dogs.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <NavLink className={styles.logo} to="/" end aria-label='Dogs - Home'><Dogs /></NavLink>
        <NavLink className={styles.login} to="/login">Login / Sign Up</NavLink>
      </nav>
    </header>
  )
}

export default Header