import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import productsRoutes from './routes/products.js';
import recursosRoutes from './routes/recursos.js';
import usuarisRoutes from './routes/usuaris.js';
import notificacionsRoutes from './routes/notificacions.js';
import detallProductes from './routes/detallproductes.js'


const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));//carpeta publica pel css, usamos static para que el server no lo interprete si no el navegador
app.set('view engine','ejs');//Fem servir el motor ejs
app.set('views', './views'); //carpeta on desem els arxius .ejs
app.use('/products', productsRoutes);
app.use('/recursos', recursosRoutes);
app.use('/usuaris', usuarisRoutes);
app.use('/notificacions', notificacionsRoutes);
app.use('/detallproductes', detallProductes);



app.get("/", (req, res) => {
    res.render("home");
});


app.get("/", (req, res) => {
    res.render("home");
});

app.listen(3000, () => {
    console.log("Server listening in port 3000")
});