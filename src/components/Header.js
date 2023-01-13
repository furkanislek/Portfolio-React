import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode, setLanguage } from "../store/siteSlicer";

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

  const site = useSelector((state) => state.site);

  const handleDarkMode = () => {
    dispatch(setDarkMode());
  };
  // console.log(site.language);
  const dilSecenegi = props[site.language];

  return (
    <Container>
      <Button onClick={handleDarkMode}>Sa</Button>
    </Container>
  );
}

export default Header;
