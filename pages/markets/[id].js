import CoinInfo from "../../components/CoinInfo";
import Chart from "../../components/Chart";
import Buybutton from "../../components/Buybutton";
import React from "react";
import SymbolInfo from "../../components/SymbolInfo";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Coin = (props) => {
  const data = props.result;
  const router = useRouter();
  useEffect(() => {
    const loggedIn = localStorage.getItem("token");
    if (!loggedIn) {
      router.push("/login");
    }
  });
  return (
    <div>
      <SymbolInfo coin={data.data} />{" "}
      <div className="items-center flex justify-center">
        <Chart coin={data.data} />
      </div>
      <CoinInfo coin={data.data} />
      <div className="flex md:w-2/3 justify-between m-auto">
        <div className="w-full">
          <Buybutton coin={data.data} />
        </div>
      </div>
    </div>
  );
};

export default Coin;

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://api.coincap.io/v2/assets/${id}`);

  const result = await res.json();

  return {
    props: {
      result,
    },
  };
};
