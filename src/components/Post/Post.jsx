/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./post.css";
import Sidebar from "../Sidebar/Sidebar";
import Loading from "../Loading";

export default function Post({ posts, loading }) {
  //Delete function
  const del = (e) => {
    console.log(e);
  };
  //ends

  //Modal
  var modal = document.getElementById("modalDiv");

  window.onclick = (e) => {
    if (e.target === modal) {
      document.getElementById("modalDiv").style.display = "none";
    }
  };
  const openModal = (id, title, summary, published) => {
    console.log(id);
    document.getElementById("modalDiv").style.display = "block";
    document.getElementById("modalTile").innerText = title;
    document.getElementById("modalSummary").innerText = summary;
    document.getElementById("modalPublished").innerText = published;
  };

  function clsBtn() {
    document.getElementById("modalDiv").style.display = "none";
  }

  //ends

  //<---------------------------------------------------------->//
  const h = () => {
    var t = document.querySelectorAll(".fetchposts");
    t.forEach((e) => {
      e.classList.add("fetch2");
    });
    var y = document.getElementById("in").classList.add("innerPosts2");
    var close = document.querySelectorAll(".imgDiv");

    close.forEach((el) => {
      el.classList.add("imgDiv2");
    });
  };

  const h2 = () => {
    var t = document.querySelectorAll(".fetchposts");
    t.forEach((e) => {
      e.classList.remove("fetch2");
    });
    var x = document.getElementById("in").classList.remove("innerPosts2");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="PostsContainer">
      <Sidebar h={h} h2={h2} />
      <div className="Modal" id="modalDiv">
        <div className="innerModal">
          <button className="closeModal" onClick={clsBtn}>
            x
          </button>

          <h1 id="modalTile"></h1>
          <p id="modalSummary"></p>
          <p id="modalPublished"></p>
        </div>
      </div>
      <div className="innerPosts" id="in">
        {posts.map((p) => (
          <div
            className="fetchposts"
            id="ft"
            onClick={(e) => {
              openModal(p.id, p.title, p.summary, p.published);
            }}
          >
            <ul>
              <li key={p.id} className="title">
                {p.title}
              </li>
              <li className="summary">{p.summary}</li>
              <li className="published">{p.published}</li>
            </ul>
            <div
              className="imgDiv"
              id="imgg"
              onClick={(e) => {
                del(p.id);
              }}
            >
              <img
                width="20vw"
                height="20vh"
                src="https://image.flaticon.com/icons/png/128/2919/2919543.png"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
