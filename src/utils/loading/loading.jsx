import React from "react";
import load from '../../source/load.jpg'
import './loading.scss'
const Loading = () => {
  return <div className="loading">
      <img src={load} className="loading-img" alt=""></img>
  </div>;
};
export default Loading;