import React from "react";
import Link from "next/link";

const options = [
  {
    name: "Module 1: Introduction",
    link: "/learn/Module1",
  },
  {
    name: "Module 2: Fundamental Analysis",
    link: "/learn/Module2",
  },
  {
    name: "Module 3: Technical Analysis",
    link: "/learn/Module3",
  },
  {
    name: "Module 4: Trading Style",
    link: "/learn/Module4",
  },
  {
    name: "Module 5: Trading Plan",
    link: "/learn/Module5",
  },
  {
    name: "Module 6: Risks",
    link: "/learn/Module6",
  },
  {
    name: "Basic Terminology",
    link: "/learn/basic-terminology",
  },
  {
    name: "Key Metrics",
    link: "/learn/key-metrics",
  },
];

const Roulette = () => {
  return (
    <div>
      {options.map((term, index) => (
        <Link key={index} href={term.link}>
          <button className=" border-blue-400 rounded-xl border-2 px-2 py-1 bg-blue-100 mr-2 mt-2 hover:border-blue-600 hover:bg-blue-200">
            {term.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Roulette;
