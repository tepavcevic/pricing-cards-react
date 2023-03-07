import './App.css'
import Card from './components/Card'

function App() {

  return (
    <main className="content">
      <Card 
        cardHeader="Free"
        price="$0"
        amountOfStorage="2"
        numberOfUsers="10"
        supportTier="Email"
        buttonText="Sign up for free"
      />

      <Card 
        cardHeader="Pro"
        price="$15"
        numberOfUsers="20"
        amountOfStorage="10"
        supportTier="Priority email"
        buttonText="Get started"
      />

      <Card 
        cardHeader="Enterprise"
        price="$29"
        numberOfUsers="30"
        amountOfStorage="15"
        supportTier="Phone an email"
        buttonText="Contact us"
        classNameHeader="card-header-highlighted"
        classNameCard="card-highlighted"
      />
    </main>
  )
}

export default App
