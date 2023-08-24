import { useProductContext } from "../context/productContext";
import Product from "../Product";

const FetureProducts = () => {
    
    const {isLoading,fetureProducts} = useProductContext();
    console.log(fetureProducts);

if(isLoading){
    return <div>......Loading</div>
}
  return (
    <div className="container">
        <div className="row mt-5">
        <h1 className="mb-2">Feture Products</h1>
            {
                fetureProducts.map((product)=>{
                    return (
                        <div className="col-4" key={product.id}>
                            <Product  {...product} />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default FetureProducts