import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useSearchParams } from "react-router-dom";

const Cart = ()=>{
    
    const { pathname } = useSearchParams();

    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart= ()=>{
        dispatch(clearCart());    
    }

    return (
        <div className="text-center m-10 p-10">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button 
                 className="p-2 m-2 bg-black text-white rounded-lg"
                 onClick={handleClearCart}
                 >
                    Clear Cart
                 </button>
                <ItemList data={cartItems} showIcon={false}/>
            </div>
        </div>
    )
}

export default Cart;