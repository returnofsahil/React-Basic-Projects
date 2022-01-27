import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info, id }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question" key={id}>
      <header>
        <h4 key={id}>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p key={id}>{info}</p>}
    </article>
  );
};

//now able to transfer data

export default Question;
