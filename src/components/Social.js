import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {MdEmail} from "react-icons/md"
import styled from "styled-components";

function Social() {
  const GitIcon = styled.div`
    display: flex;
    justify-content: left;
    
    `;
  const AElement = styled.a`
    margin: 1rem 1rem 1rem 0rem;
    text-align: center;
    border: 1px solid #3730a3;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 20px 10px 12px;
    gap: 10px;
    cursor: pointer;
    &:hover  {
      background-color: #3730a3;
      color: white;
    }
    text-decoration: none;
    color : #3730a3;
    border-radius : 10px
  `;

  return (
    <GitIcon>
      <AElement
        href="https://github.com/furkanislek"
        rel="noreferrer"
        target="_blank"
        className="icons"
      >
        <FaGithub />
        Github
      </AElement>

      <AElement
        href="https://www.linkedin.com/in/furkanislek/"
        rel="noreferrer"
        target="_blank"
        className="icons"
      >
        <FaLinkedin />
        Linkedin
      </AElement>

      <AElement
        href="mailto:furkanakifislek@gmail.com"
        rel="noreferrer"
        target="_blank"
        className="icons"
      >
        <MdEmail />
        E-Posta
      </AElement>
    </GitIcon>
  );
}

export default Social;
