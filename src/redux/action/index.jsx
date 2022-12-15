//agregar items al carrito
export const addItem = (product) => {
    return{
        type: "ADDITEM",
        payload : product
    }
}

//para borrar del carrito
export const delItem = (product) => {
    return{
        type: "DELITEM",
        payload : product
    }
}