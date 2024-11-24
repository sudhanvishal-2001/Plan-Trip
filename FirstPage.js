import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./FirstPage.css";
import bg1 from "./img1/page2bg.png";
import logo from "./img/logo.png";
import profilelogo from "./img/profilelogo.png";
import belllogo from "./img/belllogo.png";
import scimg1 from "./img1/scimg1.png";
import scimg2 from "./img1/scimg2.png";
import scimg3 from "./img1/scimg3.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";



export const FirstPage = () => {
  const [activeView, setActiveView] = useState("single");
  const [currentIndexes, setCurrentIndexes] = useState([0, 1, 2]);

  const cardDetails = [
    { img: scimg1, title: "Experience Japan’s timeless temples and cherry blossoms" ,location:"" },
    { img: scimg2, title: "Experience Japan’s timeless temples and cherry blossoms" },
    { img: scimg3, title: "Experience Japan’s timeless temples and cherry blossoms" },
  ];



  const moveNext = () => {
    setCurrentIndexes((prevIndexes) => {
      const newIndexes = [
        (prevIndexes[0] + 1) % cardDetails.length,
        (prevIndexes[1] + 1) % cardDetails.length,
        (prevIndexes[2] + 1) % cardDetails.length,
      ];
      return newIndexes;
    });
  };

  const movePrevious = () => {
    setCurrentIndexes((prevIndexes) => {
      const newIndexes = [
        (prevIndexes[0] - 1 + cardDetails.length) % cardDetails.length,
        (prevIndexes[1] - 1 + cardDetails.length) % cardDetails.length,
        (prevIndexes[2] - 1 + cardDetails.length) % cardDetails.length,
      ];
      return newIndexes;
    });
  };

  useEffect(() => {
    const interval = setInterval(moveNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="fp-bg1">
        <img src={bg1} alt="Background 1" />
      </div>
      <img className="fp-logo" src={logo} alt="Logo" />
      <img className="fp-profilelogo" src={profilelogo} alt="Profile Logo" />
      <img className="fp-belllogo" src={belllogo} alt="Bell Logo" />

      <div className="toggle-container">
        <div
          className={`toggle-button ${activeView === "single" ? "active" : ""}`}
          onClick={() => setActiveView("single")}
        >
          Single City View
        </div>
        <div
          className={`toggle-button ${activeView === "multi" ? "active" : ""}`}
          onClick={() => setActiveView("multi")}
        >
          Multi City View
        </div>
      </div>

      <div className="co-card">
        <Card className="card1">
          <Card.Img
            variant="top"
            src={cardDetails[currentIndexes[0]].img}
            alt={cardDetails[currentIndexes[0]].title}
          />
        </Card>

        <Card className="card2">
          <Card.Img
            variant="top"
            src={cardDetails[currentIndexes[1]].img}
            alt={cardDetails[currentIndexes[1]].title}
          />
          <Card.Body>
            <Card.Title>{cardDetails[currentIndexes[1]].title}</Card.Title>
          </Card.Body>
        </Card>

        <Card className="card3">
          <Card.Img
            variant="top"
            src={cardDetails[currentIndexes[2]].img}
            alt={cardDetails[currentIndexes[2]].title}
          />
        </Card>
      </div>

      <div className="navigation-buttons">
        <button className="prev-button" onClick={movePrevious}>
        <FaLongArrowAltLeft />
        </button>
        <button className="next-button" onClick={moveNext}>
        <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};
