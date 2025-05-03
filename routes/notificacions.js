import express from "express";
import fs from "fs";

const router = express.Router();


const readData = () => JSON.parse(fs.readFileSync('./notificacionsDb.json'));


const writeData = (data) => fs.writeFileSync('./notificacionsDb.json', JSON.stringify(data));


router.get('/', (req, res) => {
    const user = { name: "Yujiang" };
    const htmlMessage = `
    <p>Aquest és un text <strong>amb estil</strong> i un enllaç:</p>
    <a href="https://www.example.com">Visita Example</a>
    <p><a href="/home">Volver Pagina Principal</a></p>`;
    const data = readData();
    res.render("notificacions", { user, notificacions: data.notificacions, htmlMessage });
});



// Mostrar detalle de una notificacion
router.get('/:id', (req, res) => {
    const data = readData();
    const notId = parseInt(req.params.id, 10);
    const notificacions = data.notificacions.find(r => r.id === notId);

    if (!notificacions) {
        return res.status(404).send("Notificacion no encontrado");
    }

    const user = { name: "Yujiang" };
    const htmlMessage = `
        <p>Aquest és un text <strong>amb estil</strong> i un enllaç:</p>
        <a href="https://www.example.com">Visita Example</a>
        <p><a href="/notificacions">Volver Listado</a></p>`;

    res.render("detallnotificacions", { notificacions, user, htmlMessage, data }); 
});

// Editar la notificacion
router.get('/:id/editar', (req, res) => {
    const notId = parseInt(req.params.id, 10); 
    const data = readData();
    

    const product = data.notificacions.find(p => p.id === notId);

    if (!product) {
        return res.status(404).send("Producto no encontrado");
    }

    const user = { name: "Yujiang" };
    const htmlMessage = `
        <p>Aquest és un text <strong>amb estil</strong> i un enllaç:</p>
        <a href="https://www.example.com">Visita Example</a>
        <p><a href="/">Volver Pagina Principal</a></p>`;


    res.render("editarnotificacions", { product, user, htmlMessage, data });
});


export default router;