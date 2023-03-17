import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "./components/Item/Item"
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import Saludo from './components/Saludo/Saludo';
import Flex from './components/Flex/Flex';
import Carrousel from './components/Carrousel/Carrousel';
import Banner from './components/Banner/Banner';
import React, { useState, useEffect } from 'react';
import Ubicacion from './components/Ubicacion/Ubicacion';



const itemArray = [
  {
    key: 1,
    img: "collar.jpg",
    title: "Collar",
    price: "$2000",
    descrip: "Collar talle S de 2cm de ancho.",
    category: "Collares"
  },
  {
    key: 2,
    img: "correa.jpg",
    title: "Correa",
    price: "$2500",
    descrip: "Correa para perro chico/gato.",
    category: "Correas"
  },
  {
    key: 3,
    img: "pretal.jpg",
    title: "Pretal",
    price: "$3500",
    descrip: "Pretal para perro tamaño mediano",
    category: "Pretales"
  },
  {
    key: 4,
    img: "juguete.jpg",
    title: "Juguete",
    price: "$2000",
    descrip: "Juguete para perros de raza pequeña",
    category: "Juguetes"
  },
  {
    key: 5,
    img: "shampoo.jpg",
    title: "Shampoo",
    price: "$1500",
    descrip: "Shampoo antipulgas para perros",
    category: "Higiene"
  },
  {
    key: 6,
    img: "cepillo.jpg",
    title: "Cepillo",
    price: "$1000",
    descrip: "Cepillo de cerdas suaves para gatos",
    category: "Higiene"
  },
  {
    key: 7,
    img: "ropa1.jpg",
    title: "Vestido",
    price: "$3000",
    descrip: "Vestido para perritas de raza pequeña",
    category: "Ropa"
  },
  {
    key: 8,
    img: "ropa2.jpg",
    title: "Campera",
    price: "$4000",
    descrip: "Campera acolchada para perros de raza grande",
    category: "Ropa"
  },
  {
    key: 9,
    img: "comedero1.jpg",
    title: "Comedero",
    price: "$800",
    descrip: "Comedero de acero inoxidable para perros y gatos",
    category: "Alimentación"
  },
  {
    key: 10,
    img: "bebedero1.jpg",
    title: "Bebedero",
    price: "$1000",
    descrip: "Bebedero de plástico para perros y gatos",
    category: "Alimentación"
  },]

function App() {

  const [items, setItems] = useState([]);

  
  useEffect(() => {
    async function fetchData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(itemArray);
        }, 1000);
      });
    }
  
    async function getData() {
      const response = await fetchData();
      setItems(response);
    }
  
    getData();
  }, []);
  

  return (    
    <header >      
        <Navbar>
          <CartWidget/>
        </Navbar>

        <Saludo gretting="¡Todo para tu mejor amigo!">
        </Saludo>  

        <Carrousel>                               
          <Banner titleBanner="20% OFF" textBanner="En conjuntos de collar y correa" >
          </Banner>                             
        </Carrousel>

        
        <Flex>
          {items.map((item) => (
            <Item key={item.key} item={item} /> 
          ))}
          </Flex>
          
          <Ubicacion/>
          
        
               
        
        
           
  
  </header>
  );
}


export default App;
