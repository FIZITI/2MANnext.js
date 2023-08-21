import Image from "next/image";
import Link from "next/link";
import aiMap from "../images/ai-map.svg";
import arrowRight from "../images/button-arrow-right.svg";

export default function Page() {
  return (
    <>
      <div className=" mt-[63px] max-w-[1200px] m-auto">
        <div className="grid grid-rows-3 gap-[100px] md:grid-rows-1">
          <div className="grid grid-cols-2 justify-items-center items-center md:grid-cols-1">
            <Link className="portfolio" href="#"><Image src={aiMap} alt="фото"/></Link>
            <div className="">
              <span className="text-[#8D9BF3] font-normal text-base sm:text-[21px]">Портал</span>
              <h2 className="font-medium text-[32px] h-[47px] uppercase sm:text-[32px]">AI-map</h2>
              <div className="flex bg-[#8D9BF3] w-[100px] h-[3px] mt-[2px] sm:hidden"></div>
              <p className="text-base font-normal leading-[21px] mt-3 sm:text-xl">AI-MAP - это уникальный авторский проект, путеводитель по <br/> сервисам и возможностям Искусственного Интеллекта.</p>
              <p className="text-base font-normal leading-[21px] mt-[20px] sm:text-xl"><span className="font-bold uppercase">Задача: </span>Разработать единый портал и объединить в одном месте <br/> чат-боты по таким направлением как: фото, видео, текстовые и 3D <br/> чат боты, а так же программирование, редактирование текста и <br/> многим другим.</p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 justify-items-center items-center md:flex md:flex-col-reverse">
              <div className="">
                <span className="text-[#8D9BF3] font-normal text-base sm:text-[21px]">Портал</span>
                <h2 className="font-medium text-[32px] h-[47px] uppercase sm:text-[32px]">AI-map</h2>
                <div className="flex bg-[#8D9BF3] w-[100px] h-[3px] mt-[2px] sm:hidden"></div>
                <p className="text-base font-normal leading-[21px] mt-3 sm:text-xl">AI-MAP - это уникальный авторский проект, путеводитель по <br/> сервисам и возможностям Искусственного Интеллекта.</p>
                <p className="text-base font-normal leading-[21px] mt-[20px] sm:text-xl"><span className="font-bold uppercase">Задача: </span>Разработать единый портал и объединить в одном месте <br/> чат-боты по таким направлением как: фото, видео, текстовые и 3D <br/> чат боты, а так же программирование, редактирование текста и <br/> многим другим.</p>
              </div>
              <Link className="portfolio" href="#"><Image src={aiMap} alt="фото"/></Link>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 justify-items-center items-center md:grid-cols-1">
              <Link className="portfolio" href="#"><Image src={aiMap} alt="фото"/></Link>
              <div className="">
                <span className="text-[#8D9BF3] font-normal text-base sm:text-[21px]">Портал</span>
                <h2 className="font-medium text-[32px] h-[47px] uppercase sm:text-[32px]">AI-map</h2>
                <div className="flex bg-[#8D9BF3] w-[100px] h-[3px] mt-[2px] sm:hidden"></div>
                <p className="text-base font-normal leading-[21px] mt-3 sm:text-xl">AI-MAP - это уникальный авторский проект, путеводитель по <br/> сервисам и возможностям Искусственного Интеллекта.</p>
                <p className="text-base font-normal leading-[21px] mt-[20px] sm:text-xl"><span className="font-bold uppercase">Задача: </span>Разработать единый портал и объединить в одном месте <br/> чат-боты по таким направлением как: фото, видео, текстовые и 3D <br/> чат боты, а так же программирование, редактирование текста и <br/> многим другим.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[130.29px] mb-[130px] sm:mt-[50px]">
          <Link className="flex items-center justify-center w-[180px] h-[70px] bg-[#F5F5F5] rounded-[40px]" href="#">
            <span className="text-[#3D3D3D] font-bold text-sm">Больше</span>
            <Image priority className="max-w-[20px] ml-[10px] mt-[3px]" src={arrowRight} alt="arrow"/>
          </Link>
        </div>
      </div>
    </>
  )
}