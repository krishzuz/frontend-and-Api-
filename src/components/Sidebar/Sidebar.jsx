import React, { useState } from "react";
import { countries } from "country-data-list";
import "./side.css";
import validator from "validator";

export default function Sidebar({ h, h2 }) {
  //Declaration
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");
  //end

  // conttry List
  // const countriess = [
  //   { name: "USA" },
  //   { name: "India" },
  //   { name: "Argentina" },
  //   { name: "Armenia" },
  //   { name: "ooty" },
  // ];
  const newCountry = [];

  var fetch = countries.all;
  for (var i = 0; i < fetch.length; i++) {
    newCountry.push(fetch[i].name);
  }

  const clickCountrys = (e) => {
    setSearch("");
  };
  window.addEventListener("click", clickCountrys);
  //ends

  //submitt check
  const submitCheck = () => {
    let checkEmail = validator.isEmail(email);
    if (checkEmail === false) {
      document.getElementById("emailError").innerText =
        "Please Enter Valide Email";
    } else {
      document.getElementById("emailError").innerText = "";
    }
    let checkPhone = validator.isMobilePhone(phn);

    if (checkPhone === false) {
      document.getElementById("phnError").innerText =
        "Please Enter Valide Number";
    } else {
      document.getElementById("phnError").innerText = "";
    }
  };

  //ends

  //Handling Events
  const handleSideBar = () => {
    document.getElementById("side2").classList.add("secSide2");
    document.getElementById("modal").classList.add("modal1");
    document.getElementById("con2").style.display = "none";
    document.getElementById("innerdiv2").style.backgroundColor = "#EAA3A6";
  };

  const close = () => {
    document.getElementById("side2").classList.remove("secSide2");
    document.getElementById("modal").classList.remove("modal1");
    document.getElementById("con2").style.display = "block";
    document.getElementById("innerdiv2").style.backgroundColor = "#99efc9";
  };

  const fun1 = () => {
    document.getElementById("cl1").style.backgroundColor = "#99efc9";
    document.getElementById("cl2").style.backgroundColor = "#fff";

    h2();
  };

  const fun2 = () => {
    document.getElementById("cl1").style.backgroundColor = "white";
    document.getElementById("cl2").style.backgroundColor = "#99efc9";

    h();
  };
  //ends

  return (
    <div className="container" id="cont">
      <div className="sideBar">
        <div className="innerSide" id="inner">
          <div className="div1">
            <div className="Content1">
              <div className="pic"></div>
              <div className="des">
                <p id="des1">Hi Readers!</p>
                <p>Here is your news</p>
              </div>
            </div>
            <div className="Content2" id="con2">
              <h1>View Toggle</h1>
              <div className="warpperClass">
                <div className="class1" onClick={fun1} id="cl1"></div>
                <div className="class2" onClick={fun2} id="cl2"></div>
              </div>
            </div>
            <div className="Content3">
              <div className="innerDiv1">
                <h1>Have a feedback ?</h1>
              </div>
              <div className="innerDiv2" id="innerdiv2" onClick={handleSideBar}>
                <p>We're Listning!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secSide" id="side2">
        <button className="closeBtn" onClick={close}>
          X
        </button>
        <div className="form">
          <div className="formTitle">
            <h1>Thank you so much for taking the time!</h1>
            <p>Please provie the below details!</p>
          </div>
          <div className="fillables">
            <label htmlFor="">First Name:</label>
            <input type="text" placeholder="John" />
            <label htmlFor="">Last Name:</label>
            <input type="text" placeholder="Doe" />
            <label htmlFor="">Address:</label>
            <textarea name="Address" id="" cols="5" rows="5"></textarea>
            <label htmlFor="">Country:</label>
            <input
              type="text"
              id="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <div className="suggestion">
              {newCountry
                .filter((val) => {
                  if (search === "") {
                    return null;
                  } else if (val.toLowerCase().includes(search.toLowerCase())) {
                    return val;
                  }
                })
                .map((e) => (
                  <p id="countryListclick">{e}</p>
                ))}
            </div>
            <label htmlFor="">Email ID:</label>
            <input
              type="text"
              placeholder="example@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <span>
              <p id="emailError"></p>
            </span>
            <label htmlFor="">Phone Number:</label>

            <div className="Phncover">
              <div className="phnDiv">
                <input type="text" id="countryCode" placeholder="+91" />
              </div>

              <div className="phnDiv1">
                <input
                  type="number"
                  onChange={(e) => {
                    setPhn(e.target.value);
                  }}
                />
              </div>
            </div>
            <span>
              <p id="phnError"></p>
            </span>
            <button type="submit" onClick={submitCheck}>
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
      <div className="Modal" id="modal"></div>
    </div>
  );
}
