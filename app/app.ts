import { NegociacaoController } from "./controllers/negociacaoController.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();

const from = document.querySelector('.form')

from.addEventListener('submit', event => {
    event.preventDefault()
    controller.adiciona()
})

