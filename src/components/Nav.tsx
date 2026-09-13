import Logo from '../assets/logo-text.png'    

const Nav = () => {
    return (
        <div className="flex justify-between items-center p-4 text-[#475569] container mx-auto">
            <img src={Logo} alt="Logo" className="w-32 h-auto" />
            <ul className ="flex gap-4 items-center">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
            <div className ="flex gap-4">
                <button>Sign In</button>
                <button>Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;