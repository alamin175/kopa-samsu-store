import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Card from './Component/Card/Card'
import Modal from 'react-modal';
import Cart from './Component/Cart/Cart'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '100%'
  },
};

Modal.setAppElement('#root');


function App() {
  const [guns, setGuns] = useState([])
  const [cart, setCart] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);
  // console.log(guns)

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

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
  <Navbar cart={cart} openModal={openModal} ></Navbar>
  <div className='card-container'>
  {
    guns.map(gun => <Card key={gun.id} gun ={gun} handleAddToCart={handleAddToCart} ></Card>)
  }
  </div>
  <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
      <div className='cart-details-modal'>
      {
        cart.map(item => <Cart key={item.id} item={item} ></Cart>)
      }
    </div>
</Modal>
</div>
  )
}

export default App
