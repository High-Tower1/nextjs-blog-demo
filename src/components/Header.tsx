import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

// Header component
function Header() {
  return (
    <header className="header">
        <nav>
          <div className="logo">
            <Link href="/">
              <Image src="vercel.svg" alt="Logo" width={30} height={30}/>
            </Link>
          </div>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="./posts">Posts</Link>
            <Link href="./about">About</Link>
          </div>

          <ThemeSwitcher/>
        </nav>
    </header>
  )
}

export default Header