const ProductReducer = (state, action) => {


    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }
            break;

        case "MY_API_DATA":
            const fetureProducts = action.payload.filter((item) => item.featured === true)
            return {
                ...state,
                isLoading: false,
                isError: false,
                products: action.payload,
                fetureProducts: fetureProducts
            }
            break;

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
            break;


        default:
            return state;
    }
}

export default ProductReducer;