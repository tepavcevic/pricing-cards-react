export default function Card(props) {
    return(
        <div className="card">
            <header className="card-header">
                <h2>{props.cardHeader}</h2>
            </header>
            <div className="card-body">
                <div className="card-price">
                    <h3>{props.price}<span className="text-muted">/mo</span></h3>
                </div>
                <div className="services">
                    <ul>
                        <li>{props.numberOfUsers} Users included</li>
                        <li>{props.amountOfStorage} GB of storage</li>
                        <li>{props.supportTier} support</li>
                        <li>Help center access</li>
                    </ul>
                </div>
                <button className="btn">{props.buttonText}</button>
            </div>
        </div>
    )
}