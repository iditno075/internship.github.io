import Product from "../Compo/Product";
import Category from "../Compo/Category";
// import Navbar from "../const/Navbar";
import Header from '../const/Header';
import Validation from '../const/Validation';

export default function Home() {
    return (
        <div>
            
        <Header/>
            {/* <Navbar /> */}
            <Category/>
            <Product/>
            <Validation/>
        </div>
    );

}