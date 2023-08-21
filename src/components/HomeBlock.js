import Image from "next/image";
import Link from "next/link";
import arrowRight from "../images/button-arrow-right.svg";
import headerMan from "../images/header-man.svg";
import headerPlant from "../images/header-plant.svg";

export default function Page() {
  return (
    <>
      <div id="HomeBlock" className="flex m-auto max-w-[1244px] hm:flex-col">
        <div className="flex flex-col">
          <h1 className="max-w-[560px] h-fit mt-[107px] leading-[56.35px] text-[48px] font-bold hm:max-w-[600px] hm:text-4xl hm:leading-[42.26px] sm:w-[436px] lsm:w-fit lsm:text-3xl slm:text-[28px]">Профессиональная
            разработка веб-сайтов и сервисов</h1>
          <p className="max-w-[600px] mt-[25px] font-normal leading-6 hm:max-w-[800px] hm:text-[20px] hm:h-fit sm:leading-[32px]">С нами ваш проект в надежных руках. Мы
            предлагаем высококачественные услуги по разработке сайтов, интернет-магазинов, стартапов и SaaS-решений.
            Работая напрямую с директором-разработчиком, вы получаете непревзойденное качество и индивидуальный подход к
            вашему проекту</p>
          <div className="flex mt-[41px] hm:flex-col hm:hidden">
            <button className="flex items-center justify-center w-60 h-[70px] bg-[#5468E7] rounded-[40px]"><span
              className="font-bold text-sm text-white">Запросить предложение</span></button>
            <Link className="flex items-center justify-center w-[180px] h-[70px] bg-[#F5F5F5] rounded-[40px] ml-[25px]"
               href="#">
              <span className="text-[#3D3D3D] text-sm">О нас</span>
              <Image priority className="max-w-[20px] ml-[10px] mt-[3px]" src={arrowRight} alt="arrow"/>
            </Link>
          </div>
        </div>
        <div className="flex hm:hidden">
          <Image priority className="w-[381px] ml-[57px] mt-[18px] md:max-w-[282px]" src={headerMan} alt="developer"/>
          <Image priority className="w-[241px] mt-[294px] ml-[-36px] md:max-w-[178px]" src={headerPlant} alt="flower"/>
        </div>
        <div className="hidden hm:flex justify-between">
          <div className="flex lpl:flex-col mt-[41px] pl:w-[29%]">
            <button className="flex items-center justify-center w-60 h-[70px] bg-[#5468E7] rounded-[40px] z-10"><span
              className="font-bold text-sm text-white hm:text-base">Запросить предложение</span></button>
            <Link className="flex items-center justify-center lpl:ml-0 lpl:mt-[13px] w-[180px] h-[70px] bg-[#F5F5F5] rounded-[40px] ml-[25px] z-10"
               href="#">
              <span className="text-[#3D3D3D] text-sm hm:text-base">О нас</span>
              <Image priority className="max-w-[20px] ml-[10px] mt-[3px]" src={arrowRight} alt="arrow"/>
            </Link>
          </div>
          <div className="flex">
            <Image priority className="w-[381px] ml-[57px] mt-[18px] md:max-w-[282px] hm:ml-0 hm:h-[428px] ssm:hidden" src={headerMan} alt="developer"/>
            <Image priority className="w-[241px] mt-[294px] ml-[-36px] md:max-w-[178px] hm:mt-[210px] lsm:hidden" src={headerPlant} alt="flower"/>
          </div>
        </div>
      </div>
    </>
  )
}