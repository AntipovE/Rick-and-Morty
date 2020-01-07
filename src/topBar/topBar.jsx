import React, { useEffect } from "react";
import "./topBar.scss";
import { useHistory } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import logo from "../source/rick-and-morty-logo-png-5.jpg";

const TopBar = () => {
  const [value, setValue] = React.useState("/");
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    history.push(value);
  }, [value, history]);

  return (
    <div className="header">
      <img
        src={logo}
        className="header-image"
        alt=""
        onClick={() => setValue('/')}
      />
      <div className="header-topbar">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
          indicatorColor="primary"
        >
          <Tab label="Главная" value={"/"} />
          <Tab label="Персонажи" value={"/character/"} />
          <Tab label="Планеты" value={"/location/"} />
          <Tab label="Эпизоды" value={"/episode/"} />
        </Tabs>
      </div>
    </div>
  );
};
export default TopBar;
