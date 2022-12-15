import React from "react";
import { Posts } from "./api";
import MyAccordian from "./MyAccordian";
console.log('This is Imported'+Posts);

const Accordian = () => {
  return <div>{
    questions.map(({data}) => 
    <MyAccordian key={data.id} question={data.question} answer={data.answer}   />
    )}</div>;
};

export default Accordian;