import React, { useEffect, useState } from "react";
import "./CTRM.css";
import arrayShuffle from "array-shuffle";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HelpIcon from "../../../Assets/Icons/help.svg";
import ReloadIcon from "../../../Assets/Icons/reload.svg";
import SoundIcon from "../../../Assets/Icons/sound.svg";
import correct from "../../../Assets/sounds/correct.mp3";
import wrong from "../../../Assets/sounds/wrong.mp3";

function CTRM(props) {
  const navigate = useNavigate();
  let correctSound = new Audio(correct);
  let wrongSound = new Audio(wrong);

  const {
    hsk1Dict,
    hsk2Dict,
    hsk3Dict,
    hsk4Dict,
    hskAllDict,
  } = require("../../.../../../hskDict");

  const [selectedLevel, setselectedLevel] = useState(0);
  const [reRender, setreRender] = useState(0);
  var randomNum;
  let randomMeaning = {};

  const randomize = (dict) => {
    randomNum = Math.floor(Math.random() * Object.keys(dict).length + 1);
  };

  const levelChosen = () => {
    switch (selectedLevel) {
      case 0:
        return hskAllDict;
      // break;
      case 1:
        return hsk1Dict;
      // break;
      case 2:
        return hsk2Dict;
      // break;
      case 3:
        return hsk3Dict;
      // break;
      case 4:
        return hsk4Dict;
      // break;
      default:
    }
  };

  const tabSwitch = () => {
    switch (selectedLevel) {
      case 0:
        randomize(hskAllDict);
        return <p>{hskAllDict[randomNum].pinyin}</p>;
      // break;
      case 1:
        randomize(hsk1Dict);
        return <p>{hsk1Dict[randomNum].pinyin}</p>;
      // break;
      case 2:
        randomize(hsk2Dict);
        return <p>{hsk2Dict[randomNum].pinyin}</p>;
      // break;
      case 3:
        randomize(hsk3Dict);
        return <p>{hsk3Dict[randomNum].pinyin}</p>;
      // break;
      case 4:
        randomize(hsk4Dict);
        return <p>{hsk4Dict[randomNum].pinyin}</p>;
      // break;
      default:
    }
  };

  const levelMeanings = () => {
    if (selectedLevel === 0) {
      randomMeaning = {
        0: Math.floor(Math.random() * Object.keys(hskAllDict).length + 1),
        1: Math.floor(Math.random() * Object.keys(hskAllDict).length + 1),
        2: Math.floor(Math.random() * Object.keys(hskAllDict).length + 1),
        3: "",
      };
    }
    if (selectedLevel === 1) {
      randomMeaning = {
        0: Math.floor(Math.random() * Object.keys(hsk1Dict).length + 1),
        1: Math.floor(Math.random() * Object.keys(hsk1Dict).length + 1),
        2: Math.floor(Math.random() * Object.keys(hsk1Dict).length + 1),
        3: "",
      };
    }
    if (selectedLevel === 2) {
      randomMeaning = {
        0: Math.floor(Math.random() * Object.keys(hsk2Dict).length + 1),
        1: Math.floor(Math.random() * Object.keys(hsk2Dict).length + 1),
        2: Math.floor(Math.random() * Object.keys(hsk2Dict).length + 1),
        3: "",
      };
    }
    if (selectedLevel === 3) {
      randomMeaning = {
        0: Math.floor(Math.random() * Object.keys(hsk3Dict).length + 1),
        1: Math.floor(Math.random() * Object.keys(hsk3Dict).length + 1),
        2: Math.floor(Math.random() * Object.keys(hsk3Dict).length + 1),
        3: "",
      };
    }
    if (selectedLevel === 4) {
      randomMeaning = {
        0: Math.floor(Math.random() * Object.keys(hsk4Dict).length + 1),
        1: Math.floor(Math.random() * Object.keys(hsk4Dict).length + 1),
        2: Math.floor(Math.random() * Object.keys(hsk4Dict).length + 1),
        3: "",
      };
    }
  };

  const onAnswerClick = (val, id) => {
    if (val === "") {
      //correct
      correctSound.play();

      toast.success("Correct", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });

      var correct = document.getElementById(id);
      var show = document.querySelector(".CTRM-Pinyin");
      show.style.opacity = 1;
      correct.style.backgroundColor = "green";
      correct.style.color = "white";
      setTimeout(() => {
        var i = reRender;
        i++;
        setreRender(i);
        show.style.opacity = 0;
        correct.style.color = "";
        correct.style.backgroundColor = "";
      }, 2000);
    } else {
      //wrong
      wrongSound.play();

      toast.error("Wrong, try again", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "colored",
      });

      var wrong = document.getElementById(id);
      wrong.style.backgroundColor = "red";
      wrong.style.color = "white";
      setTimeout(() => {
        wrong.style.color = "";
        wrong.style.backgroundColor = "";
      }, 2000);
    }
  };

  useEffect(() => {
    // tabSwitch();
  }, [reRender]);

  return (
    <div className="CTRM">
      <header className="Header">
        <button className="EH-Back-Btn" onClick={() => navigate(-1)}>
          ◀︎<span> Back</span>
        </button>
        <h1>Choose The Right Meaning</h1>
        <p style={{ color: "crimson", fontSize: 25 }}></p>
      </header>
      <div className="CTRM-body">
        <div className="CTRM-Game">
          <div className="holder">
            <div className="CTRM-Levels">
              {["ALL", "HSK 1", "HSK 2", "HSK 3", "HSK 4"].map(
                (level, index) => {
                  return (
                    <p
                      style={{
                        backgroundColor: selectedLevel === index ? "red" : "",
                        color: selectedLevel === index ? "white" : "",
                      }}
                      key={index}
                      onClick={() => setselectedLevel(index)}
                    >
                      {level}
                    </p>
                  );
                }
              )}
            </div>
          </div>
          <div className="CTRM-Char">{tabSwitch()}</div>
          <div className="CTRM-Pinyin">
            {levelChosen()[randomNum].character}
          </div>
          <div className="CTRM-Meanings">
            {levelMeanings()}
            {arrayShuffle(Object.values(randomMeaning)).map(
              (meaning, index) => {
                return (
                  <div
                    key={index}
                    id={"meaning" + index}
                    className="meaning"
                    onClick={() => onAnswerClick(meaning, "meaning" + index)}
                  >
                    {meaning === ""
                      ? levelChosen()[randomNum].meaning
                      : levelChosen()[meaning].meaning}
                  </div>
                );
              }
            )}
          </div>
          <div className="holder">
            <div className="CTRM-More">
              <div className="CTRM-Sound">
                <img src={SoundIcon} alt="" />
              </div>
              <div
                className="CTRM-Help"
                onClick={() => {
                  var show = document.querySelector(".CTRM-Pinyin");
                  show.style.opacity = 1;
                  setTimeout(() => {
                    show.style.opacity = 0;
                  }, 3000);
                }}
              >
                <img src={HelpIcon} alt="" />
              </div>
              <div
                className="CTRM-reload"
                onClick={() => {
                  var i = reRender;
                  i++;
                  setreRender(i);
                }}
              >
                <img src={ReloadIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CTRM;
