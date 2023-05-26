import "./checkout.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZvA0_xyvdDB9ACqfG052Z-LuzrM6GIww",
  authDomain: "hocicospetshop-e7bb0.firebaseapp.com",
  projectId: "hocicospetshop-e7bb0",
  storageBucket: "hocicospetshop-e7bb0.appspot.com",
  messagingSenderId: "561028629934",
  appId: "1:561028629934:web:f9af6f53913fb28480f43f"
};


firebase.initializeApp(firebaseConfig);

function Checkout({ items }) {
  const guardarDatosEnFirestore = () => {
    const nombre = document.getElementById('nombreInput').value;
    const email = document.getElementById('emailInput').value;
    const telefono = document.getElementById('telefonoInput').value;

    firebase
      .firestore()
      .collection('usuarios')
      .add({
        nombre,
        email,
        telefono,
        items: items.map((item) => ({
          title: item.title,
          price: item.price,
          count: item.count,
        })),
      })
      .then(() => {
        console.log(nombre, email, telefono, items);
      })
      .catch((error) => {
        console.error('Error al guardar los datos:', error);
      });
  };

  return (
    <div className="container">
      <h3>Finaliza tu compra:</h3>
      <input type="text" id="nombreInput" placeholder="Nombre y Apellido" />
      <input type="email" id="emailInput" placeholder="Email" />
      <input type="number" id="telefonoInput" placeholder="Teléfono" />
      <button onClick={guardarDatosEnFirestore}>Finalizar compra</button>
    </div>
  );
}

export default Checkout;