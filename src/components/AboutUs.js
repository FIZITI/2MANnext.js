import Image from "next/image";
import leftSms from "../images/left-chapter-sms.svg";
import quotes from "../images/quotes.svg";
import lineAboutUs from "../images/line-about-us.svg";
import leadAvatar from "../images/lead-avatar.svg";
import rightSms from "../images/right-chapter-sms.svg";

export default function Page() {
  return (
    <>
      <div id="AboutUs" className="m-auto bg-[url(../images/background-about-us.svg)] max-w-[1920px] h-[1050px] bg-[#33374E] bg-blend-soft-light bg-no-repeat bg-[center] md:h-fit md:bg-top sm:bg-[url(../images/about-us-adaptiv.svg)] sm:h-[2000px]">
        <section className="m-auto max-w-[1210px] pt-[40px]">
          <span className="font-normal text-base text-[#8D9BF3] md:text-[21px]">Почему вы?</span>
          <h2 className="uppercase font-medium text-[32px] text-white md:text-[32px]">о нас</h2>
          <div className="flex mt-[68px] ml-[5px] h-[319px] md:mt-[14px] md:h-fit">
            <div className="flex flex-row items-start absolute md:mt-[175px]">
              <Image className="min-w-[230px] md:hidden" src={leftSms} alt="комментраий"/>
              <Image className="ml-[-146px] mt-[-25px] min-w-[30px] md:ml-0 md:mt-0" src={quotes} alt="кавычки"/>
              <Image className="ml-[39px] min-w-[300px] md:hidden" src={lineAboutUs} alt="линия"/>
            </div>
            <div className="flex flex-row mt-[60px] ml-[66px] md:flex-col md:ml-0 md:mt-0">
              <Image className="max-w-[150px] max-h-[150px] sm:m-auto" src={leadAvatar} alt="руководитель"/>
              <div className="ml-[69px] md:ml-0 md:mt-[69px]">
                <div className="w-[836px] h-[75px] md:w-fit md:h-fit">
                  <dfn id="animatedText" className="font-normal text-lg leading-[21px] text-white md:text-2xl">С нами ваш проект находится в
                      надежных руках. Мы не просто разрабатываем сайты и
                      <br/> сервисы, мы создаем <span className="text-[#8D9BF3]">цифровые решения, которые помогают вам достичь ваших бизнес-целей.</span>
                        <br/> Мы ценим каждого нашего клиента и ставим его интересы превыше всего
                  </dfn>
                </div>
                  <div>
                    <div className="bg-[#FFFFFF] w-[90px] h-[0.5px] mt-[10px] md:h-[1px]"></div>
                    <p className="mt-[15.5px] max-w-[428px] font-medium text-sm leading-[21px] text-white md:text-lg">Глеб
                      Туманов, <br/> основатель и ведущий разработчик нашей команды</p>
                  </div>
                  <Image className="hidden md:flex rotate-180 min-w-[30px] float-right mt-[22px]" src={quotes} alt="кавычки"/>
              </div>
            </div>
            <div className="flex flex-row items-end absolute ml-[745px] md:hidden">
              <Image className="mr-[49px] min-w-[300px]" src={lineAboutUs} alt="линия"/>
              <Image className="rotate-180 mb-[-23px] min-w-[30px] md:mb-0" src={quotes} alt="кавычки"/>
              <Image className="self-start ml-[-142px] min-w-[230px]" src={rightSms} alt="комментарий"/>
            </div>
          </div>
          <div className="mt-[59.5px] max-w-[1200px] lsm:overflow-scroll lsm:h-[60vh]">
            <ul className="space-y-[20px] leading-6 font-normal text-base text-white sm:text-xl">
              <li>Наши корни уходят во времена, когда мы, как отдельные разработчики, работали на различных проектах в
                многочисленных компаниях. Мы набрались
                <br/> богатого опыта, получили уникальные навыки и знания. Однако, с течением времени, мы поняли, что
                  хотим объединиться, чтобы предоставить наши услуги
                  <br/> непосредственно клиентам, работая как единая команда.</li>
              <li>Мы специализируемся на работе с такими технологиями, как Go, Python, JavaScript, Node.js и прекрасно
                разбираемся в настройке серверов. Помимо этого,
                <br/> мы акцентируем большое внимание на качестве наших услуг, тестируя каждый выполняемый проект, чтобы
                  гарантировать его бесперебойную работу.
                  <br/> Но что делает нас особенными?</li>
              <li>Наша особенность - в нашем подходе. Мы - техники и разработчики в первую очередь. Вся наша команда
                прямо участвует в процессе разработки. Это
                <br/> значит, что ваши проекты будут обсуждаться и обрабатываться людьми, которые прямо занимаются
                  технической стороной дела. Никаких посредников,
                  <br/> менеджеров или директоров - вы общаетесь напрямую с теми, кто создает ваш продукт.</li>
              <li>Будь то создание интуитивно понятного сайта, разработка сложных CRM и ERP систем, обеспечение высокого
                SEO-ранжирования, уникальный дизайн,
                <br/> автоматизация через телеграм-ботов или разработка алгоритмических торговых ботов - мы тут, чтобы
                  помочь вам воплотить ваши идеи в реальность.
                  <br/> Вместе мы создадим то, что не просто выполнит свою функцию, но и превзойдет ваши ожидания.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
