
import './App.css'
import CryptocurrencyCards from './Components/CryptoCurrency'
import MetaWallet from './Components/MetaWallet'
import SideNavBar from './Components/Navbar'
import PopulationGraph from './Components/PopulationGraph'

function App() {
  
  return (
    <div className='App'>
      <SideNavBar/>
      <div className='heading'>
        <div className='heading-name'>
          <h1>Hello, Aditya</h1>
          <h3>Wellcome to spot Trading</h3>
        </div>
        <button className='heading-button'>Start Trading</button>
      </div>
      <div className='content'>
          <div className='graph'><PopulationGraph/></div>
          <div className='wallet'>
            <MetaWallet />
          </div>
          <div className='currency'>
            <CryptocurrencyCards/>
          </div>
      </div>
    </div>
      
  )
}

export default App
