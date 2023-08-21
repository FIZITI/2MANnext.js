import Image from "next/image";
import magnet from "../images/man-magnet.svg";

export default function Page() {
  return (
    <>
      <section className="flex items-center justify-center m-auto max-w-[1225px] mb-[98px] hm:flex-col hm:items-start">
        <div className="ml-[18px] whitespace-nowrap hm:ml-0 hm:whitespace-normal">
          <h2 className="font-semibold text-2xl h-8 service-content-h hm:w-fit">SEO продвижение</h2>
          <p className="mt-[29px] service-content-p">Предоставление комплексных SEO-услуг для повышения видимости вашего сайта в <br/> поисковых системах и привлечения большего количества поискового трафика.</p>
        </div>
        <div>
          <Image className="min-w-[1096px] ml-[-395px] mt-[100px] lgl:min-w-[680px] lgl:ml-[-300px] hm:ml-0 hm:min-w-0" src={magnet} alt="разработчик"/>
        </div>
      </section>
    </>
  )
}