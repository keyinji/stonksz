import React from "react";
import Roulette from '../../components/Roulette'

const array = [
  {
    lessonNumber: 1,
    lessonTitle: "Scalping",
    topicsCovered: [
      {
        title: "Basics of Scalping",
        description:
          "Scalping is a trading strategy that involves buying and selling cryptocurrencies in a short period of time, usually within a few minutes or seconds, to make a small profit. The goal of scalping is to take advantage of small price movements, often using technical analysis to identify opportunities.",
      },
      {
        title: "Identifying Potential Opportunities for Scalping",
        description:
          "To successfully scalp in the crypto market, it is important to be able to identify potential opportunities for scalping. This involves looking for assets with high liquidity and volatility, such as Bitcoin or Ethereum, and keeping an eye out for price movements that could indicate a potential opportunity.",
      },
      {
        title: "Technical Analysis Indicators and Tools for Scalping",
        description:
          "Technical analysis is a key tool in scalping. Traders often use technical indicators and tools, such as moving averages, support and resistance levels, and momentum indicators, to help identify potential entry and exit points for trades. In addition, traders may also use chart patterns, such as triangles, flags, or pennants, to help identify potential price breakouts.",
      },
      {
        title: "Risk Management Strategies for Scalping",
        description:
          "Risk management is also an important consideration when scalping. Traders need to be able to quickly enter and exit trades, often in a matter of seconds, which can be challenging in a volatile market. Stop-loss orders can be useful in limiting potential losses, while take-profit orders can be used to lock in profits. It is important to carefully manage risk and avoid overtrading, as this can lead to significant losses.",
      },
    ],
  },
  {
    lessonNumber: 2,
    lessonTitle: "Day Trading",
    topicsCovered: [
      {
        title: "Basics of Day Trading",
        description:
          "Day trading involves buying and selling cryptocurrencies within the same day to profit from short-term price movements. Traders often use leverage to increase position sizes and potential profits.",
      },
      {
        title: "Identifying Potential Opportunities",
        description:
          "Day traders focus on volatile and liquid assets and stay up to date with news events and market sentiment to identify potential opportunities for trading.",
      },
      {
        title: "Technical Analysis Indicators and Tools",
        description:
          "Day traders use technical analysis tools, such as moving averages, trendlines, and chart patterns, as well as trading indicators like RSI, MACD, and Stochastic Oscillator to identify entry and exit points and market conditions.",
      },
      {
        title: "Risk Management Strategies",
        description:
          "Day traders use stop-loss and take-profit orders, proper position sizing, and risk-reward ratios to protect capital and ensure a positive expectancy over the long run. Staying disciplined and avoiding emotional trading decisions is also important.",
      },
    ],
  },
  {
    lessonNumber: 3,
    lessonTitle: "Swing Trading",
    topicsCovered: [
      {
        title: "Understanding the basics of swing trading",
        description:
          "Swing trading is a trading strategy that involves holding positions for several days up to a few weeks. It's a middle ground between day trading and position trading, as swing traders aim to capture short-term price movements while avoiding the noise and volatility of intraday trading.",
      },
      {
        title: "Identifying potential opportunities for swing trading",
        description:
          "Swing traders look for trends that are likely to continue for a few days or weeks. They use technical analysis to identify entry and exit points, such as trendlines, moving averages, and chart patterns. Fundamental analysis can also be used to identify potential catalysts that could impact the price of a particular cryptocurrency.",
      },
      {
        title: "Technical analysis indicators and tools for swing trading",
        description:
          "Swing traders use technical indicators and tools to identify trends, momentum, and potential price reversals. Some popular indicators include the Relative Strength Index (RSI), Moving Average Convergence Divergence (MACD), and Bollinger Bands. Chart patterns such as head and shoulders, double tops and bottoms, and triangles are also commonly used by swing traders to identify potential trend reversals.",
      },
      {
        title: "Risk management strategies for swing trading",
        description:
          "Swing traders need to manage their risk carefully to protect their capital. They can use stop-loss orders to limit their potential losses and take-profit orders to lock in profits. Position sizing is also important, as swing traders should only risk a small percentage of their trading capital on each trade. Finally, swing traders should have a trading plan in place that includes entry and exit points, risk management strategies, and a clear set of rules for entering and exiting trades.",
      },
    ],
  },
  {
    lessonNumber: 4,
    lessonTitle: "Position Trading",
    topicsCovered: [
      {
        title: "Basics of Position Trading",
        description:
          "Position trading involves buying and holding assets for an extended period, typically weeks, months, or even years. It is a long-term trading strategy that does not require constant monitoring of the markets.",
      },
      {
        title: "Identifying Potential Opportunities",
        description:
          "Position traders focus on assets that have strong fundamentals and long-term growth potential. They also consider macroeconomic factors, such as global economic trends, political events, and regulatory changes.",
      },
      {
        title: "Technical Analysis Indicators and Tools",
        description:
          "Position traders use technical analysis tools and indicators to identify entry and exit points for their trades. Commonly used tools include moving averages, MACD, RSI, and Fibonacci retracements. Fundamental analysis tools can also be used to evaluate the long-term growth potential of an asset.",
      },
      {
        title: "Risk Management Strategies",
        description:
          "Position traders should have a clear risk management strategy in place to minimize potential losses and protect their capital. Strategies include stop-loss orders and diversification to spread risk across different assets.",
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