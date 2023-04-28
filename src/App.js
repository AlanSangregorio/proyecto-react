import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import Saludo from './components/Saludo/Saludo';
import Carrousel from './components/Carrousel/Carrousel';
import Banner from './components/Banner/Banner';
import Ubicacion from './components/Ubicacion/Ubicacion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import itemArray from './items';
import { CartProvider } from './context/CartContext';


import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAZvA0_xyvdDB9ACqfG052Z-LuzrM6GIww",
  authDomain: "hocicospetshop-e7bb0.firebaseapp.com",
  projectId: "hocicospetshop-e7bb0",
  storageBucket: "hocicospetshop-e7bb0.appspot.com",
  messagingSenderId: "561028629934",
  appId: "1:561028629934:web:f9af6f53913fb28480f43f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function App() {
  
  async function getData(){
    const productsRef = collection(db, "Products");
    const productsSnap = await getDocs(productsRef);
    const documents = productsSnap.docs;

   const docsData = documents.map((doc) => doc.data());   
   return docsData; 
  }

  async function fetchData() {
    return getData();
  }

  

  return (  
    
   
    <header >
       
      <BrowserRouter>  
      <CartProvider>  

        <Navbar>          
          <CartWidget/>
        </Navbar>

        <Carrousel>             
          <Banner titleBanner="20% OFF" textBanner="En conjuntos de collar y correa" ></Banner>                             
        </Carrousel>

        <Saludo gretting="¡Todo para tu mejor amigo!"></Saludo>  

        <Routes>
          <Route path='/' element={<ItemListContainer fetchData={fetchData} />} />
          <Route path="/login" element={<Login/>}/>          
          <Route path="/category/:category" element={<ItemListContainer fetchData={fetchData} />} />
          <Route path="/item/:key" element={<ItemDetail fetchData={fetchData} />} />          
        </Routes>
        
        <Ubicacion/>  

                                                       
        </CartProvider>
      </BrowserRouter>   
    </header>
  );
}

export default App;
