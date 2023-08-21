import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.svg";
import telegram from "../images/telegram.svg";
import whatsapp from "../images/whatsaap.svg";
import up from "../images/up.svg";

export default function Footer() {
  return (
    <>
      <footer id="Footer" className="max-w-[1920px] h-[200px] bg-[#33374E] m-auto md:padding-content slm:low-padding-content md:h-fit">
        <Link className="hidden pa:block float-right mr-[70px]" href="#HomeBlock">
          <Image className="absolute mt-[-25px] w-[50px] h-[50px] sm:flex" src={up} alt="вверх"/>
        </Link>
        <div className="flex w-[1200px] m-auto justify-between mmd:max-w-[1200px] mmd:w-full pl:flex-col pl:items-center pl:pt-[34px]">
          <div className="flex hm:flex-col">
            <Link className="w-[122px] h-fit self-center md:pt-[10px] hm:self-auto pl:w-[110px] pl:self-center" href="#"><Image className="min-w-[120px] pl:min-w-0 pl:w-[110px]" priority src={logo} alt="logo"/></Link>
            <div className="w-[300px] md:w-[250px] pa:w-fit self-center text-[#FFFFFF]  ml-[60px] hm:ml-0 text-xs font-normal pl:text-center pl:text-base pl:mt-[41px]">
              <ul className="mt-[18px] space-y-[8px] pl:mt-0">
                <li>Индивидуальный предприниматель</li>
                <li>Туманов Глеб Андреевич</li>
              </ul>
              <ul className="mt-[20px] space-y-[8px]">
                <li>ИНН 550117177855</li>
                <li>ОГРН 321508100002191</li>
                <li>Банк АО «Тинькофф Банк»</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between w-full pa:w-fit pa:flex-col pa:items-center">
            <div className="flex md:flex-col md:self-center pa:flex-row pa:w-full justify-between pa:mt-[10px] pl:w-fit pl:flex-col pl:justify-center pl:mt-[28px]">
              <div className="ml-[-21px] mt-[49px] w-[100px] md:w-fit md:ml-0 md:mt-0 pl:self-center">
                <span className="text-base font-semibold text-[#8D9BF3] pl:text-xl">Мы на связи</span>
                <div className="flex justify-center mt-[14px] pl:mt-[9px]">
                  <Link className="w-[30px] h-[30px] mr-2" href="#"><Image priority src={telegram} alt="telegram"/></Link>
                  <Link className="w-[30px] h-[30px]" href="#"><Image priority src={whatsapp} alt="whatsapp"/></Link>
                </div>
              </div>
              <div className="mt-[49px] ml-[98px] md:ml-0 md:mt-0 pl:flex pl:flex-col pl:items-center pl:mt-[25px]">
                <span className="text-base font-semibold text-[#8D9BF3] pl:text-xl">Не пропустите</span>
                <p className="mt-[11px] text-xs font-normal leading-4 text-[#FFFFFF] w-[155px] pl:w-fit pl:mt-0 pl:text-base pl:text-center">наши акции, новости и специальные предложения</p>
              </div>
            </div>
            <div className="flex justify-between items-center rounded-[40px] border-[1px] border-b-[#FFFFFF] min-w-[370px] min-h-[70px] w-[370px] pl:w-[440px] h-[70px] mt-12 ml-[10px] pa:ml-0 hm:mt-[20px] hm:self-center pl:mt-[18px] lsm:w-full pl:min-w-0 pl:w-[260px]">
              <form className="flex justify-between w-full">
                <div className="flex self-center w-fit h-[21px] ml-[31px]">
                  <input className="form-email w-[200px] outline-0 pl:w-[100px]" type="email" name="email" id="email" placeholder="Ваш e-mail" required/>
                </div>
                <button className="flex justify-center items-center bg-[#5468E7] text-[#FFFFFF] rounded-[40px] w-[130px] h-[68px] pl:w-[155px] font-bolt" type="submit">Подписаться</button>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#FFFFFF] mt-[15px] pl:mt-[35px]"></div>
        <div className="flex justify-between max-w-[1200px] m-auto mt-[12px] md:pb-[21px] text-xs font-normal text-[#FFFFFF] pl:flex-col pl:text-base pl:text-center pl:flex-col-reverse pl:mt-[18px]">
          <p>(с) 2man 2023 Все права защищены</p>
          <div className="flex pl:flex-col pl:flex-col-reverse pl:text-base">
            <p className="mr-[89px] pl:mr-0">Политика конфиденциальности</p>
            <p>Публичная оферта</p>
          </div>
        </div>
      </footer>
    </>
  )
}