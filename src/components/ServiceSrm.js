import Image from "next/image";
import manSrm from "../images/man-srm.svg";
import wave from "../images/man-wave.svg";

export default function Page() {
  return (
    <>
      <section className="flex items-center m-auto max-w-[1225px] mb-[98px] mt-[165px] hm:flex-col-reverse hm:items-start">
        <div className="flex flex-col items-center hm:mt-[40px]">
          <Image className="min-w-[500px] z-10 pl:min-w-0 pl:w-[400px]" src={manSrm} alt="разработчик"/>
          <Image className="w-[500px] mt-[-250px] ml-[-50px] pl:mt-[-200px] pl:w-[400px] ssm:ml-[-20px] ssm:mt-[-150px]" src={wave} alt="волна"/>
        </div>
        <div className="ml-[18px]">
          <h2 className="font-semibold text-2xl h-8 service-content-h">Разработка CRM и ERP</h2>
          <p className="mt-[29px] service-content-p hm:max-w-[700px]">Создание мощных масштабируемых и интуитивнопонятных CRM и ERP систем, чтобы улучшить ваши бизнес-процессы и увеличить производительность.</p>
        </div>
      </section>
    </>
  )
}