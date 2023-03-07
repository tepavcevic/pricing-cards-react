export default function Card({
  priceTier,
  cardHeader,
  price,
  numberOfUsers,
  amountOfStorage,
  supportTier,
  buttonText,
}) {
  return (
    <div className={`card ${priceTier === "enterprise" && "card-highlighted"}`}>
      <header
        className={`card-header ${
          priceTier === "enterprise" && "card-header-highlighted"
        }`}
      >
        <h2 className="card-title">{cardHeader}</h2>
      </header>
      <div className="card-body">
        <div className="card-price">
          <h3 className="card-price-title">
            {price}
            <span className="price-title-small text-muted">/mo</span>
          </h3>
        </div>
        <div className="services">
          <ul>
            <li>{numberOfUsers} Users included</li>
            <li>{amountOfStorage} GB of storage</li>
            <li>{supportTier} support</li>
            <li>Help center access</li>
          </ul>
        </div>
        <button
          className={`btn ${priceTier === "free" ? "btn-free" : "btn-paid"}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
