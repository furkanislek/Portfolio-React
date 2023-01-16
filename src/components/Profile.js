import React from "react";
import { useSelector } from "react-redux";

function Profile({ props }) {
  const { dark } = useSelector((state) => state.site);
  console.log("dark mode : ", dark);
  console.log(props.profileArticle.title);
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
            {props.kisiselBilgilerIcerik.map((data) => (
              <div className="boxinbox">
                {/* className="darkPofileTitles" */}
                <div>
                  <b className={dark && "PofileTitlesdark"}>{data.title}</b>
                </div>
                {/* className="profileDataDark" */}
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
