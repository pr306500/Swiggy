import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const cartItems = useSelector((store)=> store.cart.items);
  
    return (
        <div className='flex justify-between bg-pink-50'>
            <div className='logo-container'>
                <img 
                className="m-10 w-20" 
                src={LOGO_URL}
                />
            </div>
            <div className="flex items-center"> 
              <ul className="flex mr-10 gap-9">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li className="px-4 font-bold text-xl"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
              </ul>
            </div>
        </div>
    )
}

export default Header;