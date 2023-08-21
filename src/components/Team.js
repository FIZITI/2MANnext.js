import Image from "next/image";
import groundAvatar from "../images/ground-team-avatar.svg";
import gleb from "../images/gleb.svg";
import sergei from "../images/sergei.svg";
import denis from "../images/denis.svg";
import artem from "../images/artem.svg";
import arrowBlack from "../images/arrow-left-black.svg";

export default function Page() {
  return (
    <>
      <div id="Team" className="m-auto max-w-[1200px] mt-[67px]">
        <span className="text-[#8D9BF3] font-normal text-base sm:text-[21px]">Кто за этим стоит?</span>
        <h2 className="font-medium text-[32px] h-[47px] uppercase sm:text-[32px] sm:font-medium">наша команда</h2>
        <div className="flex bg-[#8D9BF3] w-[100px] h-[3px] mt-[2px] sm:hidden"></div>
        <p className="text-base font-normal leading-[21px] mt-3 h-[50px] sm:text-xl sm:leading-[28px] lsm:h-fit">В нашей команде - профессионалы высокого
          уровня, которые готовы помочь вам в реализации ваших идей и бизнес-задач</p>
      </div>
      <div className="grid grid-cols-2 m-auto max-w-[1438px] lgl:grid-cols-1 sm:mt-[23px]">
        <div className="flex w-[600px] lgl:m-auto lgl:justify-end lgl:flex-col lgl:w-full">
          <div className="flex justify-center">
            <button className="hidden self-center min-w-[20px] lgl:flex"><Image className="w-[20px]" src={arrowBlack} alt="стрелка влево"/></button>
            <div className="min-w-[369px] min-h-[369px] lsm:min-w-[269px] lsm:min-h-[269px] ssm:min-w-[245px] ssm:min-h-[245px]">
              <Image className="w-[369px] absolute lsm:w-[269px] ssm:w-[250px]" src={groundAvatar} alt="фон"/>
              <Image className="w-[335px] absolute mt-[38px] ml-[58px] lsm:w-[235px] lsm:w-[216px] lsm:mt-[34px] lsm:ml-[42px]" src={gleb} alt="Глеб"/>
            </div>
            <button className="hidden ml-[30px] self-center min-w-[20px] lgl:flex lsm:ml-[10px]"><Image className="w-[20px] rotate-180" src={arrowBlack} alt="стрелка вправо"/></button>
          </div>
          <div className="mt-[46px] m-auto hm:m-0">
            <h2 className="text-2xl font-semibold leading-[21px] h-[26px] sm:text-[28px]">Глеб</h2>
            <span className="font-normal text-base leading-6 text-[#8D9BF3] sm:text-xl">Основатель и full-stack разработчик</span>
            <p className="font-normal text-base leading-6 min-w-[278px] mt-[28px] lgl:w-[700px] hm:w-[570px] pl:w-fit sm:text-xl sm:leading-[28px] lgl:mb-[56px]">Глеб имеет более 5-ти лет опыта
              работы и настоящий вундеркинд в мире кодирования. Его универсальность и глубокие знания в различных
              областях делают его незаменимым элементом нашей команды</p>
          </div>
        </div>
        <div className="flex w-[600px] ml-even-team lgl:hidden">
          <div className="min-w-[369px] min-h-[369px]">
            <Image className="w-[369px] absolute" src={groundAvatar} alt="фон"/>
            <Image className="w-[335px] absolute mt-[38px] ml-[58px]" src={sergei} alt="Сергей"/>
          </div>
          <div className="mt-[46px] m-auto">
            <h2 className="text-2xl font-semibold leading-[21px] h-[26px]">Сергей</h2>
            <span className="font-normal text-base leading-6 text-[#8D9BF3]">backend разработчик</span>
            <p className="font-normal text-base leading-6 min-w-[278px] mt-[28px] lgl:w-[700px]">backend разработчик с более чем
              10-летним опытом работы. Сергей специализируется на Python и Node.js и известен своей способностью решать
              сложные задачи и создавать надежные серверные решения</p>
          </div>
        </div>
        <div className="flex w-[600px] lgl:hidden">
          <div className="min-w-[369px] min-h-[369px]">
            <Image className="w-[369px] absolute" src={groundAvatar} alt="фон"/>
            <Image className="w-[335px] absolute mt-[38px] ml-[58px]" src={denis} alt="Денис"/>
          </div>
          <div className="mt-[46px] m-auto">
            <h2 className="text-2xl font-semibold leading-[21px] h-[26px]">Денис</h2>
            <span className="font-normal text-base leading-6 text-[#8D9BF3]">Frontend разработчик</span>
            <p className="font-normal text-base leading-6 min-w-[278px] mt-[28px] lgl:w-[700px]">фронтенд разработчик с более чем
              4-летним опытом. Он мастер JavaScript и Node.js, уделяя большое внимание деталям и качеству продукта.
              Денис всегда стремится к созданию идеального пользовательского интерфейса</p>
          </div>
        </div>
        <div className="flex w-[600px] ml-even-team lgl:hidden">
          <div className="min-w-[369px] min-h-[369px]">
            <Image className="w-[369px] absolute" src={groundAvatar} alt="фон"/>
            <Image className="w-[335px] absolute mt-[38px] ml-[58px]" src={artem} alt="Артём"/>
          </div>
          <div className="mt-[46px] m-auto">
            <h2 className="text-2xl font-semibold leading-[21px] h-[26px]">Артём</h2>
            <span className="font-normal text-base leading-6 text-[#8D9BF3]">Специалист по SEO</span>
            <p className="font-normal text-base leading-6 min-w-[278px] mt-[28px] lgl:w-[700px]">наш специалист по SEO с более чем
              6-летним опытом. Он работает над тем, чтобы ваши сайты занимали высокие позиции в поисковых системах и
              привлекали целевую аудиторию</p>
          </div>
        </div>
      </div>
    </>
  )
}