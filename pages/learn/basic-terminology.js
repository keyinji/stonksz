import React from "react";
import Roulette from '../../components/Roulette'

const cryptoTerms = [
  {
    term: 'All-time high / all-time low',
    definition: 'Refers to the highest or lowest price ever recorded for a given asset.',
  },
  {
    term: 'Altcoins',
    definition: 'Cryptocurrencies other than Bitcoin with their own specific properties and use cases.',
  },
  {
    term: 'Bear market',
    definition: 'A period where market prices are generally trending downwards and public perception is negative.',
  },
  {
    term: 'Blockchain',
    definition: "A decentralized method of storing data that doesn't require a centralized intermediary and allows for duplication and distribution of data across a network of computers.",
  },
  {
    term: 'Block',
    definition: 'A formatted list of transactions that makes up a blockchain and contains a cryptographic reference to the previous block.',
  },
  {
    term: 'Block reward',
    definition: 'Newly minted cryptocurrency that is issued to miners or validators for creating blocks on the blockchain.',
  },
  {
    term: 'Cryptography',
    definition: 'The science of keeping information secure and safe, used to secure blockchains and cryptocurrencies.',
  },
  {
    term: 'dApp',
    definition: 'Decentralized applications that run on top of blockchain networks and use smart contracts to provide trustless tools and services.',
  },
  {
    term: 'DAO',
    definition: 'Decentralized autonomous organizations represented by transparent rules in smart contracts that aim to reduce centralization.',
  },
  {
    term: 'Decentralized',
    definition: 'Technologies that use distributed systems to provide increased security and redundancy and lessen reliance on governing bodies and centralized intermediaries.',
  },
  {
    term: 'DeFi',
    definition: 'Decentralized finance, a growing ecosystem of applications and services that leverage blockchain technology and cryptocurrencies to provide decentralized financial services to end-users.',
  },
  {
    term: 'DYOR',
    definition: 'Do Your Own Research, a warning by cryptocurrency influencers to investors to conduct their own due diligence.',
  },
  {
    term: 'Fiat',
    definition: 'Traditional currencies like the US dollar and the euro, working with them in the blockchain landscape requires trusting a centralized entity.',
  },
  {
    term: 'FOMO',
    definition: 'Fear of missing out, refers to watching tokens you don\'t own go through explosive upward price movements.',
  },
  {
    term: 'FUD',
    definition: 'Fear, uncertainty, and doubt, information that is likely to push people toward a pessimistic view of the market.',
  },
  {
    term: 'Fundamental analysis',
    definition: 'A method of evaluating the value of an asset and estimating its future performance.',
  },
  {
    term: 'Gas',
    definition: 'A fee charged for performing operations on the Ethereum network.',
  },
  {
    term: 'Hash rate',
    definition: 'A unit of processing power that tells how many network-specific calculations are done per second by the Bitcoin network.',
  },
  {
    term: 'HODL',
    definition: 'A term referring to the action of not selling cryptocurrencies, often in opposition to the current market trend.',
  },
  {
    term: 'Ledger',
    definition: 'A database of transactions that is the transaction history of a given cryptocurrency as stored on the blockchain.',
  },
  {
    term: 'Liquidity',
    definition: 'The quality of a cryptocurrency to be freely bought and sold or the amount of cryptocurrencies available to trade within a liquidity pool on a decentralized exchange.',
  },
  {
    term: "Limit order",
    definition: "An order placed on an exchange to buy or sell an asset at a certain price or better."
  },
  {
    term: "Margin trading",
    definition: "A trading method that involves using borrowed funds to leverage positions and maximize profits, while exposing traders to higher risks."
  },
  {
    term: "Mining",
    definition: "The process of creating new units of a cryptocurrency by solving complex mathematical problems."
  },
  {
    term: "Proof of Work",
    definition: "A consensus algorithm that requires miners to solve complex mathematical problems to validate transactions and create new blocks."
  },
  {
    term: "Smart Contract",
    definition: "Self-executing contracts with the terms of the agreement between buyer and seller being directly written into lines of code."
  },
  {
    term: "Stablecoin",
    definition: "A type of cryptocurrency designed to minimize price volatility."
  },
  {
    term: "Wallet",
    definition: "A software program that stores private keys and interacts with the blockchain to enable users to send and receive cryptocurrencies."
  }
]

const Terminology = () => {
  return (
  <div className="md:w-2/3 mx-auto">
    <Roulette />
    {cryptoTerms.map((term, index) => (
      <div key={index} className="items-center py-2">
        <div className="flex items-center font-bold text-xl">{term.term}</div>
        <div className="flex items-center">{term.definition}</div>
      </div>
    ))}
  </div>
  )
};
export default Terminology;
