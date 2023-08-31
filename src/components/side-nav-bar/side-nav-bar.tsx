import React from 'react';

import styles from './styles.module.css';
import { NavBarItem } from './helpers/nav-bar-item';

export interface SideNavBarProps {

}

export const SideNavBar = (props: SideNavBarProps) => {
  return (
    <div className={styles.navBar}>
      <NavBarItem label="Home" />
      <NavBarItem label="Character Inspector" />
    </div>
  );
}