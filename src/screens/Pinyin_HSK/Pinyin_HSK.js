import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pinyin_HSK.css";

function Pinyin_HSK() {
  const navigate = useNavigate();

  return (
    <div className="Pinyin_HSK">
      <header className="Header">
        <button className="PH-Back-Btn" onClick={() => navigate(-1)}>
          ◀︎<span> Back</span>
        </button>
        <h1>Pinyin - HSK</h1>
        <p style={{ color: "crimson", fontSize: 25 }}></p>
      </header>

      <div className="PH-Body">
        <div className="PH-Game-Opt">
          <div
            className="PH-HSK-Eng"
            onClick={() => navigate("/Pinyin_HSK/Choosing_the_right_Pinyin")}
          >
            <div className="PH-Card">Choosing the right Pinyin</div>
          </div>
          <div
            className="PH-Eng-HSK"
            onClick={() => navigate("/Pinyin_HSK/Choosing_the_right_Character")}
          >
            <div className="PH-Card">Choosing the right Character</div>
          </div>
          <div
            className="PH-Match"
            onClick={() => navigate("/Pinyin_HSK/Match_Pinyin_To_Character")}
          >
            <div className="PH-Card"> Match Pinyin to Charatcher</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pinyin_HSK;
