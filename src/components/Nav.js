import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode, setLanguage } from "../store/siteSlicer";
import Flag from "react-flagkit";
import { MdDarkMode } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Nav({ props }) {
  const { dark } = useSelector((state) => state.site);
  const dispatch = useDispatch();
  const handleLanguage = () => {
    dispatch(setLanguage());
  };
  const site = useSelector((state) => state.site);

  const handleDarkMode = () => {
    dispatch(setDarkMode());
  };
  const [openBurger, setOpenBurger] = useState(false);

  const handleOpenBurger = () => {
    setOpenBurger(!openBurger);
  };
  return (
    <>
      <nav
        id="nav1"
        className={dark ? "NavAllContainerDark" : "NavAllContainer"}
      >
        {" "}
        <div className="navLeft">
          <h2 style={{ color: "white" }}>
            <a style={{ color: "white", textDecoration: "none" }} href="#">
              {" "}
              Furkan Akif İŞLEK
            </a>
          </h2>
        </div>
        <div className="navRight">
          <div className="parentATags">
            <a className="profileATags" href="#profile">
              {props.navbar.profile}
            </a>
          </div>
          <div className="parentATags">
            <a className="profileATags" href="#skills">
              {props.navbar.skills}
            </a>
          </div>

          <div className="parentATags">
            <a className="profileATags" href="#about">
              {props.navbar.about}
            </a>
          </div>
          <div className="parentATags">
            <a className="profileATags" href="#projects">
              {props.navbar.projects}
            </a>
          </div>
          <div className="parentATags">
            <a className="profileATags" href="#contact">
              {props.navbar.contact}
            </a>
          </div>
          <div className="darkmode" onClick={handleDarkMode}>
            {!site.dark ? (
              <FaRegLightbulb
                id="lightBtn"
                style={{
                  marginRight: "20px",
                  paddingTop: "10px",
                  cursor: "pointer",
                }}
              />
            ) : (
              <MdDarkMode
                style={{
                  marginRight: "20px",
                  paddingTop: "10px",
                  cursor: "pointer",
                }}
              />
            )}
          </div>
          <div>
            <div
              onClick={handleLanguage}
              className="languageBtn"
              value={site.language}
            >
              {site.language ? (
                <Flag
                  style={{ paddingTop: "10px", cursor: "pointer" }}
                  country="GB"
                />
              ) : (
                <Flag
                  style={{ paddingTop: "10px", cursor: "pointer" }}
                  country="TR"
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      <nav
        id="nav2"
        className={
          dark ? "hamburgerMenuAllContainerDark" : "hamburgerMenuAllContainer"
        }
      >
        <div className="hamburgerFlexContainer">
          <div className="darkmode" onClick={handleDarkMode}>
            {!site.dark ? (
              <FaRegLightbulb
                className="hamburgerLight"
                style={{
                  marginRight: "20px",
                  paddingTop: "10px",
                  cursor: "pointer",
                }}
              />
            ) : (
              <MdDarkMode
                style={{
                  marginRight: "20px",
                  paddingTop: "10px",
                  cursor: "pointer",
                }}
              />
            )}
          </div>
          <GiHamburgerMenu
            style={{ fontSize: "2rem", color: "red" }}
            onClick={handleOpenBurger}
          />
          <div>
            <div
              onClick={handleLanguage}
              className="languageBtn"
              value={site.language}
            >
              {site.language ? (
                <Flag
                  style={{ paddingTop: "10px", cursor: "pointer" }}
                  country="GB"
                />
              ) : (
                <Flag
                  style={{ paddingTop: "10px", cursor: "pointer" }}
                  country="TR"
                />
              )}
            </div>
          </div>
        </div>

        {openBurger && (
          <div>
            <ul className="hamburgerUl">
              <li>
                <a href="#profile">{props.navbar.profile}</a>
              </li>
              <li>
                <a href="#skills">{props.navbar.skills}</a>
              </li>
              <li>
                <a href="#about">{props.navbar.about}</a>
              </li>
              <li>
                <a href="#projects">{props.navbar.projects}</a>
              </li>
              <li>
                <a href="#contact">{props.navbar.contact}</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;
