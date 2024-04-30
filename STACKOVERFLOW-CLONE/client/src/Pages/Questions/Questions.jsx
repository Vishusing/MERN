import '../../App.css'
import { LeftSidebar, RigtSidebar, HomeMainbar } from '../../components'

const Questions = () => {
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

export default Questions