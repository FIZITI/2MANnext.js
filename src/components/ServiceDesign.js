import Image from "next/image";
import womanDesign from "../images/women.svg";

export default function Page() {
  return (
    <>
      <section className="flex items-center justify-between m-auto max-w-[1390px] mb-[116px] mt-[81px] hm:flex-col hm:items-start">
        <div className="ml-[90px] mdh:ml-0">
          <h2 className="font-semibold text-2xl h-8 service-content-h">Дизайн сайтов и приложений</h2>
          <p className="mt-[29px] sm:service-content-p">Создание привлекательного, интуитивно-понятного и юзер-ориентированного дизайна для ваших проектов</p>
          <ul className="space-y-[29px] text-base ml-[20px] mt-[23px] sm:service-content-p">
            <li className="list-image-[url('../images/logo-marker.svg')]">Разработка индивидуального прототипа для вашего проекта;</li>
            <li className="list-image-[url('../images/logo-marker.svg')]">Взаимодействие с дизайнером напрямую без посредников;</li>
            <li className="list-image-[url('../images/logo-marker.svg')]">Уникальный и цепляющий дизайн на основе ваших предпочтений.</li>
          </ul>
        </div>
        <Image className="min-w-[568px] mt-[-52px] ml-[15px] hm:ml-0 hm:mt-[40px] pl:min-w-0 pl:w-[500px]" src={womanDesign} alt="разработчик"/>
      </section>
    </>
  )
}