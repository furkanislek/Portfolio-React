import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {MdEmail} from "react-icons/md"
import styled from "styled-components";
import { useSelector } from "react-redux";


function Social({props}) {
  const { dark } = useSelector((state) => state.site);

  return (
    <div className="socialGitIcon">
      <a
        href="https://github.com/furkanislek"
        rel="noreferrer"
        target="_blank"
        className={dark ? "socialADark" : "socialA"}
      >
        <FaGithub className={dark ? "faColorDark" : "faColor"} />
        Github
      </a>

      <a
        href="https://www.linkedin.com/in/furkanislek/"
        rel="noreferrer"
        target="_blank"
        className={dark ? "socialADark" : "socialA"}
      >
        <FaLinkedin />
        Linkedin
      </a>

      <a
        href="mailto:furkanakifislek@gmail.com"
        rel="noreferrer"
        target="_blank"
        className={dark ? "socialADark" : "socialA"}
      >
        <MdEmail />
        {props.email}
      </a>
    </div>
  );
}

export default Social;
