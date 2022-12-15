import React from "react";

const MyAccordian = ({data}) => {
  return (
    <><div className="main-heading">
      <h2>{data.question}</h2></div>
      <img src={data.imgsrc} className="card_img" alt="This Section For pic"/>
     <p className="answers">{data.answer}</p>
    </>
  );
};

export default MyAccordian;
