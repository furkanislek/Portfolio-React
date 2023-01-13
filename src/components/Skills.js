import React from "react";

import { Route, Switch, Link } from "react-router-dom";

function Skills({ props }) {
  console.log(props.skills);
  return (
    <div className="SkillsContainer">
      <div>
        <h2>
          {props.skillsTitle}
        </h2>
      </div>
      <div className="flexContainer">
        {props.skills.map((skills, index) => (
          <Link to={skills.skillname} style={{textDecoration: 'none' }}>
            <div>
              <img key={index} alt="png" src={skills.skillurl} />
            </div>
            <div key={index} className="skillsname">
              {skills.skillname}
            </div>
          </Link>
        ))}
      </div>

      {/* <Switch>
        <Route path="/" exact />
        {props.skills.map((skills, index) => (
          <Route
            key={index}
            path={skills.skillname}
            component={skills.skillname}
          ></Route>
        ))}
      </Switch> */}
    </div>
  );
}

export default Skills;
