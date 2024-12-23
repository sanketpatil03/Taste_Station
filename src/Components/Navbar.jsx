import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { searchBar } from "../features/Cart/SearchSlice";
const Navbar = () => {
  const dispatch = useDispatch()
  return (
   <nav className="flex  flex-col justify-center gap-4 px-4 py-2 md:flex-row md:justify-between md:items-center lg:px-7 lg:py-4">
        <div className="flex items-center gap-2" >
            <img className="h-10 md:h-12" src="/src/assets/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle.png" alt="" />
            <h1 className="font-bold text-green-600 text-2xl md:text-3xl">Taste <span className="text-yellow-400">Station</span></h1>
        </div>
        <div className="border border-gray-400 flex items-center md:w-[40%] rounded bg-white" >
            <FiSearch  className="mx-2" /><input type="search"  name="search" placeholder="Search here" onChange={(e)=> dispatch(searchBar(e.target.value))} className="px-3 flex-grow outline-none py-2 border-none" />
        </div>
   </nav>
  )
}

export default Navbar