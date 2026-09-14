import Logo from '../assets/logo-text.png'    

const Nav = () => {
    return (
        <div className="flex justify-between items-center p-3 text-[#475569] container mx-auto px-25 fixed z-50 bg-white border-b border-gray-200">
            <img src={Logo} alt="Logo" className="w-32 h-auto" />
            <ul className ="flex gap-4 items-center">
            <li className="hover:text-[#db2777]">Home</li>
            <li className="hover:text-[#db2777]">Technologies</li>
            <li className="hover:text-[#db2777]">Projects</li>
            <li className="hover:text-[#db2777]">About</li>
            <li className="hover:text-[#db2777]">Contact</li>
            </ul>
            <div className ="flex gap-4">
                <button>Sign In</button>
                <button className="bg-[#d91b7e] text-white px-4 py-2 rounded-[20px]">Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;