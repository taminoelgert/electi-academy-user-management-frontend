import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./home/Home.jsx";


const Router = () => {
  return(

      <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Navigate to={'home'}/> }/>
            <Route path={'home'} element={<Home/>}/>
            <Route path={'profile/*'}/>
            <Route path={'new-user'}/>
        </Routes>
      </BrowserRouter>
  )
}

export {Router}