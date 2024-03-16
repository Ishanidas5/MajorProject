import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./practicesection.css";
import Back from "../common/back/Back";

const PracticeSection = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Array of topics for DSA
  const dsaTopics = ["Topic 1", "Topic 2", "Topic 3", "Topic 4"]; // Add more topics as needed

  return (
    <>
      <Back title="Practice Section" />
      <div className="container">
        <ul className="button-list">
          <li>
            <Link to="/pracsec/aptitude" className="button solid">
              <button>Aptitude</button>
            </Link>
          </li>
          <li>
            <Link to="/pracsec/compre" className="button solid">
              <button>Comprehension</button>
            </Link>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn" onClick={toggleDropdown}>DSA</button>
              {showDropdown && (
                <div className="dropdown-content">
                  <ul>
                    {dsaTopics.map((topic, index) => (
                      <li key={index}>
                        <Link to={`/pracsec/dsa/${topic.replace(/\s+/g, '-').toLowerCase()}`}>
                          {topic}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PracticeSection;
