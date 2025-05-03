import express from "express";
import fs from "fs";

const router = express.Router();


const readData = () => JSON.parse(fs.readFileSync('./productsDb.json'));


router.get('/', (req, res) => {
    const user = { name: "Yujiang" };
    const htmlMessage = `
    <p>Aquest és un text <strong>amb estil</strong> i un enllaç:</p>
    <a href="https://www.example.com">Visita Example</a>
    <p><a href="/home">Volver Pagina Principal</a></p>`;
    const data = readData();
    res.render("products", { user, products: data.products, htmlMessage });
    
});

// Mostrar detalle de un producto
router.get('/:id', (req, res) => {
    const data = readData();
    const productId = parseInt(req.params.id, 10);
    const products = data.products.find(r => r.id === productId);

    if (!products) {
        return res.status(404).send("Producto no encontrado");
    }

    const user = { name: "Yujiang" };
    const htmlMessage = `
        <p>Aquest és un text <strong>amb estil</strong> i un enllaç:</p>
        <a href="https://www.example.com">Visita Example</a>
        <p><a href="/products">Volver Listado</a></p>`;

    res.render("detallproductes", { products, user, htmlMessage, data }); 
});



// Editar el recurso
router.get('/:id/editar', (req, res) => {
    const productId = parseInt(req.params.id, 10); 
    const data = readData();
    

    const product = data.products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).send("Producto no encontrado");
    }

    const user = { name: "Yujiang" };
    const htmlMessage = `
        <p>Aquest és un text <strong>amb estil</strong> i un enllaç:</p>
        <a href="https://www.example.com">Visita Example</a>
        <p><a href="/products">Volver Pagina Principal</a></p>`;


    res.render("editarproducte", { product, user, htmlMessage, data });
});



export default router;