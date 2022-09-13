import React from 'react'
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Results from './Results';

const MyRoutes = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route eaxct path='/' element={<Navigate to={"/search"} />}> </Route>   {/*redirected to /search by using Navigate to*/}
        <Route exact path='/search' element={<Results />} />
        <Route exact path='/images' element={<Results />} />
        <Route exact path='/news' element={<Results />} />
        <Route exact path='/videos' element={<Results />} />
      </Routes>
    </div>
  )
}

export default MyRoutes