import React from "react";
import { useSelector } from "react-redux";

function Skills({ props }) {
  const { dark } = useSelector((state) => state.site);
  console.log(props.skills);
  return (
    <div id="skills" className={dark ? "SkillsContainerDark" : "SkillsContainer"}>
      <div>
        <h2 className={dark ? "skillsh2Dark" : "skillsh2"}>
          {props.skillsTitle}
        </h2>
      </div>
      <div className="skillsflexContainer">
        {props.skills.map((skills, index) => (
          <div style={{textDecoration: 'none' }}>
            <div>
              <img className="skillsImg" key={index} alt="png" src={skills.skillurl} />
            </div>
            <div key={index} className="skillsname">
              {skills.skillname}
            </div>
          </div>
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
