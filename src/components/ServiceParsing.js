import Image from "next/image";
import manParsing from "../images/manParsing.svg";
import plant from "../images/toothy-plant.svg";


export default function Page() {
  return (
    <>
      <section className="flex items-center m-auto max-w-[1380px] mb-[98px] mt-[165px] hm:flex-col-reverse">
        <div className="flex flex-col items-center justify-center">
          <Image className="min-w-[816px] z-10 lgl:min-w-0 lgl:w-[700px]" src={manParsing} alt="разработчик"/>
          <Image className="w-[224px] mt-[475px] mr-[247px] absolute lgl:w-[170px] mdh:mt-[370px] mdh:w-[150px] ssm:mr-[100px] ssm:z-20 ssm:mt-[320px] ssm:m-auto ssm:w-[120px]" src={plant} alt="растение"/>
        </div>
        <div className="ml-[-143px] mt-[115px] w-[716px] hm:ml-0 hm:mt-0 hm-max-w-[716px] hm:w-fit">
          <h2 className="font-semibold text-2xl h-8 service-content-h">Парсинг данных</h2>
          <p className="mt-[29px] service-content-p">Наша команда операторов предлагает услуги по парсингу данных, позволяющая вам собирать, обрабатывать и анализировать информацию из различных источников.</p>
        </div>
      </section>
    </>
  )
}