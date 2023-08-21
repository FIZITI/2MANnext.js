import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.svg";
import close from "../images/close.svg";
import arrow from "../images/button-arrow-right.svg";

export default function Page() {
  return (
    <>
      <div className="bg-gray-500 max-w-[1920px] h-[80%] m-auto">
        <div className="w-[73%] bg-white h-[980px]">
          <div className="flex justify-between pt-[54px]">
            <Image className="w-[110px] ml-[20px]" src={logo} alt="логотип"/>
            <Image className="w-[20px] mr-[20px]" src={close} alt="закрыть"/>
          </div>
          <div className="mt-[51px] ml-[20px] mr-[20px]">
            <ul className="burger-border">
              <li><Link className="burger-link" href="#"><p>Главная</p></Link></li>
              <li><Link className="burger-link" href="#"><p>Услуги</p></Link></li>
              <li><Link className="burger-link" href="#"><p>Портфолио</p><Image src={arrow} alt="стрелка"/></Link></li>
              <li><Link className="burger-link" href="#"><p>О нас</p></Link></li>
              <li><Link className="burger-link" href="#"><p>Команда</p></Link></li>
              <li><Link className="burger-link" href="#"><p>Цены</p></Link></li>
              <li><Link className="burger-link" href="#"><p>Блог</p></Link></li>
              <li><Link className="burger-link" href="#"><p>Контакты</p></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}