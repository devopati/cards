import React, { useState } from "react";

const Card = ({ desc1, desc2, title }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="card-container">
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="desc1">
        <p>{desc1}</p>
      </div>
      <div className={`desc2 ${show && "show-desc2"}`}>
        <p>{desc2}</p>
      </div>
      <div className="btn">
        <button onClick={() => setShow(!show)}>Show more</button>
      </div>
    </div>
  );
};

export default Card;
