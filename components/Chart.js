// TradingViewWidget.js

import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function TradingViewWidget(props) {
  const onLoadScriptRef = useRef();

  const symbol = props.coin?.symbol?.toUpperCase();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_acce5") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          width: "100%",
          symbol: `${symbol}USD`,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "3",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_acce5",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container w-full md:w-2/3 z-0">
      <div id="tradingview_acce5" />
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/symbols/SUSHIUSDT/?exchange=BINANCE"
          rel="noreferrer"
          target="_blank"
        >
          <span className="blue-text">Chart</span>
        </a>{" "}
        by TradingView
      </div>
    </div>
  );
}
