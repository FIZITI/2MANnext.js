import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.svg";
import menuBurger from "../images/menu-burger.svg";

export default function Navbar() {
  return (
    <>
      <header className="w-full sticky top-0 mb-[-11px] mt-[33px] bg-white z-50 md:padding-content slm:low-padding-content">
        <div className="flex justify-between items-center h-[50px] max-w-[1244px] m-auto">
          <Link href="/">
            <Image
            src={logo}
            priority
            className="min-w-[122px] min-h-[22px]"
            width={122}
            height={22}
            alt="logo"
            />
          </Link>
          <nav className="lmd:hidden">
            <ul className="flex space-x-[38px] ul-menu mr-[45px]">
              <li className="active-link"><Link href="#HomeBlock">Главная</Link></li>
              <li className="hover-menu-link"><Link href="#Service">Услуги</Link></li>
              <li className="hover-menu-link"><Link href="/portfolio">Портфолио</Link></li>
              <li className="hover-menu-link"><Link href="#AboutUs">О&nbsp;нас</Link></li>
              <li className="hover-menu-link"><Link href="#Team">Команда</Link></li>
              <li className="hover-menu-link"><Link href="#Jobs">Цены</Link></li>
              <li className="hover-menu-link"><Link href="#">Блог</Link></li>
              <li className="hover-menu-link"><Link href="#Footer">Контакты</Link></li>
            </ul>
          </nav>
          <button className="hidden lmd:flex justify-center items-center w-[50px] h-[50px]">
            <Image width={30} src={menuBurger} alt="бургер"/>
          </button>
        </div>
      </header>
    </>
  )
}