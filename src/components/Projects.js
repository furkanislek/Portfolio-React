import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { useSelector } from "react-redux";

function Projects({ props }) {
  const { dark } = useSelector((state) => state.site);
  return (
    <div id="projects"
      className={!dark ? "ProjectsAllContainer" : "ProjectsAllContainerDark"}
    >
      <h2
        className={
          !dark ? "projectsTitleh2" : "projectsTitleh2 projectsTitleh2Dark"
        }
      >
        {props.projectsTitle}
      </h2>
      <div className="projectsContainer">
        {props.portfolio.map((data, index) => (
          <div
            className={!dark ? "portfolioCards" : "portfolioCardsDark"}
            key={index}
          >
            <div style={{width : "80%"}}>
              <a href={data.projectUrl} target="_blank" rel="noreferrer">
                <img className="projectsImgs" src={data.imgurl} alt="img" />
              </a>
            </div>
            <div>
              <h3
                className={
                  !dark
                    ? "projectsdataname"
                    : "projectsdataname projectsdatanameDark "
                }
              >
                {data.name}
              </h3>
            </div>
            <div
              className={!dark ? "description" : "description descriptionDark"}
            >
              {data.description}
            </div>
            <div className="dataTags">
              {data.tags.map((dataTag, index) => (
                <div
                  className={
                    !dark ? "dataTagsChildrenDiv" : "dataTagsChildrenDivDark"
                  }
                  key={index}
                >
                  <span
                    className={
                      !dark
                        ? "dataTagsChildrenDivSpan"
                        : " dataTagsChildrenDivSpanDark"
                    }
                  >
                    {dataTag}
                  </span>
                </div>
              ))}
            </div>
            <div className="dataUrls">
              <a
                href={data.githubUrl}
                rel="noreferrer"
                target="_blank"
                className={!dark ? "dataUrlsATags" : "dataUrlsATagsDark"}
              >
                <FaGithub />
                Github
              </a>
              <a
                href={data.projectUrl}
                rel="noreferrer"
                target="_blank"
                className={!dark ? "dataUrlsATags" : "dataUrlsATagsDark"}
              >
                <FaGlobe />
                {data.site}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
