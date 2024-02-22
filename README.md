# Toolbox
 - Las dos aplicaciones se desarrollaron usando node 14 como se pidio, tanto el front como el back tienen testing.
 - Se creo el EP opcional de retornar la lista de archivos.
 - Se añadio el filtro de fileName tanto al back como al front, en el front esta el input que filtra, probar escribiendo con "test2.csv"
 - El input tiene un timeout de 1 sec para no hacer una llamada al back cada vez que cambie el texto

 - Idealmente el codigo del frontend se pudo separar, normalmente tengo una carpeta de Components con los componentes reusables, Routes para las rutas, Views para los Componentes de React que se usan para los layouts, pero en este caso solo se queria una tabla que mostrara los datos del backend

- Se utilizo Axios con react query para las llamadas al backend, en el test unitario de App.js se muestra como se mockea la llamada de Axios.
# Running the app
Abrir dos terminales, uno en "frontend" y otro en "backend" y correr los siguientes comandos:
```
npm i
npm start
```
