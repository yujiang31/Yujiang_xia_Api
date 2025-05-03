import express from "express";
import fs from "fs";

const router = express.Router();


const readData = () => JSON.parse(fs.readFileSync('./recursosDb.json'));


const writeData = (data) => fs.writeFileSync('./recursosDb.json', JSON.stringify(data));


router.get('/:recursos_id', (req, res) => {
    const user = { name: "Yujiang" };
    const htmlMessage = `
    <p>Aquest és un text <strong>amb estil</strong> i un enllaç:</p>
    <a href="https://www.example.com">Visita Example</a>
    <p><a href="/">Volver Pagina Principal</a></p>`;
    const data = readData();
    res.render("detallrecursos", { user, recursos: data, htmlMessage});
    
});





router.get("/", (req, res) => {
    res.render("home");
});


export default router;