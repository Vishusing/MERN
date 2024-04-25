
const Navbar = () => {

const redirect = () => {
    window.open("https://github.com/Vishusing/MERN/tree/main/passmanage", '_blank')
}

    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
                <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-500'>&lt;</span>
                    Vish
                    <span className='text-green-500'>OP/ &gt;</span>
                </div>
                <button onClick={redirect} className="text-black bg-green-500 my-5 rounded-full flex justify-between items-center">
                    <img className="p-1 w-10" src="icons/github.svg" alt="github logo" />
                    <span className="font-bold px-2">Github</span>     
                </button>
            </div>
        </nav>
    )
}

export default Navbar
