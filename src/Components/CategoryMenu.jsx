import { useEffect, useState } from "react";
import FoodData from "../FoodData";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../features/Cart/CategorySlice";
const CategoryMenu = () => {
    const [category, setCategory] = useState([]);
    const Category = useSelector((state)=> state.categorySlice.category)
    const dispatch = useDispatch();
  const listUniqueCategory = () => {
     const Category = new Set(FoodData.map((data)=> data.category))
    setCategory([...Category])
  }
  useEffect(()=>{
    listUniqueCategory()
  },[])
  return (
    <div className="px-4 lg:px-7 py-5">
        <h4 className="font-bold text-xl mb-4">find the best food</h4>
        <div className="flex gap-4 overflow-auto">
            <button className={`bg-gray-200 px-5 py-2 rounded-lg font-semibold ${Category == "All" && "bg-green-500 text-white"} hover:bg-green-500 hover:text-white`} onClick={()=>dispatch(selectCategory("All"))}> All </button>
            {
              category.map((category, index)=>   <button key={index} className={`bg-gray-200 px-5 py-2 rounded-lg font-semibold hover:bg-green-500 hover:text-white`} onClick={()=> dispatch(selectCategory(category))}> {category} </button> )
            }
        </div>
    </div>
  )
}

export default CategoryMenu