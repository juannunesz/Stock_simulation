import { NegociacaoController } from "./controllers/negociacaoController.js";
const controller = new NegociacaoController();
const from = document.querySelector('.form');
from.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
