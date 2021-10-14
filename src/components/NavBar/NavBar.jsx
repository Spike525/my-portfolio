import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import theme from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={theme.navBar}>
      <div className={theme.navBar__inner}>
        <nav className={theme.menu}>
          <ul className={theme.menuList}>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Me</NavLink>
            </li>
          </ul>
        </nav>
        <div className={theme.socialIcons}>
          <SocialIcon
            url="https://www.linkedin.com/in/denys-kozhukhar-420905222/"
            target="_blank"
            fgColor="white"
          />
          <SocialIcon
            url="https://www.facebook.com/dennys.kozhukhar"
            target="_blank"
            fgColor="white"
          />
          <SocialIcon
            url="https://www.instagram.com/mr_spik3/"
            target="_blank"
            fgColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
