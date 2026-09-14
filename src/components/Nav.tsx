import Logo from '../assets/logo-text.png'    

const Nav = () => {
    return (
        <div className="flex justify-between items-center p-4 text-[#475569] container mx-auto px-25">
            <img src={Logo} alt="Logo" className="w-32 h-auto" />
            <ul className ="flex gap-4 items-center">
            <li className="">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
            <div className ="flex gap-4">
                <button>Sign In</button>
                <button className="bg-[#d91b7e] text-white px-4 py-2 rounded-[20px]">Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;