# Bienvenido a mi primer proyecto en react js

Hola como va? Este es mi proyecto de un e-commerce basado en un pet shop. Use este mismo porque al ser de mi pareja el negocio me puede servir a futuro y a la vez usarlo de aprendizaje. Es un proyecto bastante básico el cual tiene capacidad de recopilar la información de una base de datos de FireStore y renderizarla en mi app. Pueden filtrarse los productos por categorías, abrir en detalle cada producto, agregar al carrito cierta cantidad y en el carrito reflejar lo que fue agregado, tiene las funciones de "Login" y "Register" que aun no están funcionales.
A esto le agregue un simple elemento que es un mapa de google maps.



# Información

Los productos están sacados de firestore, se usaron ciertas props para pasar info y también se uso context para acceder desde cualquier lado a la información deseada. Se aplico algunos hooks como "UseState y UseEffect" para determinadas ocasiones en las que fue necesario,  cada componente tiene su propio archivo de Css para su personalización. También se uso Routes para las url. Algunas cosas de Css están con Bootstrap. 


# Componentes

 A continuación voy a explicar que es lo que hace cada componente:
 

 - Banner: Renderiza de forma harcodeada una promoción.
 - Carrousel: Es el elemento que contiene la publicidad y es renderizado por el banner.
 - CartList: Es el encargado de renderizar la lista de productos agregados al carrito, tiene la capacidad de hacer la suma total de dinero.
 - CartWidget: Es el icono que aparece en el header para luego desplegar el CartList.
 - Item: Es el que se ocupa de renderizar cada item y sus propiedades dentro del ItemListContainer.
 - ItemCounter: Como su nombre indica es el elemento que renderiza el contador de productos, suma resta y agrega al carrito.
 - ItemDetail: Se renderiza al hacer click sobre el Item y lo que hace es mostrar el producto individualmente y a la vez tambien renderiza el ItemCounter para poder agregar al carrito.
 - ItemDetailContainer: Es el contenedor de ItemDetail el cual tiene la función para renderizar el producto correcto.
 - ItemListContainer: Es el encargado de recopilar la info de firestore y renderizar los productos correctos según si se filtro por categoría o bien si queremos ver todos.
 - Login: Muestra un form para ingresar como usuario a la pagina.
 - NavBar: Es el que renderiza el logo, los productos, el Login y Register y también el CartWidget.
 - Ubicación: Es el mapa que aparece en el fondo de la pagina.
 
 
