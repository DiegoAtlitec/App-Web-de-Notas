const express = require('express');
const path = require('path');

const app = express();
const port = 5500;

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Servidor Frontend corriendo en http://localhost:${port}`);
});
