export default function Card({ priceTier, cardHeader, price, numberOfUsers, amountOfStorage, supportTier, buttonText }) {
    return(
        <div>
            {priceTier !== "enterprise" ?
            <div className="card">
            {
                priceTier !== "enterprise" ? 
                <header className="card-header">
                    <h2 className="card-title">{cardHeader}</h2>
                </header> :
                <header className="card-header card-header-highlighted">
                <h2 className="card-title">{cardHeader}</h2>
                </header>
            }
            <div className="card-body">
                <div className="card-price">
                    <h3 className="card-price-title">{price}
                    <span className="price-title-small text-muted">/mo</span></h3>
                </div>
                <div className="services">
                    <ul>
                        <li>{numberOfUsers} Users included</li>
                        <li>{amountOfStorage} GB of storage</li>
                        <li>{supportTier} support</li>
                        <li>Help center access</li>
                    </ul>
                </div>
                {buttonText === "Sign up for free" ? 
                <button className="btn btn-free">{buttonText}</button> :
                <button className="btn btn-paid">{buttonText}</button>
                 }
            </div>
        </div> :
        <div className="card card-highlighted">
        {
            priceTier !== "enterprise" ? 
            <header className="card-header">
                <h2 className="card-title">{cardHeader}</h2>
            </header> :
            <header className="card-header card-header-highlighted">
            <h2 className="card-title">{cardHeader}</h2>
            </header>
        }
        <div className="card-body">
            <div className="card-price">
                <h3 className="card-price-title">{price}
                <span className="price-title-small text-muted">/mo</span></h3>
            </div>
            <div className="services">
                <ul>
                    <li>{numberOfUsers} Users included</li>
                    <li>{amountOfStorage} GB of storage</li>
                    <li>{supportTier} support</li>
                    <li>Help center access</li>
                </ul>
            </div>
            {buttonText === "Sign up for free" ? 
            <button className="btn btn-free">{buttonText}</button> :
            <button className="btn btn-paid">{buttonText}</button>
             }
        </div>
    </div>
        }
        </div>
    )
}