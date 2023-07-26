import React from "react";
import Roulette from '../../components/Roulette'
const array = [
  {
    lessonNumber: 1,
    lessonTitle: "Developing a Trading Plan",
    topicsCovered: [
      {
        title: "Importance of a Trading Plan",
        description:
          "A trading plan is an essential tool for any trader as it provides a roadmap for making trading decisions, helps traders stay focused and disciplined, and reduces emotional decision-making.",
      },
      {
        title: "Components of a Trading Plan",
        description:
          "A trading plan should contain the following components: Trading objectives, trading style, entry and exit rules, risk management plan, and trading psychology strategies.",
      },
      {
        title: "Setting Objectives and Defining Trading Style",
        description:
          "Before developing a trading plan, it's important to set clear objectives and define your trading style. Objectives should be specific, measurable, and achievable. Your trading style will determine the types of trades you make, the timeframes you trade on, and the technical indicators and tools you use to make decisions.",
      },
      {
        title: "Establishing Entry and Exit Rules",
        description:
          "Entry and exit rules are critical to any trading plan. They help to ensure that you enter trades at the right time and exit trades before your losses become too large. Entry rules can include technical indicators, price levels, and other factors, while exit rules should be based on predefined profit targets and stop-loss levels.",
      },
      {
        title: "Developing a Risk Management Plan",
        description:
          "A risk management plan is essential for any trading plan as it helps to minimize losses and protect your capital. Key elements include setting stop-loss and take-profit levels, managing position sizing based on your risk tolerance, and implementing other risk-reducing measures, such as diversification and hedging strategies.",
      },
    ],
  },
  {
    lessonNumber: 2,
    lessonTitle: "Importance of Setting Achievable Trading Goals",
    topicsCovered: [
      {
        title: "Setting Achievable Goals",
        description:
          "Goals are an essential part of a trading plan. Setting achievable goals is crucial for staying focused on objectives and developing a roadmap for achieving them.",
      },
      {
        title: "Short-Term and Long-Term Goals",
        description:
          "Both short-term and long-term goals are important for trading success. Short-term goals can help stay motivated, while long-term goals help focus on bigger objectives and develop a plan for achieving them.",
      },
      {
        title: "Realistic Profit and Loss Targets",
        description:
          "Setting a realistic profit and loss target is important for managing risk and avoiding unrealistic expectations. A target that is achievable within a reasonable time frame and takes into account risk tolerance and trading style is ideal.",
      },
      {
        title: "Tracking Progress and Revising Goals",
        description:
          "Regularly tracking progress and revising goals as needed is crucial for staying on track and adjusting trading plans to changing market conditions.",
      },
    ],
  },
  {
    lessonNumber: 3,
    lessonTitle: "Trading Journal",
    topicsCovered: [
      {
        title: "Benefits of Keeping a Trading Journal",
        description:
          "Identifying mistakes, gaining insight into successful trading strategies, accountability, and better decision-making.",
      },
      {
        title: "What to Include in a Trading Journal",
        description:
          "Date and time of the trade, asset traded, direction of the trade, entry and exit price, stop loss and take profit levels, reason for entering the trade, trading strategy used, notes on market conditions and events, and outcome of the trade.",
      },
      {
        title: "Using the Trading Journal to Improve Trading Performance",
        description:
          "Regularly reviewing and analyzing the trading journal, adjusting strategies and techniques, evaluating progress towards trading goals, and developing and refining a trading plan.",
      },
    ],
  },
];


const Module = () => {
    return (
      <div className="md:w-2/3 mx-auto">
        <Roulette />
        {array.map((term, index) => (
          <div key={index} className="items-center py-2">
            <div className="flex items-center font-bold text-2xl">
              {term.lessonNumber}. {term.lessonTitle}
            </div>
            {term.topicsCovered.map((term, index) => (
              <div key={index}>
                <div className="flex items-center font-bold text-lg">{term.title}</div>
                <div>{term.description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default Module;