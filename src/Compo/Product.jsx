import { product } from "../const/rough";
import { ReactDOM } from "react";






export default function Product() {

    return (
        <div className="App"  >
            {product.map((pro) => {
                return <div className="container" >
                    <div className="product_content" >
                        <img src={pro.imageUrl} style={{ borderRadius: "100px", padding: "10px", width: "120px", height: "120px" }} alt="error"  ></img>

                        <div className="c" style={{ display: "inline-block", float: "right", marginLeft: "15px", marginTop: "0px" }}><h4>{pro.title}<br />{pro.price}<br />{<button style={{ backgroundColor: "grey" }} >ADD</button>}</h4> </div>
                    </div>




                </div>
            }



            )}
        </div>

    )
}