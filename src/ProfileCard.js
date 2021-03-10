import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./ProfileCard.css";
const ProfileCard = ({ card, setCard }) => {
  const node = useRef();

  const handleClickOutside = (e) => {
    console.log(node.current, node.current.contains(e.target));
    if (node.current && node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setCard(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [card]);
  return (
    <div className="card-container" ref={node}>
      <div className="card-header">
        <div className="card-logo">
          <img src="Picture1.png" width="50px" height="50px" />
        </div>
        <div className="card-title">
          <h3>Nasser Itani</h3>
          <p>Consultant at PwC MiddleEast</p>
        </div>
        <div className="card-button">
          <button>View Profile</button>
        </div>
      </div>
      <div className="card-info">
        <div className="card-info-title">
          <h3>Account</h3>
        </div>
        <div className="card-info-subtitle">
          <NavLink to="/">Settings</NavLink>
          <NavLink to="/">Help</NavLink>
          <NavLink to="/">Language</NavLink>
        </div>
      </div>
      <div>
        <div className="card-info">
          <div className="card-info-title">
            <h3>Manage</h3>
          </div>
          <div className="card-info-subtitle">
            <NavLink to="/">Posts & Activity</NavLink>
            <NavLink to="/">Job Posting Account</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
