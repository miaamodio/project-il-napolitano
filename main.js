//============================================================
// main.js: Importa los módulos y los conecta entre sí. 
//============================================================
import { obtenerProductos } from './js/api.js'
import { abrirModal, renderizarGaleria } from './js/ui.js'
// Lee los datos del JSON y los pega en la Interfaz.
function cargarProductos() {
    const data = await obtenerProductos();
    renderizarGaleria(data);
}
document.addEventListener('DOMContentLoaded', cargarProductos);