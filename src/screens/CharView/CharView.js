import React from "react";
import "./CharView.css";

function CharView(props) {
  return props.trigger ? (
    <div className="CharView">
      <div className="CharView-inner">
        <div className="CV-close" onClick={() => props.setTrigger(false)}>
          <p>✖︎</p>
        </div>
        <div className="CV-Char-Pny">
          <div className="CV-Char">{props.data.char}</div>
          <div className="CV-Pny">{props.data.pinyin}</div>
        </div>
        <div className="CV-Eng">{props.data.meaning}</div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default CharView;
