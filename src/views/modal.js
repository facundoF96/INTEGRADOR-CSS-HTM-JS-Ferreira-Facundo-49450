import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct, handleSaveOrModifyElements } from "../services/products";

const cancelButton = document.getElementById("cancelButton");

cancelButton.addEventListener("click", ()=>{
    closeModal();
});

export const openModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex";
    
    if(productoActivo){
        const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categoria = document.getElementById("categoria");

        nombre.value = productoActivo.nombre;
        precio.value = productoActivo.precio;
        imagen.value = productoActivo.imagen;
        categoria.value = productoActivo.categoria;
    }
};

export const closeModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
    setProductoActivo(null);
    resetModal();
    console.log("estoy funcionando");
};

const resetModal = ()=>{
    const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categoria = document.getElementById("categoria");

    nombre.value = ""
    precio.value = 0
    imagen.value = ""
    categoria.value = "Seleccione una categoria"
}

const acceptButton = document.getElementById("acceptButton");

acceptButton.addEventListener("click", ()=>{
    console.log("Botón Aceptar clickeado");
    handleSaveOrModifyElements();
});

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", ()=>{
    handleButtonDelete();
})
const handleButtonDelete = ()=>{
    handleDeleteProduct();
};