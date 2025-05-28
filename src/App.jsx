
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import OurCustomer from './components/OurCustomer';
import BuyPage from './components/BuyPage';
function App() {
 
  const [white, setWhite] =useState(false);
  const [buy, setBuy]=useState(false);
  return (
   <div     
       className={` min-h-screen w-full flex flex-col  ${white ? 'bg-white' :' bg-black'} `}
       >


 <Navbar white={white} setWhite={setWhite} buy={buy} setBuy={setBuy}/>


    {buy ? (
        <div className=" md:w-full md:flex md:justify-center">
      <BuyPage white={white} setWhite={setWhite} buy={buy} setBuy={setBuy} />
    </div>
      ) : (
        <>
          <Home white={white} setBuy={setBuy} />
          <OurCustomer white={white} setWhite={setWhite} buy={buy} setBuy={setBuy} />
        </>
      )}
   </div>
  )
}

export default App
