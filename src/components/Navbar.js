import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = (event) => {
        setMenuActive(prevState => !prevState);
        event.stopPropagation();
    };

    const closeMenu = (event) => {
        if(menuActive && !event.target.closest('.navigation')) {
            setMenuActive(false);
        }
    };

    const closeMenu2 = () => {
        setMenuActive(false);
    };

    useEffect(() => {
        document.addEventListener("click", closeMenu);
        return () => {
            document.removeEventListener("click", closeMenu);
        };
    }, [menuActive]);

    return (
        <nav className="navigation">
            <div className="left">
                <li id="logo"><Link to="/"><img id="logo2" src="icons/logo.png" alt="logo"/></Link></li>
                <li id="bname"><Link to="/">Danko Energie Systeme</Link></li>
            </div>
            <div className="h-menu" onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`right ${menuActive ? 'active' : ''}`} id="menu">
                <li className="menu-item" onClick={closeMenu2}><Link to="/">Home</Link></li>
                <li className="menu-item" onClick={closeMenu2}><Link to="/products">Products</Link></li>
            </ul>
        </nav>
    );
};
 
export default Navbar;