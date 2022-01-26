import React, { useState } from "react";

const Tour = ({ id, title, body, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <div className="tour-info">
        <h4>{title}</h4>
      </div>
      <p>
        {readMore ? body : `${body.substring(0, 50)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "Read More"}
        </button>
      </p>
      <button
        className="delete-btn"
        onClick={() => {
          removeTour(id);
        }}
      >
        Not intereseted
      </button>
    </article>
  );
};

export default Tour;
