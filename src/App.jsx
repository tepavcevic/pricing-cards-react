import './App.css'
import { data } from './data'
import Card from './components/Card'

function App() {

  return (
    <main className="content">
      
      {data.map(data => 
        <Card
        priceTier={data.priceTier}
        cardHeader={data.cardHeader}
        price={data.price}
        amountOfStorage={data.amountOfStorage}
        numberOfUsers={data.numberOfUsers}
        supportTier={data.supportTier}
        buttonText={data.buttonText}
      />)}

    </main>
  )
}

export default App
