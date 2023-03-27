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


function App() {

  async function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(itemArray);
      }, 1000);
    });
  }

  return (    
    <header > 
      <BrowserRouter>  

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
          <Route path="/item/:key" element={<ItemDetail items={itemArray} />} />

        </Routes>
        
        <Ubicacion/>  

                                                       

      </BrowserRouter>   
    </header>
  );
}

export default App;
