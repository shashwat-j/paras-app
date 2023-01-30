import logo from './logo.svg';
import './App.css';
import {Header} from './MyComponents/Header.js';
import {Info} from './MyComponents/Info.js';
import {Products} from './MyComponents/Products.js';
import {ContactUs} from './MyComponents/ContactUs.js';
import { useState } from 'react';



function App() {

  const location="https://goo.gl/maps/WMBPxkCqTBsSwpEGA";

  const products = [
    {
      name: "PLYWOOD",
      img: "img/plywood.jpg"
    },
    
    {
      name: "VENEER",
      img: "img/veener.jpg"
    },
    {
      name: "FEVICOL",
      img: "img/fevi.jpg"
    },
    {
      name: "SALWOOD",
      img: "img/salwood.jpg"
    },
    {
      name: "FLUSH DOOR",
      img: "img/flush-doors.jpg"
    },
    
    {
      name: "HDMR BOARD",
      img: "img/hdmr-board.jpg"
    },
    {
      name: "BLOCK BOARD",
      img: "img/blockboard.jpg"
    },
    {
      name: "CHARCOAL SHEET",
      img: "img/charcoal-sheet.jpg"
    },
    {
      name: "LAMINATES",
      img: "img/laminates.jpg"
    },
    {
      name: "WPC BOARD",
      img: "img/wpc-board.jpg"
    },
    {
      name: "PVC BOARD",
      img: "img/pvc-board.jpg"
    },
    {
      name: "CEMENT FIBRE BOARD",
      img: "img/cement-fibre-board.jpg"
    },
    {
      name: "SUNMICA",
      img: "img/sunmica.jpg"
    },
    {
      name: "MOULDINGS",
      img: "img/mouldings.jpg"
    },
  ]

  const [products1, setProducts] = useState(products)

  function productsScroll() {
    var topOfElement = document.querySelector('#products').offsetTop;
    window.scroll({ top: topOfElement, behavior: "smooth" });
    console.log(topOfElement)
}

  return (
    <div className="App">
     <Header location={location} products1={products1} products={products} setProducts1={setProducts}/>
     <Info location={location}/>
     <Products products={products1}/>
     <ContactUs />
    </div>
  );
}

export default App;
