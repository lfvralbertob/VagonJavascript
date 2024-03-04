const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const app = express();
// Sirve archivos estáticos desde la carpeta 'public'

// Habilita CORS para todos los dominios
app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Ruta al archivo index.html
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
