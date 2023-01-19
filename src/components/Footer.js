import React from "react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useSelector } from "react-redux";

function Footer({ props }) {
  const { dark } = useSelector((state) => state.site);
  const footerProps = props.footer;
  return (
    <div id="contact" className={dark && "FooterParentDark"}>
      <div className={!dark ? "FooterAllContainer" : "FooterAllContainerDark"}>
        <div className="FooterContainer">
          <div>
            <h2 className={!dark ? "footerh2" : "footerh2Dark"}>
              {footerProps.title}
            </h2>
          </div>
          <div>
            <p
              className={!dark ? "footerdescription" : "footerdescriptionDark"}
            >
              {footerProps.description}
            </p>
          </div>
          <div className="footermail">
            <a
              href="mailto:furkanakifislek@gmail.com"
              rel="noreferrer"
              target="_blank"
              className={!dark ? "footerEmailATags" : "footerEmailATagsDark"}
            >
              {props.mail}
            </a>
          </div>
          <div className="iconsdiv">
            <a href={footerProps.githubUrl} rel="noreferrer" target="_blank">
              <FaGithub className="github" />
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
    </div>
  );
}

export default Footer;
