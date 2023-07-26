import React from "react";
import Roulette from '../../components/Roulette'

const array = [
  {
    lessonNumber: 1,
    lessonTitle: "Introduction to Fundamental Analysis",
    topicsCovered: [
      {
        title: "Overview of fundamental analysis",
        description:
          "Fundamental analysis is a method of evaluating an asset's intrinsic value by examining its underlying economic and financial factors. It is commonly used in traditional finance to assess stocks, bonds, and other assets. In the crypto market, fundamental analysis is used to evaluate cryptocurrencies and their potential for growth and investment.",
      },
      {
        title: "Importance of Fundamental Analysis in Crypto Trading",
        description:
          "Fundamental analysis is essential for crypto traders as it helps to identify valuable cryptocurrencies and predict their future price movements. By analyzing the underlying economic and financial factors of a cryptocurrency, traders can make informed decisions about whether to buy, sell or hold a particular cryptocurrency.",
      },
      {
        title:
          "Differences between Technical Analysis and Fundamental Analysis",
        description:
          "While both technical analysis and fundamental analysis are important methods of analyzing the crypto market, they differ in their approaches. Technical analysis focuses on analyzing market data and price movements to identify trends and make predictions about future price movements. In contrast, fundamental analysis focuses on examining the underlying economic and financial factors of a cryptocurrency to determine its intrinsic value and potential for growth.",
      },
    ],
  },
  {
    lessonNumber: 2,
    lessonTitle: "Overview of Blockchain Technology",
    topicsCovered: [
      {
        title: "What is Blockchain Technology?",
        description:
          "Blockchain technology is a decentralized, digital ledger that records transactions in a secure and transparent manner. It is the underlying technology behind cryptocurrencies such as Bitcoin and Ethereum and has revolutionized the way financial transactions are conducted.",
      },
      {
        title: "How Blockchain Technology Works",
        description:
          "A blockchain is a chain of blocks that contains information about transactions. When a transaction occurs, it is verified by a network of nodes that run complex algorithms to ensure its validity. Once the transaction is verified, it is added to a block, which is then added to the chain. Each block in the chain contains a unique code called a hash, which ensures that the information contained within the block cannot be altered or deleted.",
      },
      {
        title: "Importance of Blockchain Technology in the Crypto Market",
        description:
          "Blockchain technology has brought about a decentralized and transparent system of financial transactions that eliminates the need for intermediaries such as banks or payment processors. This has created a secure and efficient means of conducting financial transactions, which is especially relevant in the crypto market. Additionally, the immutability of blockchain technology provides an added layer of security that protects against fraudulent activity.",
      },
    ],
  },
  {
    lessonNumber: 3,
    lessonTitle: "Researching Crypto Projects",
    topicsCovered: [
      {
        title: "Identifying Potential Crypto Projects for Investment",
        description:
          "There are thousands of cryptocurrencies in the market, making it essential for traders to identify potentially valuable projects for investment. This can be done by researching the market and analyzing factors such as the project's popularity, growth potential, and use cases.",
      },
      {
        title: "Evaluating the Team behind the Project",
        description:
          "The team behind a cryptocurrency project plays a critical role in its success. Traders should research the team's experience and qualifications, as well as their past successes and failures. This information can be found on the project's website, social media platforms, or through online searches.",
      },
      {
        title: "Assessing the Project's Whitepaper and Roadmap",
        description:
          "The whitepaper is a crucial document that outlines the project's technical specifications, goals, and vision. Traders should read the whitepaper thoroughly to understand the project's objectives and the technology that powers it. The roadmap provides a timeline of the project's milestones and progress, and traders should assess whether the project is making progress towards achieving its goals.",
      },
      {
        title: "Analyzing the Project's Tokenomics and Use Cases",
        description:
          "Tokenomics refers to the economics of a cryptocurrency project, including its supply and demand dynamics, distribution, and incentives for holders. Traders should assess the tokenomics of a project to determine its potential value and growth prospects. Additionally, traders should analyze the project's use cases, which refer to the practical applications of the cryptocurrency in real-world scenarios.",
      },
    ],
  },
  {
    lessonNumber: 4,
    lessonTitle: "Evaluating Cryptocurrencies Based on Fundamental Analysis",
    topicsCovered: [
      {
        title: "Factors to Consider When Evaluating Cryptocurrencies",
        description:
          "Fundamental analysis involves evaluating cryptocurrencies based on factors such as market capitalization, circulating supply, community and developer support, adoption and partnerships, and regulatory compliance and legal status.",
      },
      {
        title: "Market Capitalization and Circulating Supply",
        description:
          "Market capitalization refers to the total value of a cryptocurrency in circulation. Traders should assess the market capitalization of a cryptocurrency to determine its size and potential for growth. Circulating supply refers to the number of coins or tokens that are currently in circulation. Traders should analyze the circulating supply of a cryptocurrency to understand its scarcity and potential for demand.",
      },
      {
        title: "Community and Developer Support",
        description:
          "Community and developer support are critical factors that can impact the success of a cryptocurrency project. Traders should assess the size and engagement of a project's community, as well as the level of developer activity and updates. This information can be found on the project's website, social media platforms, or through online forums and communities.",
      },
      {
        title: "Adoption and Partnerships",
        description:
          "Adoption refers to the use and acceptance of a cryptocurrency by individuals and businesses. Traders should assess the level of adoption of a cryptocurrency and look for partnerships with established companies or institutions. Partnerships can provide increased credibility and exposure for a cryptocurrency project, potentially leading to increased adoption and demand.",
      },
      {
        title: "Regulatory Compliance and Legal Status",
        description:
          "Regulatory compliance and legal status are critical factors that can impact the success and value of a cryptocurrency project. Traders should assess the regulatory environment in which a project operates and the level of compliance with local laws and regulations. Additionally, traders should be aware of any legal issues or challenges that a project may face in the future.",
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