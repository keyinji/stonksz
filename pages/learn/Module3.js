import React from "react";
import Roulette from '../../components/Roulette'

const array = [
  {
    lessonNumber: 1,
    lessonTitle: "Introduction to Technical Analysis",
    topicsCovered: [
      {
        title: "Overview of Technical Analysis",
        description:
          "Technical analysis is the study of historical price and volume data to identify trends and make trading decisions. It involves using charts, patterns, and technical indicators to analyze market behavior and make predictions about future price movements.",
      },
      {
        title: "Importance of Technical Analysis in Crypto Trading",
        description:
          "Technical analysis is an essential tool for traders in the crypto market. The crypto market is highly volatile and can be influenced by a variety of factors, including news events, market sentiment, and regulatory changes. Technical analysis can help traders identify trends and patterns in price movements, allowing them to make informed trading decisions.",
      },
      {
        title:
          "Differences Between Fundamental Analysis and Technical Analysis",
        description:
          "As previously mentionned, fundamental analysis involves evaluating the intrinsic value of an asset based on its underlying economic and financial factors. Technical analysis, on the other hand, focuses on the study of market behavior and price movements. While fundamental analysis is useful for evaluating long-term investment opportunities, technical analysis is better suited for short-term trading decisions.",
      },
    ],
  },
  {
    lessonNumber: 2,
    lessonTitle: "Candlestick Chart Analysis",
    topicsCovered: [
      {
        title: "Understanding Candlestick Charts",
        description:
          "Candlestick charts are a popular tool used in technical analysis to track price movements of an asset, including cryptocurrencies. Each candlestick represents a unit of time, such as a day or an hour, and displays the asset's opening, closing, high, and low prices within that time period.",
      },
      {
        title: "Reading Candlestick Patterns",
        description:
          "Candlestick charts display the price movements of an asset over time, with each candlestick representing a specific time period. Some of the commonly used patterns include Bullish Engulfing, Bearish Engulfing, Doji, Hammer, and Shooting Star. The color and shape of the candlestick can indicate the direction and strength of price movements.",
      },
      {
        title: "Identifying Bullish and Bearish Signals",
        description:
          "Candlestick patterns can provide signals about potential price movements, such as bullish or bearish trends. A bullish trend may be indicated by a long green candlestick with little or no upper wick, indicating a strong buying momentum. A bearish trend may be indicated by a long red candlestick with little or no lower wick, indicating a strong selling momentum.",
      },
    ],
  },
  {
    lessonNumber: 3,
    lessonTitle: "Support and Resistance Levels",
    topicsCovered: [
      {
        title: "Identifying Support and Resistance Levels",
        description:
          "Support and resistance levels are identified as price points where an asset's price tends to stop falling and start bouncing back up (support) or stop rising and start dropping back down (resistance). These levels can be identified by analyzing historical price data and identifying points where price movements have reversed.",
      },
      {
        title: "Using Support and Resistance Levels for Trading Decisions",
        description:
          "Traders use support and resistance levels to make trading decisions by buying at or near support levels and selling at or near resistance levels. These levels can also help identify potential entry and exit points for trades. If an asset's price breaks through a resistance level, that level may become a new support level, and vice versa.",
      },
    ],
  },
  {
    lessonNumber: 4,
    lessonTitle: "Indicators and Oscillators",
    topicsCovered: [
      {
        title: "Overview of Technical Indicators and Oscillators",
        description:
          "Technical indicators and oscillators are designed to provide traders with additional information about price movements beyond what can be seen from simple price charts. These tools use mathematical calculations based on historical price data to generate trading signals, which traders can use to make informed decisions about entering or exiting trades.",
      },
      {
        title: "Types of Indicators and Oscillators",
        description:
          "There are many different types of technical indicators and oscillators, each with its own unique way of analyzing price movements. Some common types of indicators and oscillators include moving averages, relative strength index (RSI), stochastic oscillator, and MACD. Moving averages are used to identify trends in price movements, while RSI and stochastic oscillator are used to identify overbought and oversold conditions in the market. MACD is used to identify changes in momentum in the market.",
      },
      {
        title: "Using Indicators and Oscillators to Confirm Trade Signals",
        description:
          "Traders can use indicators and oscillators to confirm trade signals generated by other technical analysis tools, such as candlestick patterns and support and resistance levels. For example, if a trader sees a bullish candlestick pattern forming near a strong support level, they may use an indicator like RSI to confirm that the market is oversold and likely to rebound. Similarly, if a trader sees a bearish candlestick pattern forming near a strong resistance level, they may use an indicator like MACD to confirm that the market is losing momentum and likely to reverse.",
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