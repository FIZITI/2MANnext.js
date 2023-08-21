import Image from "next/image";
import manInMoon from "../images/man-in-moon.svg";

export default function Page() {
  return (
    <>
      <div id="HomeBlock" className="flex m-auto max-w-[1244px] hm:flex-col">
        <div className="flex flex-col self-center mb-[50px] hm:self-start hm:mt-[80px]">
          <p className="max-w-[600px] mt-[25px] font-normal leading-6">С нами ваш проект в надежных руках. Мы
            предлагаем высококачественные услуги по разработке сайтов, интернет-магазинов, стартапов и SaaS-решений.
            Работая напрямую с директором-разработчиком, вы получаете непревзойденное качество и индивидуальный подход к
            вашему проекту</p>
          <div className="flex mt-[41px]">
            <button className="flex items-center justify-center w-60 h-[70px] bg-[#5468E7] rounded-[40px]"><span
              className="font-bold text-sm text-white">Запросить предложение</span></button>
          </div>
        </div>
        <div className="ml-[129px] hm:self-end hm:mt-[-180px] ppl:mt-[-60px] ppl:self-center ppl:ml-0">
          <Image priority className="w-[440px] mt-[18px] pa:w-[330px] pl:w-[250px]" src={manInMoon} alt="developer"/>
        </div>
      </div>
    </>
  )
}