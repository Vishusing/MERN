import '../../App.css'
import { LeftSidebar, RigtSidebar, HomeMainbar } from '../../components'

const Home = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <HomeMainbar />
        <RigtSidebar />
      </div>
    </div>
  )
}

export default Home