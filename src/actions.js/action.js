import { types } from "../types.js/types"

export const Agregarproducto = (producto) => {
    return{
        type: types.agregar,
        payload: producto
    }
}