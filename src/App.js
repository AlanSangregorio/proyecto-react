import './App.css';
import Item from "./components/Item/Item"
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import Saludo from './components/Saludo/Saludo';
import Flex from './components/Flex/Flex';

function App() {
  return (    
    <header >      
        <Navbar>
          <CartWidget/>
        </Navbar>

        <Saludo gretting="¡Bienvenido!">
        </Saludo>    
      <Flex>
        <Item img="collar.jpg" title="Collar" price="$2000" descrip="Collar talle S de 2cm de ancho." >                                
        </Item>
        <Item img="correa.jpg" title="Correa" price="$2500" descrip="Correa para perro chico/gato." >          
        </Item>
        <Item img="pretal.jpg" title="Pretal" price="$3500" descrip="Pretal para perro tamaño mediano" >          
        </Item>
        <Item img="juguete.jpg" title="Juguete" price="$2000" descrip="Collar talle S de 2cm de ancho." >          
        </Item>
      </Flex>
                
        
        
           
      
    </header>
  );
}

export default App;
