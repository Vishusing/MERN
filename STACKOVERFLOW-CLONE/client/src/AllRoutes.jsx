import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../src/Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'

const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/Auth' element={<Auth />} />
      <Route exact path='/Questions' element={<Questions />} />
      <Route exact path='/AskQuestion' element={<AskQuestion />} />
      <Route exact path='/Questions/:id' element={<DisplayQuestion />} />
      <Route exact path='/Tags' element={<Tags />} />
      <Route
       exact path="/Users"
        element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
       exact path="/Users/:id"
        element={
          <UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
    </Routes>
  )
}

export default AllRoutes