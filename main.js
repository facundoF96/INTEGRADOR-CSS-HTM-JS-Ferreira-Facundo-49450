import { setInLocalStorage } from "./src/persistence/localStorage";
import { renderCategories } from "./src/services/categories";
import { handlSearchProductByName } from "./src/services/seachBar";
import { openModal } from "./src/views/modal";
import { handleGetProductsToStore } from "./src/views/store";
import "./style.css"

//APLICACION

export let categoriaActive = null;

export const setCategoriaActiva = (categoriaIn)=>{
    categoriaActive = categoriaIn;
};

export let productoActivo = null;

export const setProductoActivo = (productoIn)=>{
    productoActivo = productoIn;
};

handleGetProductsToStore();

renderCategories();

//HEADER

const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener("click", ()=>{
openModal();
});

//buttonSeach

const buttonSearch = document.getElementById("buttonSearch");

buttonSearch.addEventListener("click", ()=>{
    console.log("Botón de búsqueda clickeado");
    handlSearchProductByName();
});