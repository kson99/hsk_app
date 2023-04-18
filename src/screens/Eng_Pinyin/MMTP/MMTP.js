import arrayShuffle from "array-shuffle";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./MMTP.css";
import correct from "../../../Assets/sounds/correct.mp3";
import wrong from "../../../Assets/sounds/wrong.mp3";

function MMTP() {
  let correctSound = new Audio(correct);
  let wrongSound = new Audio(wrong);

  const navigate = useNavigate();
  const [selectedLevel, setselectedLevel] = useState(0);
  const [reRender, setreRender] = useState(0);

  const {
    hsk1Dict,
    hsk2Dict,
    hsk3Dict,
    hsk4Dict,
    hskAllDict,
  } = require("../../../hskDict");

  var randomNum = [];
  let activeCard = [];
  let matched = [];

  const randomize = (dict) => {
    randomNum = [
      Math.floor(Math.random() * Object.keys(dict).length + 1),
      Math.floor(Math.random() * Object.keys(dict).length + 1),
      Math.floor(Math.random() * Object.keys(dict).length + 1),
      Math.floor(Math.random() * Object.keys(dict).length + 1),
      Math.floor(Math.random() * Object.keys(dict).length + 1),
      Math.floor(Math.random() * Object.keys(dict).length + 1),
      Math.floor(Math.random() * Object.keys(dict).length + 1),
      Math.floor(Math.random() * Object.keys(dict).length + 1),
    ];
  };

  const onCardClick = (cardId, cardVal) => {
    // Change card color on click
    document.getElementById(cardId).style.backgroundColor = "grey";
    document.getElementById(cardId).style.color = "white";

    // on first card click
    if (activeCard.length === 0) {
      activeCard = [{ cardVal, cardId }];
    }
    // on second card click
    else if (activeCard.length === 1) {
      activeCard = [...activeCard, { cardVal, cardId }];

      // if Correct
      if (
        activeCard[0].cardVal === activeCard[1].cardVal &&
        activeCard[1].cardId !== activeCard[0].cardId
      ) {
        //match sound
        correctSound.play();

        // Add matched to mached val
        matched.push(activeCard[0].cardVal);

        // for reRender on complete
        if (matched.length === 8) {
          setTimeout(() => {
            var i = reRender;
            i++;
            setreRender(i);
          }, 1000);
        }

        // Toast notification
        toast.success(levelChosen()[cardVal].character, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "colored",
        });

        //Change Color
        var card1 = document.getElementById(activeCard[0].cardId);
        var card2 = document.getElementById(activeCard[1].cardId);
        card1.style.backgroundColor = "green";
        card2.style.backgroundColor = "green";
      }
      // if Wrong
      else {
        //wrong
        wrongSound.play();

        // change color
        var card_1 = document.getElementById(activeCard[0].cardId);
        var card_2 = document.getElementById(activeCard[1].cardId);
        card_1.style.backgroundColor = "red";
        card_2.style.backgroundColor = "red";
        setTimeout(() => {
          // remove changed color
          card_1.style.backgroundColor = "";
          card_2.style.backgroundColor = "";
          card_1.style.color = "";
          card_2.style.color = "";
        }, 1000);
      }
    }

    // After second card selection
    if (activeCard.length === 2) {
      activeCard = [];
    }
  };

  const clearCards = () => {
    document.querySelectorAll(".chars").forEach((elem) => {
      elem.style.backgroundColor = "";
      elem.style.color = "";
    });
    document.querySelectorAll(".means").forEach((elem) => {
      elem.style.backgroundColor = "";
      elem.style.color = "";
    });
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
    clearCards();
    switch (selectedLevel) {
      case 0:
        randomize(hskAllDict);
        return (
          <div className="MMTP-Cards">
            {arrayShuffle(randomNum).map((val, index) => {
              return (
                <>
                  <div
                    className="chars"
                    id={"char" + index}
                    key={index}
                    onClick={() => onCardClick("char" + index, val)}
                  >
                    {hskAllDict[val].pinyin}
                  </div>
                  <div
                    className="means"
                    id={"mean" + index}
                    key={index + 1}
                    onClick={() =>
                      onCardClick("mean" + index, randomNum[index])
                    }
                  >
                    {hskAllDict[randomNum[index]].meaning}
                  </div>
                </>
              );
            })}
          </div>
        );
      // break;
      case 1:
        randomize(hsk1Dict);
        return (
          <div className="MMTP-Cards">
            {arrayShuffle(randomNum).map((val, index) => {
              return (
                <>
                  <div
                    className="chars"
                    id={"char" + index}
                    key={index}
                    onClick={() => onCardClick("char" + index, val)}
                  >
                    {hsk1Dict[val].character}
                  </div>
                  <div
                    className="means"
                    id={"mean" + index}
                    key={index + 1}
                    onClick={() =>
                      onCardClick("mean" + index, randomNum[index])
                    }
                  >
                    {hsk1Dict[randomNum[index]].meaning}
                  </div>
                </>
              );
            })}
          </div>
        );
      // break;
      case 2:
        randomize(hsk2Dict);
        return (
          <div className="MMTP-Cards">
            {arrayShuffle(randomNum).map((val, index) => {
              return (
                <>
                  <div
                    className="chars"
                    id={"char" + index}
                    key={index}
                    onClick={() => onCardClick("char" + index, val)}
                  >
                    {hsk2Dict[val].character}
                  </div>
                  <div
                    className="means"
                    id={"mean" + index}
                    key={index + 1}
                    onClick={() =>
                      onCardClick("mean" + index, randomNum[index])
                    }
                  >
                    {hsk2Dict[randomNum[index]].meaning}
                  </div>
                </>
              );
            })}
          </div>
        );
      // break;
      case 3:
        randomize(hsk3Dict);
        return (
          <div className="MMTP-Cards">
            {arrayShuffle(randomNum).map((val, index) => {
              return (
                <>
                  <div
                    className="chars"
                    id={"char" + index}
                    key={index}
                    onClick={() => onCardClick("char" + index, val)}
                  >
                    {hsk3Dict[val].character}
                  </div>
                  <div
                    className="means"
                    id={"mean" + index}
                    key={index + 1}
                    onClick={() =>
                      onCardClick("mean" + index, randomNum[index])
                    }
                  >
                    {hsk3Dict[randomNum[index]].meaning}
                  </div>
                </>
              );
            })}
          </div>
        );
      // break;
      case 4:
        randomize(hsk4Dict);
        return (
          <div className="MMTP-Cards">
            {arrayShuffle(randomNum).map((val, index) => {
              return (
                <>
                  <div
                    className="chars"
                    id={"char" + index}
                    key={index}
                    onClick={() => onCardClick("char" + index, val)}
                  >
                    {hsk4Dict[val].character}
                  </div>
                  <div
                    className="means"
                    id={"mean" + index}
                    key={index + 1}
                    onClick={() =>
                      onCardClick("mean" + index, randomNum[index])
                    }
                  >
                    {hsk4Dict[randomNum[index]].meaning}
                  </div>
                </>
              );
            })}
          </div>
        );
      // break;
      default:
    }
  };

  useEffect(() => {
    // tabSwitch();
  }, [reRender]);

  return (
    <div className="MMTP">
      <header className="Header">
        <button className="EH-Back-Btn" onClick={() => navigate(-1)}>
          ◀︎<span> Back</span>
        </button>
        <h1>Match Meaning To Pinyin</h1>
        <p style={{ color: "crimson", fontSize: 25 }}>▶︎ Back</p>
      </header>
      <div className="MMTP-body">
        <div className="MMTP-Game">
          <div className="holder">
            <div className="CTRM-Levels">
              <ToastContainer />
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
          <div className="holder">
            {/* <div className="MMTP-Game-"></div> */}
            {tabSwitch()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MMTP;
