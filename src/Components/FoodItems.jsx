import FoodCard from "./FoodCard"
import FoodData from "../FoodData"
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state)=> state.categorySlice.category)

  const searchInput = useSelector((state)=> state.search.searchInput);
  const handleToast = (name) =>{
    toast.success(`Added ${name}`)
  }
  return (
    <div className="px-5 flex flex-wrap gap-6 mt-5 mb-10 justify-center">

      {

          FoodData.filter((food)=>{
            if(category == "All")
            {
              return food && food.name.toLowerCase().includes(searchInput.toLowerCase())
            }
            else{
              return category === food.category && food.name.toLowerCase().includes(searchInput.toLowerCase())
            }
         
            
          }).map((food)=> (
            <FoodCard key={food.id} id={food.id} image={food.img} name={food.name} price={food.price} desc={food.desc} category={food.category} rating={food.rating} handleToast={handleToast}/>
          ))
      }
       
    </div>
  )
}
export default FoodItems;