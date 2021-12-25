import React from "react";
import BarMenu from "./BarMenu/BarMenu";

const Header = (props) => {
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper_logo">News App</div>
        <div className="wrapper__search_pull">
          <i id="search_pull__reset-icon" className="fas fa-times"></i>
          <i id="search_pull__search-icon" className="fas fa-search"></i>
          <input
            id="search_pull"
            type="text"
            placeholder="Type something to start search"
          />
        </div>
        <BarMenu />
      </div>
    </div>
  );
};
export default Header;
