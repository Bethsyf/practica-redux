import { types } from "../types.js/types";

const initialState = {
    productos: []
}

export const productosreducer = (state = initialState, action) => {
    switch (action.type) {
        case types.agregar:
            return {
                productos: [...state.productos, action.payload]
            }
    default:
        return state;
        }

}