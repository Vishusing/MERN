import { useEffect, useRef, useState } from "react"

const Manager = () => {

    const ref = useRef();
    const passwordRef = useRef();

    const [form, setForm] = useState({
        site: "",
        username: "",
        password: "",
    });
    const [passwordArray, setPasswordArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem("password")
        console.log(passwords)
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const showPassword = () => {
        if (ref.current.src.includes('icons/eyecross.svg')) {
            ref.current.src = 'icons/eye.svg'
            passwordRef.current.type = 'password'
        } else {
            ref.current.src = 'icons/eyecross.svg'
            passwordRef.current.type = 'text'
        }
    }

    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
    }


    return (
        <>
            {/* https://bg.ibelick.com/ */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50
            bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
            bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full
             bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
            <div className="mycontainer">
                <h1 className='text-4xl font-bold text-center'><span className='text-green-500'>&lt;</span>
                    Vish
                    <span className='text-green-500'>OP/ &gt;</span></h1>
                <p className='text-green-900 text-lg text-center '>Your Password Manager</p>
                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input onChange={handleOnChange} value={form.site} className='rounded-full border border-green-500 w-full p-4 py-1'
                        placeholder='Enter Website Url' type="text" name="site" id="" />
                    <div className="flex w-full justify-between gap-8">
                        <input onChange={handleOnChange} value={form.username} className='rounded-full border border-green-500 w-full p-4 py-1'
                            placeholder='Enter Username' type="text" name="username" id="" />
                        <div className="relative">
                            <input ref={passwordRef} onChange={handleOnChange} value={form.password} className='rounded-full border border-green-500 w-full p-4 py-1'
                                placeholder='Enter Password' type="password" name="password" id="" />
                            <span className="absolute right-[3px] top-[4px] cursor-pointer" onClick={showPassword}>
                                <img ref={ref} className="p-1 pt-1" width={26} src="icons/eye.svg" alt="eye" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex justify-center items-center bg-green-400 rounded-full 
                    px-4 gap-2 border border-green-900 py-2 w-fit hover:bg-green-300'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password
                    </button>
                </div>
                <div className="passwords">
                    <h2 className="font-bold text-xl py-4">Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords to show</div>}
                    {passwordArray.length !== 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden">
                            <thead className="bg-green-800 text-white">
                                <tr>
                                    <th className="py-2">Site</th>
                                    <th className="py-2">Username</th>
                                    <th className="py-2">Password</th>
                                </tr>
                            </thead>
                            <tbody className="bg-green-100">
                                {passwordArray.map((item, index) => (
                                    <tr key={index}>
                                        <td className="py-2 border border-white text-center w-32"><a href={item.site} target="_blank">{item.site}</a></td>
                                        <td className="py-2 border border-white text-center w-32">{item.username}</td>
                                        <td className="py-2 border border-white text-center w-32">{item.password}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
