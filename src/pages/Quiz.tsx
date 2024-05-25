import { useState } from "react";
function Quizscreen() {
  var questions = [
    {
      question: "HTML Stands For _________",
      options: [
        "Anchor Text Language",
        "HTML",
        "Case Cading Style Sheet",
        "HyperText markup language",
      ],
      correctAns: "HyperText markup language",
    },
    {
      question: "CSS Stands For _________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "JS Stands For _________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "DOM Stands For _________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "RAM Stands For _________",
      options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
      correctAns: "Random Access Memory",
    },
    {
      question: "ROM Stands For _________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ];
  const [currrentindex, setindex] = useState(0);
 const [score , setscore] = useState(0)
 const handleAnswerClick = (answer : any) => {
  if (answer === questions[currrentindex].correctAns) {
    setscore(score + 1);
  }
  return (
    <div>
      <h1 className="d-flex justify-content-center mt-5">
        Welcome To QuiazApp
      </h1>
      <div className="d-flex justify-content-center ">
        <p className="d-flex justify-content-center fw-bold fs-4 mt-4 pb-5">
          {questions[currrentindex].question}{" "}
        </p>
        <p className="ms-5 mt-4 fw-bold fs-4 ">
          Question{currrentindex + 1}/{questions.length}
        </p>
      </div>

      <ul className="d-flex justify-content-center">
        {questions[currrentindex].options.map((x, i) => (
          <button
            className="btn btn-primary rounded-4 ms-3"
            key={i}
            onClick={() => {
              setindex(currrentindex + 1);
              handleAnswerClick(x)
            }}
          >
            {x}
          </button>
        ))}
      </ul>
    </div>
  );
}}

export default Quizscreen