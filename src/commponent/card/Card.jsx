import { useState } from "react";

export const Cards = () => {
  const qusetionAnswer = [
    {
      question: "What Language is React based on?",
      answer: "React based on Javascript",
    },
    {
      question: "What are tha building block of React apps?",
      answer: "Component are the building blocks of React appa",
    },
    {
      question: "What tha name of the santax we use to discribe a UI in React?",
      answer:
        "JSX (Javascript XML) is the santax used to discribe a UI in React",
    },
    {
      question: "How to pass data from parent to child component?",
      answer: "Use props for data passing perent to chil in React",
    },
    {
      question: "How ti give to component memory?",
      anwer: "Use useState Hooks  give to component memory",
    },
    {
      question:"What do yuo we call on input element that is complltely saychronised?",
      answer: "A controlled input element",
    },
  ];

  const [ans, setAns] = useState("");

  const displayAnswer = (answer) => {
    setAns(answer);
  };

  return (
    <div className="main">
      <h1>REACT CARD ASSIGNMENT</h1>
      <div className="cards">
        {qusetionAnswer.map((item, index) => (
          <p className="singleCard"
            key={index}
            style={{  backgroundColor: ans === item.answer ? "red"  : "white" }}
            onClick={() => displayAnswer(item.answer)}
          >
            {ans === item.answer ? ans : item.question}
          </p>
        ))}
      </div>
    </div>
  );
};
