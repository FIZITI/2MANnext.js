import Image from "next/image";
import Link from "next/link";
import arrowLeft from "../images/arrow-left.svg";
import ellipse from "../images/ellipse.svg";
import phone from "../images/phone.svg";
import target from "../images/target.svg";
import puzzle from "../images/puzzle.svg";
import rocket from "../images/rocket.svg";
import stretching from "../images/stretching.svg";
import sms from "../images/sms.svg";
import check from "../images/check.svg";
import arrowRight from "../images/arrow-right.svg";
import bulb from "../images/bulb.svg";
import developerWork from "../images/developer-work.svg";
import arrowBlack from "../images/arrow-left-black.svg";

export default function Page() {
  return (
    <>
      <div id="Service" className="max-w-[1920px] m-auto">
        <div className="m-auto max-w-[1200px] mt-[28px]">
          <span className="text-[#8D9BF3] font-normal text-base sm:text-[21px]">Что вы умеете?</span>
          <h2 className="font-medium text-[32px] h-[47px] uppercase sm:font-medium sm:text-[32px]">Услуги</h2>
          <div className="flex bg-[#8D9BF3] w-[100px] h-[3px] mt-[2px] sm:hidden"></div>
          <p className="text-base font-normal leading-[21px] mt-3 sm:text-xl">Наши услуги охватывают все аспекты
            веб-разработки и дизайна, предлагая вам полное и гибкое решение для ваших нужд. Наша команда экспертов
            внимательно изучает ваш проект, чтобы создать решение, соответствующее вашим уникальным требованиям и
            целям</p>
        </div>
        <div className="flex justify-center mt-[40px]">
          <button className="mr-[30px] pl:hidden"><Image className="w-[20px] h-[40px]" src={arrowLeft} alt="стрелка влево"/></button>
          <div className="service-block hidden-service-block service-block-adaptiv lg:hidden">
            <div className="mt-[15.75px] absolute w-[100px]">
              <Image className="ellipse-service absolute" src={ellipse} alt="круг"/>
                <Image className="avatar-service absolute" src={phone} alt="телефон"/>
            </div>
            <p className="mt-[143px] text-base font-bold leading-[21px] text-center">Разработка ботов для
              алгоритмической торговли</p>
          </div>
          <Link className="service-block hover-service-block mr-service md:flex lg:hidden service-block-adaptiv" href="#">
            <div className="mt-[15.75px] absolute w-[100px]">
              <Image className="ellipse-service absolute" src={ellipse} alt="круг"/>
                <Image className="avatar-service absolute" src={target} alt="мишень"/>
            </div>
            <p className="mt-[143px] text-base font-bold leading-[21px] text-center">SEO <br/> продвижение</p>
          </Link>
          <Link className="service-block hover-service-block mr-service sm:mr-[19px] sm:h-[190px] lsm:h-[230px]" href="#">
            <div className="mt-[15.75px] absolute w-[100px]">
              <Image className="ellipse-service absolute" src={ellipse} alt="круг"/>
              <Image className="avatar-service absolute" src={puzzle} alt="пазл"/>
            </div>
            <p className="mt-[143px] text-base font-bold leading-[21px] text-center sm:mt-[130px] lsm:mt-[143px]">Разработка CRM <br/> и ERP систем
            </p>
          </Link>
          <Link className="service-block hover-service-block mr-service active-service-block sm:mr-0 sm:h-[190px] lsm:h-[230px]" href="#">
            <div className="mt-[15.75px] absolute w-[100px]">
              <Image className="ellipse-service absolute h-[100px]" src={ellipse} alt="круг"/>
              <Image className="avatar-service absolute max-w-[125%]" src={rocket} alt="ракета"/>
            </div>
            <p className="mt-[143px] text-base font-bold leading-[21px] text-center sm:mt-[130px] lsm:mt-[143px]">Разработка <br/> сайта</p>
          </Link>
          <Link className="service-block hover-service-block mr-service pa:hidden service-block-adaptiv" href="#">
            <div className="mt-[15.75px] absolute w-[100px]">
              <Image className="ellipse-service absolute" src={ellipse} alt="круг"/>
              <Image className="avatar-service absolute" src={stretching} alt="стяжка"/>
            </div>
            <p className="mt-[143px] text-base font-bold leading-[21px] text-center">Дизайн <br/> сайтов и приложений</p>
          </Link>
          <Link className="service-block hover-service-block mr-service lg:hidden service-block-adaptiv" href="#">
            <div className="mt-[15.75px] absolute w-[100px]">
              <Image className="ellipse-service absolute" src={ellipse} alt="круг"/>
              <Image className="avatar-service absolute" src={sms} alt="смс"/>
            </div>
            <p className="mt-[143px] text-base font-bold leading-[21px] text-center">Разработка <br/> телеграм-ботов</p>
          </Link>
          <div className="service-block hidden-service-block md:hidden service-block-adaptiv">
            <div className="mt-[15.75px] absolute w-[100px]">
              <Image className="ellipse-service absolute" src={ellipse} alt="круг"/>
              <Image className="avatar-service absolute" src={check} alt="принято"/>
            </div>
            <p className="mt-[143px] text-base font-bold leading-[21px] text-center">Парсинг <br/> данных</p>
          </div>
          <button className="ml-[30px] pl:hidden"><Image className="w-[20px] h-[40px]" src={arrowRight} alt="стрелка вправо"/></button>
        </div>
        <div className="hidden pl:flex items-center justify-center mt-[47px]">
          <button className="mr-[30px]"><Image className="w-[20px]" src={arrowBlack} alt="стрелка влево"/></button>
          <p className="text-base font-[390px]"><span>1</span> / 7</p>
          <button className="ml-[30px]"><Image className="w-[20px] rotate-180" src={arrowBlack} alt="стрелка вправо"/></button>
        </div>
        <section className="flex  m-auto max-w-[1225px] mb-[98px] mt-[78px] hm:flex-col-reverse hm:mt-[75px]">
          <div className="hm:ml-0">
            <Image className="w-[150px] hm:ml-[-60px]" src={bulb} alt="лампочка"/>
            <Image className="min-w-[370px] mt-[-52px] ml-[56px] hm:w-[439px] hm:ml-0 lsm:min-w-0 lsm:w-full" src={developerWork} alt="разработчик"/>
          </div>
          <div className="mt-[140px] hm:w-[800px] hm:mt-0 pa:w-fit">
            <h2 className="font-semibold text-2xl ml-[83px] h-8 hm:ml-0 service-content-h">Разработка сайтов</h2>
            <ul className="ml-[105px] mt-[29px] space-y-[29px] hm:ml-[20px] service-content-p">
              <li className="list-image-[url('../images/logo-marker.svg')]">Landing Page: Создание эффективных и
                креативных лендингов для привлечения и конверсии ваших посетителей.
              </li>
              <li className="list-image-[url('../images/logo-marker.svg')]">Корпоративные сайты: Разработка
                профессиональных и высокоэффективных корпоративных сайтов, отражающих идеалы и цели вашего бизнеса.
              </li>
              <li className="list-image-[url('../images/logo-marker.svg')]">Интернет-магазины: Создание удобных и
                надежных интернет-магазинов с высоким уровнем юзабилити и безопасности.
              </li>
              <li className="list-image-[url('../images/logo-marker.svg')]">Промо-сайты: Разработка привлекательных
                промо-сайтов для успешного продвижения ваших товаров или услуг.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}