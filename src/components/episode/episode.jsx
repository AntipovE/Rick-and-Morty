import React from "react";
import "./episode.scss";

const Episode = ({ episodes }) => {
  return (
    <div className="episodes">
      {episodes.map((epis) => (
        <div key={epis.id} className="episodes__item episode-item">
          <div className=" episode-header">
            <div className="episode-header__title">{epis.name}</div>
          </div>
          <div className=" episode-item__body">
            Дата выхода: {epis.air_date}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Episode;
