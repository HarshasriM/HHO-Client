import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./accordion.css"; // Import the CSS file

export const AccordionEl = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    { title: "Accordion Item #1", content: "This is the first item's accordion body." },
    { title: "Accordion Item #2", content: "This is the second item's accordion body." },
    { title: "Accordion Item #3", content: "This is the third item's accordion body." },
    { title: "Accordion Item #4", content: "This is the fourth item's accordion body." },
    { title: "Accordion Item #5", content: "This is the fifth item's accordion body." },
  ];

  return (
    <div className="accordion" id="accordionExample">
      {accordionData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
              type="button"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>{item.content}</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci officiis distinctio porro, perferendis quas recusandae ipsa unde eaque eveniet.
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
