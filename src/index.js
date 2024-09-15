import express from 'express';
import { engine } from 'express-handlebars';
import __dirname from './utils.js';
import path from 'path';
import fs from 'fs';
import HandlebarsHelpers from './helpers.js'; // Importa el helper

const app = express();
const PORT = 4000;

// Middlewares para manejar JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de Handlebars
const hbs = engine({
    helpers: HandlebarsHelpers.helpers, // Agrega los helpers aquí
});

app.engine('handlebars', hbs);
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, 'views'));

// Servir archivos estáticos
app.use("/", express.static(path.join(__dirname, 'public')));

// Ruta GET para renderizar la vista home con JSON local
app.get('/', (req, res) => {
    // Leer el archivo JSON
    const jsonPath = path.resolve(__dirname, 'data', 'test.json');
    try {
        const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

        // Renderizar la vista 'home' y pasarle el JSON como contexto
        res.render('home', {
            breadcrumbs: jsonData.breadcrumbs,
            pageLead: jsonData.pageLead,
            navigation: jsonData.navigation,
            logo: jsonData.logo,
            hotTopics: jsonData.hotTopics,
            social: jsonData.social,
            lead: jsonData.lead,
            headline: jsonData.headline,
            subHeadline: jsonData.subHeadline,
            audioPlayer: jsonData.audioPlayer,
            actions: jsonData.actions
        });

    } catch (error) {
        res.status(500).send('Error al leer el archivo JSON');
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
