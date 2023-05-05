import React, { useEffect, useState } from "react";
import patternDivider from "../assets/images/pattern-divider-desktop.svg";
import icon from "../assets/images/icon-dice.svg";

function AdviceCard() {
  const [advice, setAdvice] = useState({});

  const findAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data));
  };
  useEffect(() => {
    findAdvice();
  }, []);
  return (
    <div className="advice-card w-96 h-64 rounded-lg relative">
      <h1
        style={{ color: "hsl(150, 100%, 66%)" }}
        className="text-sm text-center py-4 uppercase tracking-[.25em]"
      >
        Advice #{advice?.slip?.id}
      </h1>
      <div className="flex justify-center h-32 items-center">
        {advice?.slip?.advice ? (
          <p
            className="text-xl font-bold px-5 text-center"
            style={{ color: "hsl(193, 38%, 86%)" }}
          >
            “{advice?.slip?.advice}”
          </p>
        ) : null}
      </div>
      <div className="px-5 mb-8">
        <img src={patternDivider} alt="devider" className="w-full h-4" />
      </div>

      <div className="flex justify-center items-center absolute inset-x-0 bottom-[-25px] right-50">
        <button
          onClick={findAdvice}
          className="neon-button rounded-full p-4"
          type=""
        >
          <img className="neon-button rounded-[50px] w-8 h-8" src={icon} alt="icon" />
        </button>
      </div>
    </div>
  );
}

export default AdviceCard;
