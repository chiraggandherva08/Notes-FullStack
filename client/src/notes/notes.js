import React, { useState, useEffect } from "react";
import "./notes.css";
import slideImg from "./slide.svg";

const ContentBar = ({ title, content }) => {
  return <div id="content-bar">
    <div id="title-bar"> {title}
      <img src={slideImg} id="slide-img" onClick={() => {
        document.querySelector("#content-bar").style.transform = "translateX(100%)";
      }} />
    </div>
    <div id="content-space"> {content} </div>
  </div>
}

const fetchData = async (setNotes) => {
  try {
    let response = await fetch("http://localhost:8000/");
    response = (await response.json())[0];

    const notes_Titles = Object.keys(response);
    const notes_Content = Object.values(response);

    const notes = [];
    notes_Titles.map((title, index) => {
      if (index > 0) {
        notes.push([title, notes_Content[index]]);
      }
    })

    setNotes(notes);

  } catch (error) {
    return { error: "Encountered With ERROR!" };
  }
}

const toggleContentBar = () => {
  document.querySelector("#content-bar").style.transform = "translateX(0px)";
}

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchData(setNotes);
  }, []);

  return (
    <React.Fragment>
      <ContentBar title={title} content={content} />
      {
        (notes.length == 0) ? (
          <React.Fragment>
            <div id="no-notes-created">Empty Notes Bucket!</div>
            <img id="empty-bucket" src="assets/empty.png"></img>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div id="created-created">Your Created Notes</div>
            <ul id="notes-list">{
              notes.map((note, index) => {
                return (
                  <li 
                  onClick={() => {setTitle(note[0]);
                    setContent(note[1]);
                    toggleContentBar();
                  }} 
                  
                  className="notes-prev" 
                  key={index}>
                    {note[0]}
                    <hr className="notes-prev-hr" />
                    {note[1]}
                  </li>
                )
              })
            }
            </ul>
          </React.Fragment>
        )}
    </React.Fragment>
  );
}

export default Notes;
