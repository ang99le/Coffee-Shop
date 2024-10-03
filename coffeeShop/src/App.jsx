import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Favorite from "./pages/Fav";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Navbar from './components/Navbar';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';
const Home =lazy(()=>import("./pages/Home"))
const DetailsPage=lazy(()=>import("./components/DetailsPage"))

function App() {

  return (
    <>
       
    <BrowserRouter>
    <Suspense fallback={<div><Loader/></div>}>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Favorite' element={<Favorite/>}></Route>
      <Route path='/Blog' element={<Blog/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Navbar' element={<Navbar/>}></Route>
      <Route path='/DetailsPage' element={<DetailsPage/>}></Route>
      <Route path='/Loader' element={<Loader/>}></Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
  
     
    </>
  )
}

export default App
