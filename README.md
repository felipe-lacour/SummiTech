**PARA LA UTILIZACION DE LA APLICACION SE PUEDE GENERAR UN USUARIO O UTILIZAR EL USUARIO DE PRUEBA:**
email: `prueba@email.com`

password: `coder.prueba`

Este proyecto fue iniciado con [Create React App](https://github.com/facebook/create-react-app).

# Informacion del Proyecto
Este proyecto fue realizado a lo largo de la cursada del curso de React JS de CoderHouse. El mismo, tiene las siguientes implementaciones:

### `<LogIn/>`
Se implemento el servicio de *auth/login* de firebase para la autenticacion del usuario. Este se hace mediante el metodo *email/password* y cuenta con persistencia local del navegador.

### Visualizacion de Productos Disponibles
Los mismos son renderizados dentro de la vista `<ItemListContainer/>`, la cual en si tiene a los componentes `<ItemList/>` y `<Item/>`

### Vista de carrito
Junto con la posibilidad de agregar items al carrito, mas de eso en la seccion de detalle del producto, clickeando en el `<CartWidget/>` del `<NavBar/>` se redireccionara al usuario al route **/cart**

### Checkout
Al clickear boton de checkout en la ruta **/cart** se abrira el componente `<Checkout/>` donde llenando los formularios se armará la orden de compra la cual es enviada a firebase. El email de los formularios es el email ingresado para la autenticacion de firebase.

### Detail de los Items
Al clickear un ítem del listado se navega a la ruta `/item/:id`, donde `id` es el `id` del item (generado por firebase), y se logra ver la descripción del producto (
foto, precio, selector de cantidad, etc).\
Es aqui donde figura el componente `<AddItemButton/>`, el cual en su clickeo agrega la cantidad seleccionada de items al carrito.


# Codigos Disponibles

En el directorio del proyecto puedeses correr:

### `npm start`

Corre la app en modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.

La pagina se va a actualizar a medida que hagas cambios.\
Tambien podras ver cualquier error lint en la consola.

### `npm test`
Inicia el corredor de pruebas en el modo interactivo de observación.\
Consulta la sección sobre [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para obtener más información.

### `npm run build`
Construye la aplicación para producción en la carpeta `build`.\
Agrupa correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hashes.\
¡Tu aplicación está lista para implementarse!

Consulta la sección sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para obtener más información.

### `npm run eject`
**Nota: esta es una operación irreversible. ¡Una vez que hagas `eject`, no podrás revertirlo!**

Si no estás satisfecho con la herramienta de compilación y las opciones de configuración, puedes hacer `eject` en cualquier momento. Este comando eliminará la única dependencia de compilación de tu proyecto.

En cambio, copiará todos los archivos de configuración y las dependencias transitivas (Webpack, Babel, ESLint, etc.) directamente en tu proyecto para que tengas control total sobre ellos. Todos los comandos excepto `eject` seguirán funcionando, pero apuntarán a los scripts copiados para que puedas modificarlos. A partir de este punto, estás por tu cuenta.

No es necesario utilizar `eject`. El conjunto de funciones seleccionadas es adecuado para implementaciones pequeñas y medianas, y no debes sentirte obligado a utilizar esta función. Sin embargo, entendemos que esta herramienta no sería útil si no pudieras personalizarla cuando estés listo.

### Más información
Puedes obtener más información en [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulta la [React documentation](https://reactjs.org/).

### Fragmentación de código
Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Análisis del tamaño del paquete
Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Creación de una Progressive Web App (PWA)
Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Configuración avanzada
Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment
Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### Fallo al minimizar `npm run build`
Esta sección se ha movido aquí: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
