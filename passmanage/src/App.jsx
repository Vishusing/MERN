import Navbar from './components/Navbar'
import Manager from './components/Manager'

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[100vh] bg-green-50
            bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
            bg-[size:14px_24px]">
        <Manager />
      </div>
    </>
  )
}

export default App
