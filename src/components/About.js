import React from "react";
import Social from "./Social";
import { useSelector } from "react-redux";
function About({ props }) {
  const { dark } = useSelector((state) => state.site);
  console.log(props.imagebaseurl);
  return (
    <div className={dark ? "aboutAllContainerDark" : "aboutAllContainer"}>
      <div className="aboutContainer">
        <div className="leftSide">
          <div className="nameBorder">
            <div className="bordernameline"></div>
            <h2 className={dark ? "aboutNameDark" : "aboutName"}>{props.name}</h2>
          </div>
          <h5 className={dark && "aboutWelcomeDark"}>{props.welcome} 👋</h5>
          <p className={dark && "aboutWelcomeDark"}>{props.roleDescription}</p>
          <div>
            <Social />
          </div>
        </div>
        <div className="rightSide">
          <div>
            <img className="profileImg" src={props.imagebaseurl} alt="İmg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
