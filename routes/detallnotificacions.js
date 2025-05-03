import express from "express";
import fs from "fs";

const router = express.Router();


const readData = () => JSON.parse(fs.readFileSync('./notificacionsDb.json'));


const writeData = (data) => fs.writeFileSync('./notificacionsDb.json', JSON.stringify(data));


router.get('/:id', (req, res) => {
    const user = { name: "Yujiang" };
    const htmlMessage = `
    <p>Aquest és un text <strong>amb estil</strong> i un enllaç:</p>
    <a href="https://www.example.com">Visita Example</a>
    <p><a href="/">Volver Pagina Principal</a></p>`;
    const data = readData();
    res.render("detallnotificacions", { user, notificacions: data, htmlMessage});
    
});



router.get("/", (req, res) => {
    res.render("home");
});


export default router;