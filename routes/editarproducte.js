import express from "express";
import fs from "fs";

const router = express.Router();

const readData = () => JSON.parse(fs.readFileSync('./productsDb.json'));

router.get('/:nombre/editar', (req, res) => {
    const productName = req.params.nombre; 
    const data = readData();
    
    const product = data.products.find(p => p.nombre === productName);

    if (!product) {
        return res.status(404).send("Producto no encontrado");
    }

    res.render("editarproducto", { product });
});


export default router;
