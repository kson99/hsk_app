import React from "react";
import { useNavigate } from "react-router-dom";
import "./Eng_HSK.css";

function Eng_HSK() {
  const navigate = useNavigate();

  return (
    <div className="Eng_HSK">
      <header className="Header">
        <button className="EH-Back-Btn" onClick={() => navigate(-1)}>
          ◀︎<span> Back</span>
        </button>
        <h1>English - HSK</h1>
        <p style={{ color: "crimson", fontSize: 25 }}></p>
      </header>

      <div className="EH-Body">
        <div className="EH-Game-Opt">
          <div
            className="EH-HSK-Eng"
            onClick={() => navigate("/Eng_HSK/Choosing_the_right_meaning")}
          >
            <div className="EH-Card">Choosing the right meaning</div>
          </div>
          <div
            className="EH-Eng-HSK"
            onClick={() => navigate("/Eng_HSK/Choosing_the_right_Character")}
          >
            <div className="EH-Card">Choosing the right Character</div>
          </div>
          <div
            className="EH-Match"
            onClick={() => navigate("/Eng_HSK/Match_Meaning_To_Character")}
          >
            <div className="EH-Card"> Match Meaning to Charatcher</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eng_HSK;
