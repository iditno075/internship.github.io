import '../const/HeaderStyle.css'
import Carti from '../const/grocery-store.png';
import Loci from '../const/location.png';
import ham from '../const/menu-icon.png';
import HeaderLogo from '../const/cloverLOGO.png';
import { Component } from 'react';
import { MenuData } from './MenuData';



class Header extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    };
    render() {
        function leftScroll() {
            const left = document.querySelector(".scroll-image")
            left.scrollBy(200, 0);
        }

        function rightScroll() {
            const right = document.querySelector(".scroll-image")
            right.scrollBy(-200, 0);
        }

        return (

            <div className="Header-container" style={{}}>

                <div className="Logo-veiw">
                    <img className='Logo-style' src={HeaderLogo} alt='' />

                </div>

                <div className="NavbarItems">

                    <a href='./Login.js' target={'_blank'} style={{ width: "100px", color: "black", fontSize: "100%", textDecoration: "none", fontWeight: "bold", display: "inline-block", position: "absolute", top: "10px" }} className='LoginLink'  >LOGIN</a>
                    <a className='CardStyle' href='https://www.vegrecipesofindia.com/wp-content/uploads/2018/03/banana-smoothie-recipe-280x280.jpg' target={'_blank'}> <img src={Carti} alt='' className='iconbtn' /></a>


                    <div className='menuItems' onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={this.state.clicked ? "NavMenu active" : "NavMenu"}>
                        {MenuData.map((item, index) => {
                            return (
                                <li key={index} className="listStyle">
                                    <a href={item.url} className={item.classN} style={{ textDecoration: "none", fontSize: "100%", color: "black", fontWeight: "bold" }}>{item.title}</a>

                                </li>
                            )
                        })}

                    </ul>

                </div>
                <div className='Location'>
                    <img src={Loci} alt='' className='locicon' />
                    <h2 className='loc-txt'>Location</h2>

                </div>

            </div>
        )
    }

}
export default Header;