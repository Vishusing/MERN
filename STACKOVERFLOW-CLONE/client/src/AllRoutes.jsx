import { Routes, Route } from 'react-router-dom'

import { Home, Auth, Questions, AskQuestion, Tags, Users, UserProfile, DisplayQuestion } from './Pages'

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