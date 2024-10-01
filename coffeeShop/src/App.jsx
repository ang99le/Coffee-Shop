import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Fav";
import Blog from "./pages/Blog";
import About from "./pages/About";


function App() {

  return (
    <>
       
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Favorite' element={<Favorite/>}></Route>
      <Route path='/Blog' element={<Blog/>}></Route>
      <Route path='/About' element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
  
     
    </>
  )
}

export default App
