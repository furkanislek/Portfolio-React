import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer({ props }) {
  const footerProps = props.footer;
  return (
    <div className="FooterAllContainer">
      <div className="FooterContainer">
        <div>
          <h2>{footerProps.title}</h2>
        </div>
        <div>
          <p className="footerdescription">{footerProps.description}</p>
        </div>
        <div className="footermail">
          <a
            href="mailto:furkanakifislek@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            furkanakifislek@gmail.com
          </a>
        </div>
        <div className="iconsdiv">
          <a href={footerProps.githubUrl} rel="noreferrer" target="_blank">
            <FaGithub className="github"/>
          </a>
          <a href={footerProps.linkedinUrl} rel="noreferrer" target="_blank">
            <FaLinkedin />
          </a>
          <a href={footerProps.youtube} rel="noreferrer" target="_blank">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
