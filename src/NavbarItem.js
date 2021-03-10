import { faHandHolding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const NavbarItem = (props) => {
  return props.items.image ? (
    <li className="navbar-item" onClick={props.onClick}>
      <NavLink
        to="/"
        className={
          props.active === props.id
            ? "navbar-item-link-active"
            : "navbar-item-link"
        }
      >
        <img
          src="./Picture1.png"
          alt="Logo"
          width="24px"
          height="24px"
          onClick={() => props.handleCard()}
        />
        {props.items.name}
      </NavLink>
    </li>
  ) : (
    <li className="navbar-item" onClick={props.onClick}>
      <NavLink
        to="/"
        className={
          props.active === props.id
            ? "navbar-item-link-active"
            : "navbar-item-link"
        }
      >
        <FontAwesomeIcon
          icon={props.items.icon}
          style={{ fontSize: "1.2rem" }}
        />

        {props.items.name}
      </NavLink>
    </li>
  );
};

export default NavbarItem;
