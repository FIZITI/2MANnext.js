import Image from "next/image";
import manSms from "../images/man-sms.svg";
import telegram from "../images/telegram.svg";


export default function Page() {
  return (
    <>
      <section className="flex items-center m-auto max-w-[1225px] mb-[98px] mt-[165px] hm:flex-col-reverse hm:items-start">
        <div className="flex flex-col items-center">
          <Image className="min-w-[601px] pa:min-w-0 pa:w-[400px]" src={manSms} alt="разработчик"/>
          <Image className="min-w-[77px] absolute mt-[243px] ml-[67px] pa:min-w-0 pa:ml-[50px] pa:mt-[170px] bb:ml-[33px] bb:mt-[170px] ssm:ml-[32px] ssm:mt-[39%]" src={telegram} alt="телеграм"/>
        </div>
        <div className="ml-[-65px] hm:max-w-[700px] hm:ml-0">
          <h2 className="font-semibold text-2xl h-8 service-content-h">Разработка телеграмм-ботов</h2>
          <p className="mt-[29px] service-content-p">Разработка умных и функциональных телеграмм-ботов, способных автоматизировать вашу коммуникацию и облегчить общение с клиентами.</p>
        </div>
      </section>
    </>
  )
}