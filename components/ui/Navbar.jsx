import { LuCodeXml } from "react-icons/lu";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-borders">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <LuCodeXml className="size-6" />
              <span className="hidden xs:block font-bold text-xl">
                Ahsanul Azim
              </span>
            </Link>
            <nav className="hidden md:flex gap-8">
              <Link href="#about" className="hover:text-main">
                About
              </Link>
              <Link href="#skills" className="hover:text-main">
                Skills
              </Link>
              <Link href="#projects" className="hover:text-main">
                Projects
              </Link>
              <Link href="#contact" className="hover:text-main">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button className="btn btn-primary rounded-md">
                Get In Touch
              </button>
              <div className="md:hidden dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <FaBarsStaggered className="size-5" />
                </div>
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
