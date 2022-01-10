import React from "react";
import { useState } from "react";

const BarMenu: React.FC = (props) => {
  const [MenuCodition, setMenuCondition] = useState(false);

  return (
    <div className="wrapper__bar">
      {!MenuCodition ? (
        <div className="wrapper__bar_disactive" id="wrapper__bar_disactive">
          <i
            onClick={() => setMenuCondition(true)}
            id="open_wrapperMenu"
            className="fas fa-bars"
          ></i>
        </div>
      ) : (
        <div className="wrapper__bar_active" id="wrapper__bar_active">
          <ul className="wrapper_menu" id="wrapper_menu">
            <li className="wrapper_menu_el">
              <a href="#">Categories</a>

              <ul className="wrapper_menu__submenu" id="wrapper_menu__submenu">
                <svg
                  width="228"
                  height="121"
                  viewBox="0 0 228 121"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_428_73)">
                    <path
                      d="M4 13.9561C4 11.1947 6.23858 8.95614 9 8.95614H105.482C106.764 8.95614 107.996 8.46397 108.926 7.58127L112.696 4L116.004 7.42813C116.946 8.4046 118.245 8.95614 119.602 8.95614H219C221.761 8.95614 224 11.1947 224 13.9561V112C224 114.761 221.761 117 219 117H9C6.23857 117 4 114.761 4 112V13.9561Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_428_73"
                      x="0"
                      y="0"
                      width="228"
                      height="121"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.741176 0 0 0 0 0.741176 0 0 0 0 0.741176 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_428_73"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_428_73"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <div className="wrapper_menu__submenu_elContainer">
                  <li className="wrapper__submenu_el">
                    <a href="#">Sport</a>
                  </li>
                  <li className="wrapper__submenu_el">
                    <a href="#">World</a>
                  </li>
                  <li className="wrapper__submenu_el">
                    <a href="#">Covid</a>
                  </li>
                  <li className="wrapper__submenu_el">
                    <a href="#">Business</a>
                  </li>
                  <li className="wrapper__submenu_el">
                    <a href="#">Politics</a>
                  </li>
                  <li className="wrapper__submenu_el">
                    <a href="#">Science</a>
                  </li>
                  <li className="wrapper__submenu_el">
                    <a href="#">Religion</a>
                  </li>
                  <li className="wrapper__submenu_el">
                    <a href="#">Health</a>
                  </li>
                </div>
              </ul>
            </li>
            <li className="wrapper_menu_el">
              <a href="#">⚡️ Trending news</a>
            </li>
          </ul>
          <div className="wrapper__disactiveMenuButton">
            <i
              onClick={() => setMenuCondition(false)}
              id="close_wrapperMenu"
              className="fas fa-times"
            ></i>
          </div>
        </div>
      )}
    </div>
  );
};
export default BarMenu;
