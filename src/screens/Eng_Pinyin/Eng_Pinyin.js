import React from "react";
import { useNavigate } from "react-router-dom";
import "./Eng_Pinyin.css";

function Eng_Pinyin() {
  const navigate = useNavigate();

  return (
    <div className="Eng_HSK">
      <header className="Header">
        <button className="EP-Back-Btn" onClick={() => navigate(-1)}>
          ◀︎<span> Back</span>
        </button>
        <h1>English - Pinyin</h1>
        <p style={{ color: "crimson", fontSize: 25 }}>▶︎ Back</p>
      </header>

      <div className="EP-Body">
        <div className="EP-Game-Opt">
          <div
            className="EP-HSK-Eng"
            onClick={() => navigate("/Eng_Pinyin/Choosing_the_right_meaning")}
          >
            <div className="EP-Card">Choosing the right meaning</div>
          </div>
          <div
            className="EP-Eng-HSK"
            onClick={() => navigate("/Eng_Pinyin/Choosing_the_right_Pinyin")}
          >
            <div className="EP-Card">Choosing the right Pinyin</div>
          </div>
          <div
            className="EP-Match"
            onClick={() => navigate("/Eng_Pinyin/Match_Meaning_To_Pinyin")}
          >
            <div className="EP-Card"> Match Meaning to Pinyin</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eng_Pinyin;
