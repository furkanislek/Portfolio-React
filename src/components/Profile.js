import React from "react";
import { useSelector } from "react-redux";

function Profile({ props }) {
  const { dark } = useSelector((state) => state.site);

  return (
    <div
      id="about"
      className={dark ? "profileAllContainerDark" : "profileAllContainer"}
    >
      <div>
        <h2 className={dark ? "Profileh2Dark" : "Profileh2"}>
          {props.aboutTitle}
        </h2>
        <div className="profileContainer">
          <div className={dark ? "profileBoxDark" : "profileBox"}>
            <h5
              className={
                dark
                  ? "profilePersonalInformationDark"
                  : "profilePersonalInformation"
              }
            >
              {props.kisiselBilgiler}
            </h5>
            {props.kisiselBilgilerIcerik.map((data, index) => (
              <div key={index} className="boxinbox">
                <div>
                  <b className={dark && "PofileTitlesdark"}>{data.title}</b>
                </div>
                <div className={dark && "profileDataDark"}>{data.data}</div>
              </div>
            ))}
          </div>
          <div className="profileIcerik">
            <div>
              <h5
                className={
                  dark ? "profileIcerikTitleDark" : "profileIcerikTitle"
                }
              >
                {props.profileArticle.title}
              </h5>
              <p className={dark && "profileIcerikDataDark"}>
                {" "}
                {props.profileArticle.data}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
