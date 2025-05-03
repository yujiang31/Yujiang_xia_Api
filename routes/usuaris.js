import express from "express";
import fs from "fs";

const router = express.Router();


const readData = () => JSON.parse(fs.readFileSync('./usuarisDb.json'));


const writeData = (data) => fs.writeFileSync('./usuarisDb.json', JSON.stringify(data));


router.get('/', (req, res) => {
    const user = { name: "Yujiang" };
    const htmlMessage = `
    <p>Aquest és un text <strong>amb estil</strong> i un enllaç:</p>
    <a href="https://www.example.com">Visita Example</a>
    <p><a href="/home">Volver Pagina Principal</a></p>`;
    const data = readData();
    res.render("usuaris", { user, usuaris: data.usuaris, htmlMessage });
});


// Mostrar detalle de un recurso
router.get('/:id', (req, res) => {
    const data = readData();
    const usuarisId = parseInt(req.params.id, 10);
    const usuaris = data.usuaris.find(r => r.id === usuarisId);

    if (!usuaris) {
        return res.status(404).send("Recurso no encontrado");
    }

    const user = { name: "Yujiang" };
    const htmlMessage = `
        <p>Aquest és un text <strong>amb estil</strong> i un enllaç:</p>
        <a href="https://www.example.com">Visita Example</a>
        <p><a href="/usuaris">Volver Listado</a></p>`;

    res.render("detallusuaris", { usuaris, user, htmlMessage, data }); 
});

// Editar el usuario
router.get('/:id/editar', (req, res) => {
    const usuarisId = parseInt(req.params.id, 10); 
    const data = readData();
    

    const product = data.usuaris.find(p => p.id === usuarisId);

    if (!product) {
        return res.status(404).send("Producto no encontrado");
    }

    const user = { name: "Yujiang" };
    const htmlMessage = `
        <p>Aquest és un text <strong>amb estil</strong> i un enllaç:</p>
        <a href="https://www.example.com">Visita Example</a>
        <p><a href="/">Volver Pagina Principal</a></p>`;


    res.render("editarusuaris", { product, user, htmlMessage, data });
});




export default router;