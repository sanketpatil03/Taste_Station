import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/Cart/CartSlice";

const FoodCard = ({id, image, name, price, desc, category, rating, handleToast}) => {
  const dispatch = useDispatch();

  return (
    <div className="w-[250px] bg-white p-5 shadow-lg flex flex-col gap-2 rounded-lg">
        <img 
        src={image}
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out" 
        alt="" />

        <div className="flex justify-between">
            <h2 className="font-bold">{name}</h2>
            <p className="text-green-500 font-semibold">₹ {price}</p>
        </div>
        <p>{desc.slice(0, 50)}...</p>

        <div className="flex justify-between">
            <span className="flex items-center font-bold">
            <FaStar className="text-yellow-400 mr-1"/> {rating}
            </span>
            <button className="bg-green-500 text-white px-2 py-1 rounded-lg font-semibold" 
            onClick={()=> {
              dispatch(addToCart({id, name, price, image, qty: 1}));
              handleToast(name);
              }}>Add to cart</button>
        </div>
    </div>
  )
}

export default FoodCard