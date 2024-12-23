import { LuUtensilsCrossed } from "react-icons/lu";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const cartItems= useSelector((state)=> state.cartSlice.cart);
  const totalItems = cartItems.reduce((acc, item)=>{
      return acc+item.qty;
  },0)

  const totalPrice = cartItems.reduce((acc, item)=> acc + item.qty * item.price , 0)
  const [activeCart, setActiveCart] = useState(false);
  return (
    <>
    
    <div className={`fixed top-0 right-0 bg-white h-full w-[100%] sm:w-[40%] lg:w-[30%] p-5 ${ activeCart ? "translate-x-0" : "translate-x-full"} z-20`}>
       <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-xl">My Orders</h1>
        <LuUtensilsCrossed  className="text-xl cursor-pointer hover:text-red-600"onClick={()=> setActiveCart(!activeCart)} />
       </div>
       {
        cartItems.length > 0 ?
          cartItems.map((item)=> <CartItem key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} qty={item.qty}/>) : <h1 className="text-lg">Your cart is empty</h1>
       }
       
        <div className="absolute bottom-6 w-[90%]">
            <h3>Items :{totalItems} </h3>
            <h3>Total Amount : {totalPrice}</h3>
            <hr className="w-[90%] my-3"/>
            <button className="bg-green-500 text-white w-[100%] p-2 rounded-lg" onClick={()=>navigate("/success")}>Checkout</button>
        </div>
    </div>
    <FaShoppingCart className={`fixed bottom-6 right-10 text-2xl z-10 cursor-pointer ${totalItems > 0 && "animate-bounce delay-500 transition-all"}`} onClick={()=> setActiveCart(!activeCart)}/>
    </>
  )
}

export default Cart