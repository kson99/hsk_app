import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import CharView from "./CharView/CharView";

function Home() {
  const navigate = useNavigate();
  const { hsk1Dict, hsk2Dict, hsk3Dict, hsk4Dict } = require("../hskDict");

  const [onCharClick, setonCharClick] = useState(false);
  const [charContent, setcharContent] = useState({});
  const [isCollapsed, setisCollapsed] = useState({
    hsk1: false,
    hsk4: false,
    hsk3: false,
    hsk2: false,
  });

  const menuOptions = ["English - HSK", "English - Pinyin", "Pinyin - HSK"];

  const onCollapseDiv = (div) => {
    setisCollapsed({
      ...isCollapsed,
      [div]: !isCollapsed[div],
    });

    var hide = document.getElementById(div);
    hide.style.display = isCollapsed[div] ? "grid" : "none";
  };

  return (
    <div className="Home">
      <CharView
        trigger={onCharClick}
        setTrigger={setonCharClick}
        data={charContent}
      />
      <header className="Header">
        <h1 id="Home-header">HSK Exam Prep App</h1>
      </header>
      <div className="HM-body">
        <div className="HM-Menu">
          {menuOptions.map((elem, i) => {
            return (
              <div
                className="Games"
                key={i}
                onClick={() => {
                  if (elem === menuOptions[0]) {
                    navigate("/Eng_HSK", {
                      data: elem,
                    });
                  } else if (elem === menuOptions[1]) {
                    navigate("/Eng_Pinyin", {
                      data: elem,
                    });
                  } else if (elem === menuOptions[2]) {
                    navigate("/Pinyin_HSK", {
                      data: elem,
                    });
                  } else {
                    navigate("/Without_Pinyin");
                  }
                }}
              >
                <h3>{elem}</h3>
              </div>
            );
          })}
        </div>
        <div className="Char-details">
          <p className="title">All HSK 1 Characters and Meanings</p>
          <p className="count">
            {Object.keys(hsk1Dict).length} words
            <button
              className="collapse-Btn"
              onClick={() => onCollapseDiv("hsk1")}
            >
              {isCollapsed.hsk1 ? "▶︎" : "▼"}
            </button>
          </p>
        </div>
        <div className="All-Char" id="hsk1">
          {Object.keys(hsk1Dict).map((elem, i) => {
            return (
              <div
                className="HSK-Card"
                key={i}
                onClick={() => {
                  setcharContent((prevCont) => ({
                    ...prevCont,
                    char: hsk1Dict[elem].character,
                    pinyin: hsk1Dict[elem].pinyin,
                    meaning: hsk1Dict[elem].meaning,
                  }));
                  setonCharClick(true);
                }}
              >
                <div className="CHI">
                  <div className="Char">{hsk1Dict[elem].character}</div>
                  <div className="Pinyin">{hsk1Dict[elem].pinyin}</div>
                </div>
                <div className="Eng">{hsk1Dict[elem].meaning}</div>
              </div>
            );
          })}
        </div>
        <div className="Char-details">
          <p className="title">All HSK 2 Characters and Meanings</p>
          <p className="count">
            {Object.keys(hsk2Dict).length} words
            <button
              className="collapse-Btn"
              onClick={() => onCollapseDiv("hsk2")}
            >
              {isCollapsed.hsk2 ? "▶︎" : "▼"}
            </button>
          </p>
        </div>
        <div className="All-Char" id="hsk2">
          {Object.keys(hsk2Dict).map((elem, i) => {
            return (
              <div
                className="HSK-Card"
                key={i}
                onClick={() => {
                  setcharContent((prevCont) => ({
                    ...prevCont,
                    char: hsk2Dict[elem].character,
                    pinyin: hsk2Dict[elem].pinyin,
                    meaning: hsk2Dict[elem].meaning,
                  }));
                  setonCharClick(true);
                }}
              >
                <div className="CHI">
                  <div className="Char">{hsk2Dict[elem].character}</div>
                  <div className="Pinyin">{hsk2Dict[elem].pinyin}</div>
                </div>
                <div className="Eng">{hsk2Dict[elem].meaning}</div>
              </div>
            );
          })}
        </div>
        <div className="Char-details">
          <p className="title">All HSK 3 Characters and Meanings</p>
          <p className="count">
            {Object.keys(hsk3Dict).length} words
            <button
              className="collapse-Btn"
              onClick={() => onCollapseDiv("hsk3")}
            >
              {isCollapsed.hsk3 ? "▶︎" : "▼"}
            </button>
          </p>
        </div>
        <div className="All-Char" id="hsk3">
          {Object.keys(hsk3Dict).map((elem, i) => {
            return (
              <div
                className="HSK-Card"
                key={i}
                onClick={() => {
                  setcharContent((prevCont) => ({
                    ...prevCont,
                    char: hsk3Dict[elem].character,
                    pinyin: hsk3Dict[elem].pinyin,
                    meaning: hsk3Dict[elem].meaning,
                  }));
                  setonCharClick(true);
                }}
              >
                <div className="CHI">
                  <div className="Char">{hsk3Dict[elem].character}</div>
                  <div className="Pinyin">{hsk3Dict[elem].pinyin}</div>
                </div>
                <div className="Eng">{hsk3Dict[elem].meaning}</div>
              </div>
            );
          })}
        </div>
        <div className="Char-details">
          <p className="title">All HSK 4 Characters and Meanings</p>
          <p className="count">
            {Object.keys(hsk4Dict).length} words
            <button
              className="collapse-Btn"
              onClick={() => onCollapseDiv("hsk4")}
            >
              {isCollapsed.hsk4 ? "▶︎" : "▼"}
            </button>
          </p>
        </div>
        <div className="All-Char" id="hsk4">
          {Object.keys(hsk4Dict).map((elem, i) => {
            return (
              <div
                className="HSK-Card"
                key={i}
                onClick={() => {
                  setcharContent((prevCont) => ({
                    ...prevCont,
                    char: hsk4Dict[elem].character,
                    pinyin: hsk4Dict[elem].pinyin,
                    meaning: hsk4Dict[elem].meaning,
                  }));
                  setonCharClick(true);
                }}
              >
                <div className="CHI">
                  <div className="Char">{hsk4Dict[elem].character}</div>
                  <div className="Pinyin">{hsk4Dict[elem].pinyin}</div>
                </div>
                <div className="Eng">{hsk4Dict[elem].meaning}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
