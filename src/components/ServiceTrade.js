import Image from "next/image";
import manInMoon from "../images/man-in-moon.svg";

export default function Page() {
  return (
    <>
      <section className="flex items-center justify-center m-auto max-w-[1225px] mb-[98px] hm:flex-col hm:items-start">
        <div className="mr-[27px] mt-[170px]">
          <h2 className="font-semibold text-2xl service-content-h">Разработка торговых ботов для алгоритмической торгов</h2>
          <p className="mt-[29px] service-content-p">Создание передовых алгоритмических торговых ботов, способных оптимизировать и <br/> автоматизировать ваши торговые операции, повышая при этом точность и рентабельность <br/> проектов</p>
        </div>
        <div>
          <Image className="w-[396px] mt-[100px]" src={manInMoon} alt="разработчик"/>
        </div>
      </section>
    </>
  )
}