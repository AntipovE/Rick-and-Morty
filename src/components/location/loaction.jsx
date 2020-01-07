import React from "react";
import { Link } from "react-router-dom";
import Earth from "@material-ui/icons/Language";
import "./location.scss";

const Location = ({ locations }) => {
  return (
    <div className="locations">
      {locations.map((loc) => (
        <div key={loc.id} className="locations__item location-item">
          <div className=" item-header">
            <div className="item-header__title">{loc.name}</div>
          </div>
          <div className="item__body">
            <Link to={`/location/${loc.id}`}>
              <Earth />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Location;
