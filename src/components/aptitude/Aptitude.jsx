import React, { useState } from "react";
import "./aptitude.css";

const Aptitude = () => {
  const questions = [
    {
      id: 1,
      question:
        "Two ships are sailing in the sea on the two sides of a lighthouse. The angle of elevation of the top of the lighthouse is observed from the ships are 30° and 45° respectively. If the lighthouse is 100 m high, the distance between the two ships is:",
      options: ["173 m", "200 m", "273 m", "300 m"],
      answer: "273 m",
      solution:
        "Then, AB = 100 m, ACB = 30° and ADB = 45°. AB/AC = tan 30° = 1/√3 AC = AB × √3 = 100√3 m. AB/AD = tan 45° = 1 AD = AB = 100 m. CD = (AC + AD) = (100√3 + 100) m = 100(√3 + 1) = (100 × 2.73) m = 273 m",
    },
    {
      id: 2,
      question:
        "A man standing at a point P is watching the top of a tower, which makes an angle of elevation of 30° with the man's eye. The man walks some distance towards the tower to watch its top and the angle of the elevation becomes 60°. What is the distance between the base of the tower and the point P?",
      options: [
        "4√3 units",
        "8 units",
        "12 units",
        "Data inadequate",
        "None of these",
      ],
      answer: "Data inadequate",
      solution: "One of AB, AD, and CD must have given.",
    },
    // Add more questions as needed
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleShowAnswer = (id) => {
    setSelectedOption(id);
  };

  return (
    <div
      className="courses-container"
      style={{ height: "400px", overflowY: "auto" }}
    >
      <h1>APTITUDE</h1>
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.question}</p>
          <ol>
            {question.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ol>
          <button onClick={() => handleShowAnswer(question.id)}>
            Show Answer
          </button>
          {selectedOption === question.id && (
            <div className="solution">
              <p>Answer: {question.answer}</p>
              <p>Solution: {question.solution}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Aptitude;
