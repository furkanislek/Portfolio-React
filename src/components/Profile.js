import React from "react";

function Profile({ props }) {


  console.log(props.profileArticle.title);
  return (
    <div className="profileAllContainer">
      <h2 className="Profileh2">Profile Page</h2>
      <div className="profileContainer">
        <div className="profileBox">
          <h5 style={{ color: "#EA2678", marginBottom: "10px" }}>
            {props.kisiselBilgiler}
          </h5>
          {props.kisiselBilgilerIcerik.map((data) => (
            <div className="boxinbox">
              <div>
                <b>{data.title}</b>
              </div>
              <div>{data.data}</div>
            </div>
          ))}
        </div>
        <div className="profileIcerik">
          <div style={{ padding: "0.7rem 2rem" }}>
            <h5>{props.profileArticle.title}</h5>
            <p>{props.profileArticle.data}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
