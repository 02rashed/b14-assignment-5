import logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="mt-10 w-full border-t border-[#e8edf3] bg-white px-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-10 grid-cols-4">
          <div className="col-span-1">
              <div>
                <img src ={logo} className="mb[-1px]" />
              </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#60708b]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-5 flex gap-4 text-sm text-[#60708b]">
              <a href="#" className="hover:text-[#090d18]">
                GitHub
              </a>
              <a href="#" className="hover:text-[#090d18]">
                Twitter
              </a>
              <a href="#" className="hover:text-[#090d18]">
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#090d18]">
              Product
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#60708b]">
              <li>
                <a href="#" className="hover:text-[#090d18]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#090d18]">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#090d18]">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#090d18]">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#60708b]">
              <li>
                <a href="#" className="hover:text-[#090d18]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#090d18]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#090d18]">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#090d18]">
              Legal
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#60708b]">
              <li>
                <a href="#" className="hover:text-[#090d18]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#090d18]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#e8edf3]">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 py-5 text-sm text-[#60708b] flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#090d18]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#090d18]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;