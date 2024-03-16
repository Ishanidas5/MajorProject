import React, { useState } from "react";
import "./compre.css";

const Comprehension = () => {
  const passages = [
    {
      id: 1,
      title: "Passage 1",
      content:
        "Many United States companies have, unfortunately, made the search for legal protection from import competition into a major line of work. Since 1980 the United States International Trade Commission (ITC) has received about 280 complaints alleging damage from imports that benefit foreign governments’ subsidies. Another 340 charge that foreign companies “dumped” their products in the United States at “less than fair value.” Even when no unfair practices are alleged, the simple claim that an industry has been injured by imports is sufficient grounds to seek relief. Contrary to the general impression, this quest for import relief has hurt more companies than it has helped. As corporations begin to function globally, they develop an intricate web of marketing, production, and research relationships, The complexity of these relationships makes it unlikely that a system of import relief laws will meet the strategic needs of all the units under the same parent company. Internationalization increases the danger that foreign companies will use import relief laws against the very companies the laws were designed to protect. Suppose a United States-owned company establishes an overseas plant to manufacture a product while its competitor makes the same product in the United States. If the competitor can prove injury from the imports—and that the United States company received a subsidy from a foreign government to build its plant abroad—the United States company’s products will be uncompetitive in the United States, since they would be subject to duties.Perhaps the most brazen case occurred when the ITC investigated allegations that Canadian companies were injuring the United States salt industry by dumping rock salt, used to de-ice roads. The bizarre aspect of the complaint was that a foreign conglomerate with United States operations was crying for help against a United States company with foreign operations. The “United States” company claiming the injury was a subsidiary of a Dutch conglomerate. In contrast, the “Canadian” companies included a subsidiary of a Chicago firm that was the second-largest domestic producer of rock salt. ",
      questions: [
        {
          id: 1,
          question:
            "Which of the following options is most similar in meaning to the word: “Intricate” mentioned in the article?",
          options: ["Twisted", "Straightforward", "Simple", "Advance"],
          answer: "Twisted",
        },
        {
          id: 2,
          question: "What is the full form of ITC as per the passage?",
          options: [
            "Imperial Tobacco Company",
            "International Trade Commission",
            "Indian Trade Company",
            "International Trade Corporation",
          ],
          answer: "International Trade Commission",
        },
      ],
    },
  ];

  const [selectedPassage, setSelectedPassage] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleShowPassage = (id) => {
    setSelectedPassage(id);
    setSelectedOption(null); // Reset selected option when a new passage is selected
  };

  const handleOptionChange = (passageId, questionId, value) => {
    setSelectedOption({ passageId, questionId, value });
  };

  return (
    <div className="passages-container">
      <h1>Comprehension</h1>
      {passages.map((passage) => (
        <div key={passage.id} className="passage">
          <h2>{passage.title}</h2>
          <p>{passage.content}</p>
          <button onClick={() => handleShowPassage(passage.id)}>
            Read Passage
          </button>
          {selectedPassage === passage.id && (
            <div>
              {passage.questions.map((question) => (
                <div key={question.id} className="question">
                  <p>{question.question}</p>
                  <ol>
                    {question.options.map((option, index) => (
                      <li key={index}>
                        <label>
                          <input
                            type="radio"
                            value={option}
                            checked={
                              selectedOption &&
                              selectedOption.passageId === passage.id &&
                              selectedOption.questionId === question.id &&
                              selectedOption.value === option
                            }
                            onChange={() =>
                              handleOptionChange(
                                passage.id,
                                question.id,
                                option
                              )
                            }
                          />
                          {option}
                        </label>
                      </li>
                    ))}
                  </ol>
                  {selectedOption &&
                    selectedOption.passageId === passage.id &&
                    selectedOption.questionId === question.id && (
                      <div className="explanation">
                        <p>Correct Answer: {question.answer}</p>
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Comprehension;
