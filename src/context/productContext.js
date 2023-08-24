import axios from "axios";
import { createContext, useContext,useEffect ,useReducer} from "react";
import reducer from '../reducer/productReducer';
const Appcontext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    fetureProducts:[],

}

const AppProvider = ({ children }) => {

    const [state,dispatch] = useReducer(reducer,initialState);

    const getProducts = async (url)=>{
        dispatch({type:"SET_LOADING"})
       try {
        const res = await axios.get(url);
        const product = await res.data;
        dispatch({type:"MY_API_DATA",payload:product})
       } catch (error) {
           dispatch({type:"API_ERROR"})
       }
    }

    useEffect(()=>{
        getProducts(API);
    },[])

  return (
    <Appcontext.Provider value={{ ...state}}>
      {children}
    </Appcontext.Provider>
  );
};

// coustome Hooks
const useProductContext = () => {
  return useContext(Appcontext);
};

export { AppProvider, Appcontext, useProductContext };
