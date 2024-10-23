// STORE

import { setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";

export const handleGetProductsToStore = ()=>{
    
    const products = handleGetProductLocalStorage();
    handleRenderList(products);

};

export const handleRenderList = (productosIn) =>{

    const burguers = productosIn.filter((el)=> el.categoria === "Hamburguesas");
    const papas = productosIn.filter((el)=> el.categoria === "Papas");
    const gaseosas = productosIn.filter((el)=> el.categoria === "Gaseosas");

    const renderProductsGroup = (productos, title)=>{

        if(productos.length > 0){
            const productosHTML = productos.map((producto, index) =>{
                return `<div class="containterTargetItem" id="product-${producto.categoria}-${index}">
                
                <div>
                <img src="${producto.imagen}"/>
                <div>
                <h2>${producto.nombre}</h2>
                </div>
                <div class="targetProps">
                    <p><b>Precio: </b> $ ${producto.precio}</p>
                </div>
                </div>

                
                </div>`;
            });

            return `
            <section class="sectionStore">
            <div class="containerTitleSection">
            <h3>${title}</h3>
            </div>
            <div class="containerProductStore">
            ${productosHTML.join("")}
            </div>

            </section>

            `;
        }else{
            return "";
        }

    };

    //renderizar productos

    const appContainer = document.getElementById("storeContainer");

    appContainer.innerHTML= `
    
    ${renderProductsGroup(burguers, "Hamburguesas")}
    ${renderProductsGroup(papas, "Papas")}
    ${renderProductsGroup(gaseosas, "Gaseosas")}

    `;


    const addEvents = (productsIn)=>{
        productsIn.forEach((element, index) => {

            const productContainer = document.getElementById(`product-${element.categoria}-${index}`);

            productContainer.addEventListener("click", ()=>{
                
                setProductoActivo(element);
                openModal();

            });

        });
    };

    addEvents(burguers);
    addEvents(papas);
    addEvents(gaseosas);
};