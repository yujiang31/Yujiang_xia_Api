import express from "express";
import fs from "fs";

const router = express.Router();

// Leer el JSON de recursos
const readDataProducts = () => JSON.parse(fs.readFileSync('./recursosDb.json', 'utf-8'));

// Mostrar lista de recursos
router.get('/', (req, res) => {
    const user = { name: "Yujiang" };
    const htmlMessage = `
    <p>Aquest és un text <strong>amb estil</strong> i un enllaç:</p>
    <a href="https://www.example.com">Visita Example</a>
    <p><a href="/home">Volver Pagina Principal</a></p>`;
    
    const data = readDataProducts(); 
    res.render("recursos", { user, data, htmlMessage });
});

// Mostrar detalle de un recurso
router.get('/:recursos_id', (req, res) => {
    const data = readDataProducts();
    const recursosId = parseInt(req.params.recursos_id, 10);
    const recursos = data.recursos.find(r => r.recursos_id === recursosId);

    if (!recursos) {
        return res.status(404).send("Recurso no encontrado");
    }

    const user = { name: "Yujiang" };
    const htmlMessage = `
        <p>Aquest és un text <strong>amb estil</strong> i un enllaç:</p>
        <a href="https://www.example.com">Visita Example</a>
        <p><a href="/recursos">Volver Listado</a></p>`;

    res.render("detallrecursos", { recursos, user, htmlMessage, data }); 
});


// Editar el recurso
router.get('/:recursos_id/editar', (req, res) => {
    const recursosId = parseInt(req.params.recursos_id, 10); 
    const data = readDataProducts();
    

    const product = data.recursos.find(p => p.recursos_id === recursosId);

    if (!product) {
        return res.status(404).send("Producto no encontrado");
    }

    const user = { name: "Yujiang" };
    const htmlMessage = `
        <p>Aquest és un text <strong>amb estil</strong> i un enllaç:</p>
        <a href="https://www.example.com">Visita Example</a>
        <p><a href="/">Volver Pagina Principal</a></p>`;


    res.render("editarrecursos", { product, user, htmlMessage, data });
});


export default router;
