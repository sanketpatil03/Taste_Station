import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Success from "./Pages/Success"
import ProductRouter from "./Components/ProtectedRoute"
import Error from "./Pages/Error"
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/success" element={<ProductRouter element={<Success />}/>} ></Route>
            <Route path="/*" element={<Error />} ></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
