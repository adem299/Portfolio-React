import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-end py-1 border-b border-neutral-900">
        <div className="flex m-8 items-center justiffy-center gap-4 text-2xl">
            <a href="https://github.com/adem299" className="hover:text-purple-500">
                <FaGithub/>
            </a>
            <a href="https://linkedin.com/in/ademulyn" className="hover:text-purple-500">
                <FaLinkedin /> 
            </a>
            <a href="https://www.instagram.com/adeem77i/" className="hover:text-purple-500">
                <FaInstagram />
            </a>
            <a href="https://twitter.com/adetaken__" className="hover:text-purple-500">
                <FaXTwitter />
            </a>

        </div>
    </nav>
  )
}

export default Navbar