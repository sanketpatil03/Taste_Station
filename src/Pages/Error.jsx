import { useNavigate } from "react-router-dom";
const Error = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-green-300 h-screen text-center flex flex-col justify-center">
            <h4 className="text-green-900 font-bold text-3xl">Error</h4>
            <h1 className="text-white font-bold text-9xl">404</h1>
            <h4 className="text-green-900 font-bold text-3xl mt-2 mb-5">SORRY! PAGE NOT FOUND</h4>
            <p className="text-white font-semibold">Soory, the page you're looking for doesn't exist.If you think something is broken, report a problem.</p>
            <button  onClick={()=> navigate("/")} className="bg-green-900 text-white w-[200px] px-[12px] py-[14px] text-center font-semibold rounded m-auto my-6" >Go To Homepage</button>
    </div>
  )
}

export default Error;