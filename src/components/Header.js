import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode, setLanguage } from "../store/siteSlicer";
import Flag from "react-flagkit";
import {MdDarkMode} from "react-icons/md";
import {FaRegLightbulb} from "react-icons/fa";



function Header({ props }) {
  const dispatch = useDispatch();
  const handleLanguage = () => {
    dispatch(setLanguage());
  };
  const site = useSelector((state) => state.site);

  const handleDarkMode = () => {
    dispatch(setDarkMode());
  };


  return (
    <div >
      <div className="darkmode" onClick={handleDarkMode}>
        {
          !site.dark ? (
            <FaRegLightbulb />
          ) :
          (
            <MdDarkMode />
          )
        }
      </div>
      <div>
        <div
          onClick={handleLanguage}
          className="languageBtn"
          value={site.language}
        >
          {site.language  ? (
            <Flag country="GB" />
          ) : (
            <Flag country="TR" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
