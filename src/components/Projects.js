import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

function Projects({ props }) {
  return (
    <div className="ProjectsAllContainer">
      <h2>{props.projectsTitle}</h2>
      <div className="projectsContainer">
        {props.portfolio.map((data, index) => (
          <div className="portfolioCards" key={index}>
            <div>
              <a href={data.projectUrl} target="_blank" rel="noreferrer">
                <img src={data.imgurl} alt="img" />
              </a>
            </div>
            <div>
              <h3>{data.name}</h3>
            </div>
            <div className="description">{data.description}</div>
            <div className="dataTags">
              {data.tags.map((dataTag, index) => (
                <div key={index}>
                  <span>{dataTag}</span>
                </div>
              ))}
            </div>
            <div className="dataUrls">
              <a
                href={data.githubUrl}
                rel="noreferrer"
                target="_blank"
                className="icons"
              >
                <FaGithub />
                Github
              </a>
              <a
                href={data.projectUrl}
                rel="noreferrer"
                target="_blank"
                className="icons"
              >
                <FaGlobe />
                View Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
