//requiero express
const express = require('express');
//requiero path para el send o sendfile
const path = require('path')
//invocando Expess
const app = express();
//numero de puesto
const PORT = 3030;


//Indicacion para ir a buscar los archivo staticos para ser visualisado en html 
app.use(express.static('public'));

//ruta de home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});






app.listen(PORT, () =>console.log(`sERVER LISTEN IN PORT ${PORT} http://localhost:${PORT}`));