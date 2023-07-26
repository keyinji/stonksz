import CoinInfo from "../../components/CoinInfo";
import Chart from "../../components/Chart";
import Buybutton from "../../components/Buybutton";
import React from "react";
import SymbolInfo from "../../components/SymbolInfo";
import Sellbutton from "../../components/Sellbutton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const Coin = (props) => {
  const [data, setData] = useState();
  const [data2, setData2] = useState();

  const router = useRouter();
  useEffect(() => {
    const loggedIn = localStorage.getItem("token");
    if (!loggedIn) {
      router.push("/login");
    }
  });


  const idMongo = props.id

  const url2 = "/api/find";
  useEffect(() => {
    axios
      .get(url2, {
        headers: {
          "x-access-token": idMongo,
        },
      })
      .then((response) => {
        setData(response.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const url = `https://api.coincap.io/v2/assets/${data}`
  console.log(url)
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData2(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  if(!data2) return null
  if(!data) return null


  console.log(data2)
 

  return (
    <div>
      <SymbolInfo coin={data2.data} />
      <div className="items-center flex justify-center">
      <Chart coin={data2.data} />
      </div>
      <CoinInfo coin={data2.data} />
      <div className="flex md:w-2/3 justify-between m-auto">
        <div className="w-1/2">
          <Buybutton coin={data2.data} />
        </div>
        <div className="w-1/2">
          <Sellbutton coin={data2.data.id} />
        </div>
      </div>
    </div>
  );
};

export default Coin;


export const getServerSideProps = async ({query}) => {
  const id  = query.id;
  return {
    props: {
      id,
    },
  };
};