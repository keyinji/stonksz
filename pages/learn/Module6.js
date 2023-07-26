import Roulette from '../../components/Roulette'
import React from 'react'

const array = [
  {
    lessonNumber: 1,
    lessonTitle: "Understanding the Risks of Investing in Cryptocurrency",
    topicsCovered: [
      {
        title: "Volatility of Cryptocurrency Prices",
        description:
          "One of the most significant risks associated with investing in cryptocurrency is the high volatility of prices. Cryptocurrencies are known for their price fluctuations, which can occur rapidly and dramatically within a short period of time. Factors that can cause price volatility in the cryptocurrency market include market sentiment, supply and demand, and regulatory developments.",
      },
      {
        title: "Regulatory Risks",
        description:
          "Cryptocurrencies are not regulated by governments or financial institutions, which means that investors face unique regulatory risks. Governments may impose restrictions on cryptocurrency trading, mining, or other activities, which can negatively impact the value of cryptocurrencies. Additionally, because cryptocurrencies are not backed by any government or central authority, there may be little legal recourse if something goes wrong.",
      },
      {
        title: "Liquidity Risks",
        description:
          "Liquidity risk is the risk that an asset cannot be sold quickly enough to prevent a loss. Liquidity risks can be higher in the cryptocurrency market than in traditional financial markets because the market is still relatively new, and not as well established. This means that it may be more difficult to sell large amounts of cryptocurrency quickly, especially during times of market stress or high volatility. Additionally, some cryptocurrency exchanges may have low liquidity, making it difficult to buy or sell cryptocurrencies at certain times.",
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