import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { removeFromCart , incrementQty, decrementQty} from "../features/Cart/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
const CartItem = ({id,name,image,price, qty}) => {
  const dispatch = useDispatch()
  return (
    <div className="shadow-xl rounded-lg flex  p-1 pt-2 relative mb-4">
       < MdDelete className="absolute right-4 top-1 text-xl hover:text-red-500" 
       onClick={()=> {
        dispatch(removeFromCart(id))
        toast.error(`${name} remove from cart `)
       }
       } />
        <img 
        src={image} 
        className="w-[70px] h-[50px]"
        alt="" />

        <div className="flex-grow">
            <h3 className="font-bold">{name}</h3>
            <div className="flex  justify-between p-2 items-center">
                <p className="text-green-500 font-semibold">₹ {price}</p>
                <div className="flex items-center gap-2">
                    <button className="border border-gray-800 p-1 rounded-lg hover:bg-green-500 hover:text-white hover:border-none transition-all ease-linear" onClick={()=> dispatch(incrementQty({id,name,image,price, qty}))}> <FaPlus /> </button>
                    <p>{qty}</p>
                    <button className="border border-gray-800 p-1 rounded-lg hover:bg-green-500 hover:text-white hover:border-none transition-all ease-linear" onClick={()=> qty > 1 && dispatch(decrementQty({id,name,image,price, qty}))}> <FaMinus /> </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem