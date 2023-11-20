import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Card from './Component/Card/Card'

function App() {
  const [guns, setGuns] = useState([])
  const [cart, setCart] = useState([])
  // console.log(guns)

  const handleAddToCart = (gun) =>{
    const newCart = [...cart, gun]
    setCart(newCart)
    console.log(newCart)
  } 

  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setGuns(data))
  },[])
return (
<div>
  <Navbar cart={cart} ></Navbar>
    <div>
      {
        cart.map(item => <h2 key={item.id}>{item.name} </h2>)
      }
    </div>
  <div className='card-container'>
  {
    guns.map(gun => <Card key={gun.id} gun ={gun} handleAddToCart={handleAddToCart} ></Card>)
  }
  </div>
</div>
  )
}

export default App
