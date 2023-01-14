import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode, setLanguage } from "../store/siteSlicer";
import Flag from "react-flagkit";

const Container = styled.div`
  padding-top: 1rem;
  width: 80%;
  text-align: right;
`;

const Button = styled.button`
  padding: 1rem 2rem;
`;

function Header({ props }) {
  console.log("tema : ");
  const dispatch = useDispatch();
  const languages = ["tr", "en"];
  const handleLanguage = (lang) => {
    dispatch(setLanguage(lang));
  };
  const site = useSelector((state) => state.site);

  const handleDarkMode = () => {
    dispatch(setDarkMode());
  };

  console.log("dilSecenegi ", site.language);

  return (
    <Container>
      <Button onClick={handleDarkMode}>Sa</Button>
      <div>
        <button className="languageBtn" value={site.language}></button>
        {languages.map((lang, index) => (
          <button
            onClick={() => handleLanguage(lang)}
            className={lang === site.language ? "active" : ""}
            key={index}
          >
            {site.language === "tr" ? (
              <Flag country="TR" />
            ) : (
              <Flag country="GB" />
            )}
          </button>
        ))}
      </div>
    </Container>
  );
}

export default Header;
