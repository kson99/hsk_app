import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import EngHSK from "./screens/Eng_HSK/Eng_HSK";
import EngPinyin from "./screens/Eng_Pinyin/Eng_Pinyin";
import PinyinHSK from "./screens/Pinyin_HSK/Pinyin_HSK";
import WithoutPinyin from "./screens/Without_Pinyin/Without_Pinyin";
import CTRM from "./screens/Eng_HSK/CTRM/CTRM";
import CTRC from "./screens/Eng_HSK/CTRC/CTRC";
import MMTC from "./screens/Eng_HSK/MMTC/MMTC";
import CTRP from "./screens/Eng_Pinyin/CTRP/CTRP";
import CTRM1 from "./screens/Eng_Pinyin/CTRM/CTRM";
import MMTP from "./screens/Eng_Pinyin/MMTP/MMTP";
import CTRP1 from "./screens/Pinyin_HSK/CTRP1/CTRP1";
import CTRC1 from "./screens/Pinyin_HSK/CTRC1/CTRC1";
import MPTC from "./screens/Pinyin_HSK/MPTC/MPTC";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Eng_HSK" element={<EngHSK />} />
        <Route path="/Eng_Pinyin" element={<EngPinyin />} />
        <Route path="/Pinyin_HSK" element={<PinyinHSK />} />
        <Route path="/Without_Pinyin" element={<WithoutPinyin />} />

        {/* Second base ENG_HSK categories */}
        <Route path="/Eng_HSK/Choosing_the_right_meaning" element={<CTRM />} />
        <Route
          path="/Eng_HSK/Choosing_the_right_Character"
          element={<CTRC />}
        />
        <Route path="/Eng_HSK/Match_Meaning_To_Character" element={<MMTC />} />

        {/* Second base ENG_Pinyin categories */}
        <Route
          path="/Eng_Pinyin/Choosing_the_right_meaning"
          element={<CTRM1 />}
        />
        <Route
          path="/Eng_Pinyin/Choosing_the_right_Pinyin"
          element={<CTRP />}
        />
        <Route path="/Eng_Pinyin/Match_Meaning_To_Pinyin" element={<MMTP />} />

        {/* Second base Pinyin_HSK categories */}
        <Route
          path="/Pinyin_HSK/Choosing_the_right_Pinyin"
          element={<CTRP1 />}
        />
        <Route
          path="/Pinyin_HSK/Choosing_the_right_Character"
          element={<CTRC1 />}
        />
        <Route
          path="/Pinyin_HSK/Match_Pinyin_To_Character"
          element={<MPTC />}
        />
      </Routes>
    </div>
  );
}

export default App;
