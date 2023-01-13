import React from "react";
import Social from "./Social";
import profile from "./profile.jpg"
function About({ props }) {
  return (
    <div className="aboutParentContainer">
      <div className="nameBorder">
        <div className="bordernameline"></div>
        <div>
            {props.name}
        </div>
      </div>
      <div className="aboutContainer">
        <div className="leftSide">
          <h5>Hi! 👋</h5>
          <p>{props.roleDescription}</p>
          <div>
            <Social />
          </div>
        </div>
        <div className="rightSide">
            <div>
                <img className="profileImg" src={profile} alt="İmg" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
