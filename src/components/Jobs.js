import Image from "next/image";
import Link from "next/link";
import dog from "../images/dog.svg";
import hand from "../images/hand.svg";

export default function Page() {
  return (
    <>
      <div id="Jobs" className="m-auto max-w-[1920px] bg-[url(../images/background-jobs.svg)] bg-[#EBE7F3] bg-blend-soft-light bg-no-repeat bg-center">
        <div className="flex flex-col items-center sm:items-start">
          <span className="font-normal text-base text-[#8D9BF3] mt-[68px] sm:text-[21px] sm:mt-[45px]">Сколько стоит?</span>
          <h2 className="uppercase">цены на виды работ</h2>
          <p className="font-normal text-base leading-[21px] max-w-[1200px] text-center mt-[14px] sm:text-left sm:text-xl">Мы предлагаем
            прозрачные и конкурентоспособные цены на наши услуги. Каждый проект уникален, и именно поэтому мы тщательно
            изучаем потребности вашего бизнеса, чтобы предложить вам наиболее эффективное и экономичное решение. В этом
            разделе вы найдете ориентировочные стоимости наших
            <br/> услуг. Учтите, что окончательная цена может варьироваться в зависимости от сложности задачи, времени на
              ее выполнение и других факторов. Для
              <br/> получения более точной оценки, пожалуйста, свяжитесь с нами. Мы всегда готовы обсудить ваш проект и
                ответить на все ваши вопросы</p>
        </div>
        <div className="flex justify-end mt-[54px] pb-[66px] pa:mt-[50px]">
          <div className="grid grid-cols-3 justify-between w-full max-w-[1200px] m-auto md:grid-cols-2 md:max-w-[780px] justify-items-center gap-10 pa:grid-cols-1 pa:gap-5">
            <Link className="w-[370px] h-[530px] rounded-[40px] bg-[#FFFFFF] card-animation transition-all sm:w-[440px] sm:h-[626px] lsm:w-[370px] ssm:w-full" href="#">
              <div className="card-content">
                <div className="w-[100px] h-[3px] bg-[#F5F5F5] rounded-[5px] mt-[15px] m-auto sm:w-[118px]"></div>
                <h3 className="mt-[39px] text-center font-normal text-[32px] text-[#5468E7] sm:text-4xl ssm:text-3xl">Прототипы</h3>
                <p className="font-normal text-sm leading-[21px] text-center sm:text-xl sm:mt-[8px] lsm:text-lg ssm:text-base ssm:w-[250px] ssm:m-auto">Важный шаг в разработке сайтов
                  или <br/> приложений</p>
                <p className="font-normal text-sm text-center mt-[48px] text-[#455A64]">от <span className="text-[48px]">100 000 </span>₽
                </p>
                <ul
                  className="w-[294px] mt-9 list-image-[url('../images/check-jobs.svg')] text-sm font-normal text-[#B6B6B6] space-y-[12px] ml-[61px] sm:mt-[42px] sm:w-fit sm:m-auto sm:text-xl lsm:text-base slm:text-sm">
                  <li>Работает дизайнер & менеджер</li>
                  <li>Постоянный контакт с Заказчиком</li>
                  <li>Результат графический прототип</li>
                  <li>Готовим описание методов API</li>
                </ul>
              </div>
            </Link>
            <Link className="w-[370px] h-[530px] rounded-[40px] bg-[#5468E7] card-animation transition-all sm:w-[440px] sm:h-[626px] lsm:w-[370px] ssm:w-full" href="#">
              <div className="w-[100px] h-[3px] bg-[#8D9BF3] rounded-[5px] mt-[15px] m-auto sm:w-[118px]"></div>
              <h3 className="mt-[39px] text-center font-normal text-[32px] text-[#FFFFFF] sm:text-4xl ssm:text-3xl">Дизайн</h3>
              <p className="font-normal text-sm leading-[21px] text-center text-[#FFFFFF] sm:text-xl sm:mt-[8px] lsm:text-lg ssm:text-base ssm:w-[250px] ssm:m-auto">На основе прототипов наша
                команда <br/> делает дизайн</p>
              <p className="font-normal text-sm text-center mt-[48px] text-[#FFFFFF]">от <span className="text-[48px]">100 000 </span>₽
              </p>
              <ul
                className="w-[294px] mt-9 list-image-[url('../images/check-jobs.svg')] text-sm font-normal space-y-[12px] ml-[61px] text-[#FFFFFF] sm:mt-[42px] sm:w-fit sm:m-auto sm:text-xl lsm:text-base slm:text-sm">
                <li>Работает наш дизайнер</li>
                <li>Длительность этапа ~ 1 месяц</li>
                <li>Дизайн всех экранов в Figma</li>
              </ul>
              <Image className="float-right mr-[15px] mt-[23px] sm:w-[190px] lsm:w-[160px]" src={dog} alt="собачка"/>
            </Link>
            <Link className="w-[370px] h-[530px] rounded-[40px] bg-[#FFFFFF] card-animation transition-all sm:w-[440px] sm:h-[626px] lsm:w-[370px] ssm:w-full" href="#">
              <div className="w-[100px] h-[3px] bg-[#F5F5F5] rounded-[5px] mt-[15px] m-auto sm:w-[118px]"></div>
              <h3 className="mt-[39px] text-center font-normal text-[32px] text-[#5468E7] sm:text-4xl ssm:text-3xl">Разработка</h3>
              <p className="font-normal text-sm leading-[21px] text-center sm:text-xl sm:mt-[8px] lsm:text-lg ssm:text-base ssm:w-[250px] ssm:m-auto">Разработка веб-приложения <br/> на основе
                дизайна</p>
              <p className="font-normal text-sm text-center mt-[48px] text-[#455A64]">от <span className="text-[48px]">2 000 </span>₽/час
              </p>
              <ul
                className="w-[294px] mt-9 list-image-[url('../images/check-jobs.svg')] text-sm font-normal text-[#B6B6B6] space-y-[12px] ml-[61px] sm:mt-[42px] sm:w-[350px] sm:m-auto sm:text-xl lsm:w-[250px] lsm:text-base slm:text-sm slm:w-[200px]">
                <li>Работает Backend & Frontend Разработчики</li>
                <li>Длительность этапа ~ 1 месяц (Индивидуально)</li>
                <li>Подключается тестировщик</li>
                <li>Разворачиваем приложение в Боевой <br/> среде</li>
                <li>Поддержка по необходимости</li>
              </ul>
            </Link>
          </div>
          <Image className="absolute mt-[33px] w-[433px] finger-click-animation lg:hidden" src={hand} alt="палец"/>
        </div>
      </div>
    </>
  )
}