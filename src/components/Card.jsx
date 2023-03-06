export default function Card(props) {
    return(
        <div className="card">
            <header className="card-header">
                <h2 className="card-title">{props.cardHeader}</h2>
            </header>
            <div className="card-body">
                <div className="card-price">
                    <h3 className="card-price-title">{props.price}
                    <span className="price-title-small text-muted">/mo</span></h3>
                </div>
                <div className="services">
                    <ul>
                        <li>{props.numberOfUsers} Users included</li>
                        <li>{props.amountOfStorage} GB of storage</li>
                        <li>{props.supportTier} support</li>
                        <li>Help center access</li>
                    </ul>
                </div>
                {props.buttonText === "Sign up for free" ? 
                <button className="btn btn-free">{props.buttonText}</button> :
                <button className="btn btn-paid">{props.buttonText}</button>
                 }
            </div>
        </div>
    )
}