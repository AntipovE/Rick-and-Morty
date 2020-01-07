import React from "react";
import { Link } from "react-router-dom";
import "./charter.scss";

const Charters = ({ charters }) => {
  return (
    <div className="charters">
      {charters.map((charter) => (
          <div key={charter.id} className="charter__item charter-item">
            <div className=" item-header">
              <div className="item-header__title">{charter.name}</div>
              <Link to={`/character/${charter.id}`}>
                <img
                  className="item-header__image"
                  src={charter.image}
                  alt=""
                />
              </Link>
            </div>
            <div className="item-body">
              <div>Gender: {charter.gender}</div>
              <div>Species: {charter.species}</div>
              <div>Life Status: {charter.status}</div>
              <div>
                Planet:{" "}
                {charter.location.name === "unknown"
                  ? "No information"
                  : charter.location.name}
              </div>
            </div>
          </div>
      ))}
    </div>
  );
};
export default Charters;
