import { useState, useEffect } from "react";
import "./App.css";
import { getdata } from "./ApigetData.jsx";
import User from "./components/User.jsx";

function App() {
  const [data, setData] = useState([]);
  const [state, setState] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    getdata().then((d) => setData(d));
  }, []);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <div className="top-bar">
        <div className="top-bar-header">
          <img
            src="/icons/crypto-icon.png"
            alt="Crypto Icon"
            className="crypto-logo"
          />
          <h1 className="title">24h Crypto Market Overview</h1>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="controls">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Search"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
      </div>

      <div className="card-grid">
        {data.length > 0 ? (
          data
            .filter((coin) =>
              coin.name.toLowerCase().includes(state.toLowerCase())
            )
            .map((coin) => (
              <User
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                current_price={coin.current_price}
                price_change_percentage_24h={coin.price_change_percentage_24h}
                market_cap_rank={coin.market_cap_rank}
                high_24h={coin.high_24h}
                low_24h={coin.low_24h}
                market_cap={coin.market_cap}
                ath={coin.ath}
                ath_change_percentage={coin.ath_change_percentage}
                last_updated={coin.last_updated}
              />
            ))
        ) : (
          <p className="loading">Loading data...</p>
        )}
      </div>
    </div>
  );
}

export default App;
