import Cart from "../Components/Cart"
import CategoryMenu from "../Components/CategoryMenu"
import FoodItems from "../Components/FoodItems"
import Navbar from "../Components/Navbar"


const Home = () => {
  return (
    <>
      <Navbar/>
      <CategoryMenu />
      <FoodItems/>
      <Cart />
    </>
  )
}

export default Home