const express = require('express');
const app = express();
const port = 9999;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const { titulo, descripcion, categoria, prioridad } = req.query;

    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nota Guardada</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #fceff1; color: #333; text-align: center; padding: 20px; }
                .container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1); max-width: 500px; margin: auto; }
                h2 { color: #ff6b81; }
                p { text-align: left; }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Información de la Nota</h2>
                <p><strong>Título:</strong> ${titulo || 'No especificado'}</p>
                <p><strong>Descripción:</strong> ${descripcion || 'No especificado'}</p>
                <p><strong>Categoría:</strong> ${categoria || 'No especificado'}</p>
                <p><strong>Prioridad:</strong> ${prioridad || 'No especificado'}</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Servidor Backend corriendo en http://localhost:${port}`);
});
