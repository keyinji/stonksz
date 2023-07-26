import React from "react";
import Roulette from "../../components/Roulette";

const array = [
  {
    lessonNumber: 1,
    lessonTitle: "What is Cryptocurrency Trading?",
    topicsCovered: [
      {
        title: "Definition of crypto trading",
        description:
          "Crypto trading refers to the buying and selling of cryptocurrencies, such as Bitcoin, Ethereum, and Litecoin, on a crypto exchange. These digital assets use cryptographic encryption to secure and verify transactions on a decentralized network called the blockchain.",
      },
      {
        title: "Overview of the Crypto Market",
        description:
          "The crypto market has grown rapidly in recent years and currently has a market capitalization of over $2 trillion. There are thousands of different cryptocurrencies available for trading, each with its own unique features and use cases. The market is open 24/7 and has a global reach, making it an attractive option for traders around the world.",
      },
      {
        title: "Advantages and Disadvantages of Trading Cryptocurrencies",
        description:
          "One of the main advantages of trading cryptocurrencies is the potential for high returns. The crypto market is known for its volatility, which can lead to significant gains if timed correctly. Additionally, cryptocurrencies offer a high level of anonymity and privacy, making them popular among those who value financial privacy. However, trading cryptocurrencies also comes with several risks. The market is highly volatile and can experience large price swings in a short period of time, which can result in substantial losses. Furthermore, the lack of regulation and oversight in the crypto market can make it vulnerable to fraud and hacking, which can also result in significant financial losses.",
      },
    ],
  },
  {
    lessonNumber: 2,
    lessonTitle: "Benefits and Risks of Crypto Trading",
    topicsCovered: [
      {
        title: "Potential for High Returns",
        description:
          "One of the primary benefits of trading cryptocurrencies is the potential for high returns. Cryptocurrencies are known for their high volatility, which can lead to significant gains in a short amount of time. This potential for high returns has attracted many investors to the crypto market, including both retail and institutional investors.",
      },
      {
        title: "High Volatility and Risk of Losses",
        description:
          "While the potential for high returns is certainly appealing, it is important to recognize that the high volatility of cryptocurrencies also means that there is a significant risk of losses. Cryptocurrencies can experience sudden and dramatic price swings, which can result in substantial losses if traders do not manage their risk properly.",
      },
      {
        title: "Risks of Fraud and Hacking in the Crypto Market",
        description:
          "Another risk associated with crypto trading is the potential for fraud and hacking. The decentralized nature of the blockchain makes it difficult to regulate the market, and there have been several instances of fraudulent ICOs (initial coin offerings) and hacking incidents in the past. As a result, traders need to be cautious and conduct thorough research before investing in any cryptocurrency.",
      },
    ],
  },
  {
    lessonNumber: 3,
    lessonTitle: "Understanding Crypto Market Volatility",
    topicsCovered: [
      {
        title: "What Causes Price Fluctuations in the Crypto Market?",
        description:
          "There are several factors that can contribute to price fluctuations in the crypto market, including changes in market sentiment, geopolitical events, and technological developments. Additionally, the supply and demand for a particular cryptocurrency can also have a significant impact on its price.",
      },
      {
        title: "The Impact of News Events and Market Sentiment",
        description:
          "News events, such as regulatory announcements or the release of new technology, can have a significant impact on the crypto market. Positive news can lead to increased demand and a rise in prices, while negative news can lead to a decrease in demand and a drop in prices. Similarly, market sentiment, or the overall mood of investors towards a particular cryptocurrency, can also have a significant impact on its price.",
      },
      {
        title:
          "The Role of Supply and Demand in Determining Cryptocurrency Prices",
        description:
          "The basic principles of supply and demand also play a key role in determining cryptocurrency prices. If demand for a particular cryptocurrency exceeds its supply, the price is likely to rise. Conversely, if supply exceeds demand, the price is likely to fall. Traders need to monitor changes in both supply and demand to make informed trading decisions.",
      },
    ],
  },
];
const Module = () => {
  return (
    <div className="md:w-2/3 mx-auto ">
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
