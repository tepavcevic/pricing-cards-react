import './App.css'
import { data } from './data'
import Card from './components/Card'

function App() {

  return (
    <main className="content">
      
      {data.map(data => 
        <Card 
        cardHeader={data.cardHeader}
        price={data.price}
        amountOfStorage={data.amountOfStorage}
        numberOfUsers={data.numberOfUsers}
        supportTier={data.supportTier}
        buttonText={data.buttonText}
        classNameHeader={data.classNameHeader}
        classNameCard={data.classNameCard}
      />)}

    </main>
  )
}

export default App
