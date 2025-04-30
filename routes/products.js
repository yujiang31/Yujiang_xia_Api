import express from "express";
import fs from "fs";

const router = express.Router();


const readData = () => JSON.parse(fs.readFileSync('./productsDb.json'));


const writeData = (data) => fs.writeFileSync('./productsDb.json', JSON.stringify(data));


router.get('/', (req, res) => {
    const user = { name: "Yujiang" };
    const htmlMessage = `
    <p>Aquest és un text <strong>amb estil</strong> i un enllaç:</p>
    <a href="https://www.example.com">Visita Example</a>
    <p><a href="/">Volver Pagina Principal</a></p>`;
    const data = readData();
    res.render("products", { user, products: data.products, htmlMessage });
    
});


const readProducts = () => {
    try {
        const data = fs.readFileSync("./products.json");
        return JSON.parse(data);
    } catch (error) {
        console.error(error);
    }
};


router.get("/", (req, res) => {
    res.render("home");
});


export default router;