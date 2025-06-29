export default function User({
  name,
  image,
  symbol,
  current_price,
  price_change_percentage_24h,
  market_cap_rank,
  high_24h,
  low_24h,
  market_cap,
  ath,
  ath_change_percentage,
  last_updated,
}) {
  const formatNumber = (num) =>
    num >= 1e12
      ? (num / 1e12).toFixed(2) + " T"
      : num >= 1e9
      ? (num / 1e9).toFixed(2) + " B"
      : num.toLocaleString();

  return (
    <div className="card">
      <p className="one">{name} </p>

      <img src={image} alt={name} className="coin-img" />

      <h3>
        <strong>Rank </strong> {market_cap_rank}{" "}
      </h3>

      <p>
        {" "}
        Price: <strong>₹{current_price.toLocaleString()} </strong>
      </p>
      <p
        className={`parapricechange ${
          price_change_percentage_24h >= 0 ? "positive" : "negative"
        }`}
      >
        24h Change: <strong>{price_change_percentage_24h.toFixed(2)}%</strong>
      </p>

<div className="range-bar-container">
  <p className="range-title">📈 24h Price Range</p>

  <div className="range-labels">
    <span>₹{low_24h.toLocaleString()}</span>
    <span>₹{high_24h.toLocaleString()}</span>
  </div>

  <div className="range-bar">
    <div
      className="range-fill"
      style={{
        width: `${(
          ((current_price - low_24h) / (high_24h - low_24h)) *
          100
        ).toFixed(1)}%`,
      }}
    ></div>
  </div>
</div>

      <h4 className="symbol">Symbol: ( {symbol.toUpperCase()} )</h4>
      <p>
        Market Cap: <strong>₹{formatNumber(market_cap)}</strong>
      </p>

      <p>
        ATH:
        <strong>
          {" "}
          ₹{ath} ({ath_change_percentage.toFixed(2)}%)
        </strong>
      </p>

      <p className="updated">
        🕒
        {new Date(last_updated).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        {"   "}
        {new Date(last_updated).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })}
      </p>
    </div>
  );
}
