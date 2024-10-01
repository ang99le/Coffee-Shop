import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Favorite from "./pages/Fav";
import Blog from "./pages/Blog";
import About from "./pages/About";
import { lazy, Suspense } from 'react';

const Home =lazy(()=>import("./pages/Home"))
const DetailsPage=lazy(()=>import("./components/DetailsPage"))

function App() {

  return (
    <>
       
    <BrowserRouter>
    <Suspense fallback={<div>Loading ... </div>}>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Favorite' element={<Favorite/>}></Route>
      <Route path='/Blog' element={<Blog/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/DetailsPage' element={<DetailsPage/>}></Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
  
     
    </>
  )
}

export default App
