//PRODUCTO
import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";

export const handleSaveOrModifyElements = ()=>{
    const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categoria = document.getElementById("categoria").value;

    let object = null;

    if(productoActivo){
       
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categoria,
        }

    }else{

        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria,
        };

    }

    setInLocalStorage(object);

    console.log(object);
    handleGetProductsToStore();
    closeModal();
};


//eliminar elemento

export const handleDeleteProduct = ()=>{

    Swal.fire({
        title: "¿Seguro que quieres eliminar este producto?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Eliminar",
        denyButtonText: `No eliminar`
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();

            const result = products.filter((el) => el.id !== productoActivo.id);
        
            localStorage.setItem("products", JSON.stringify(result));
        
            const newProducts = handleGetProductLocalStorage();
        
            handleRenderList(newProducts);
        
            closeModal();
          Swal.fire("Eliminado!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("No se elimino!", "", "info");
        }
      });

};