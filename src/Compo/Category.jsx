import { category } from "../const/rough";


export default function Category() {

    function scrollL() {
        var left = document.querySelector(".App");
        left.scrollBy(50, 0)

    }


    function scrollR() {
        var right = document.querySelector(".App");
        right.scrollBy(-50, 0)

    }

    return (

        <div className="main-scroll-div">
            <div >
                <button className="iconi" style={{top:"18%"}} onClick={() => scrollL(-50)}> <i className="fa fa-angle-left"></i></button>
            </div>

            <div className="App" style={{ backgroundColor: "green", border: "1px", width: "100%", textAlign: "center", overflowY: "auto", display: "flex" }}>



                {category.map((cat) => {
                    return <div className="scroll-image" style={{ borderColor: "black", display: "inline-block", marginLeft: "5px", marginRight: "5px", paddingTop: "5px", paddingBottom: "0px", }}>
                        <img src={cat.imageUrl} alt="error" style={{ width: "55px", borderRadius: "50%", boxSizing: "border-box", margin: "0", border: "5px", padding: "5px", backgroundColor: "white" }}></img>
                        <div style={{ display: "block", width: "140px", fontSize: "1em", alignContent: "center", margin: "0", lineHeight: ".00", height: "fit-content", color: "white" }}><h3>{cat.title}</h3></div>

                    </div>
                })}
            </div>
            <div >
                <button className="iconn" style={{top:"18%"}} onClick={() => scrollR(+50)}> <i className="fa fa-angle-right"></i></button>
            </div>
        </div>
    );
}


