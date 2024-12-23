
import { useEffect, useState } from "react"
import { PropagateLoader } from "react-spinners"
import { useNavigate } from "react-router-dom";
const Success = () => {
  const [loader, setLoader] = useState(true);
  const navigate= useNavigate()
  useEffect(()=>{
      setTimeout(()=>{
        setLoader(false)
      },3000)
  },[])
  return (
    <div className=" flex flex-col justify-center items-center h-screen bg-green-300 text-center">

      {
        loader ? <PropagateLoader color="#FFFFFF"/> : <>
                                          <h1 className="text-3xl font-bold text-white mb-3">Order Successful</h1>
                                          <p className="text-white">Your order has been successfully placed</p>
                                          <button className="bg-white text-green-300 p-2 rounded mt-2" onClick={()=> navigate("/")}>Back To Home Page</button>
                                        </>
      }
        
    </div>
  )
}

export default Success