import "./Navbar.css";
import {
  faBell,
  faBriefcase,
  faCalculator,
  faEnvelope,
  faHome,
  faPeopleCarry
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import ProfileCard from "./ProfileCard";
const Navbar = () => {
  const [active, setActive] = useState(0);
  const [card, setCard] = useState(false);
  let listItems = {
    data: [
      { name: "Home", active: true, icon: faHome },
      { name: "My Network", active: false, icon: faPeopleCarry },
      { name: "Jobs", active: false, icon: faBriefcase },
      { name: "Messaging", active: false, icon: faEnvelope },
      { name: "Notifications", active: false, icon: faBell },
      { name: "Me", active: false, image: "Picture1.png" }
    ],
    activeIndex: 0
  };
  const handleClick = (index) => {
    setActive(index);
  };
  const handleCard = () => {
    setCard(!card);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ fontSize: "2.5rem", color: "#0a66c2" }}
        />
      </div>
      <div className="search-bar">
        <input type="search" placeholder="Search" />
      </div>
      <div className="navbar-menu">
        <ul className="navbar-list">
          {listItems.data.map((items, index) => {
            return (
              <NavbarItem
                active={active}
                id={index}
                image={items.image}
                items={items}
                handleCard={handleCard}
                onClick={() => handleClick(index)}
              />
            );
          })}
        </ul>
        {card && <ProfileCard card={card} setCard={setCard} />}
      </div>
    </div>
  );
};
export default Navbar;
