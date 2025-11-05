import Bgsvg from "@/components/Bgsvg";
import DownloadButton from "@/components/DownloadButton";
import Image from "next/image";

export default function Page() {
  return (
    <div
      className="flex flex-col  justify-between items-center w-screen min-h-screen px-6 sm:px-10 md:px-20 lg:px-40"
      dir="ltr"
    >
    

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-[90%] h-screen pt-24 md:pt-32 md:w-full z-10 md:gap-20 lg:gap-40">
       <Image
          src="/background/sanad-group.png"
          fill
          className="absolute w-screen h-screen hidden md:block object-cover brightness-75"
          alt="Sanad"
        />

        <div className="absolute inset-0 z-30 opacity-60">
          <Bgsvg />
        </div>
        <div className="flex flex-col max-w-[600px] gap-4 text-center md:text-left ">
          <h1 className="text-[36px] sm:text-[48px] md:text-[46px] text-white font-bold leading-tight">
            Sanad Limited for Property Management and Real Estate Marketing{" "}
          </h1>
          <p className="text-white text-[16px] sm:text-[18px] leading-relaxed">
            Sanad is a national company operating in the field of property
            management, marketing, and real estate development, contributing to
            providing integrated real estate solutions that combine innovation,
            professionalism, and commitment to the highest quality standards. At
            Sanad, we are committed to building long-term relationships with our
            clients through professional management, smart marketing, and
            sustainable real estate development that meets the aspirations of
            the Saudi market and keeps pace with the future
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/companies/sanad-group.png"
            width={300}
            height={300}
            alt="sanad Logo"
            className="hidden md:block z-10"
          />
          <DownloadButton PdfUrl="/company-profile.docx" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-20 md:gap-40 py-20 w-full z-10">
        <div className="flex flex-col text-center md:text-right items-center md:items-start max-w-[400px]">
          <h3 className="text-white text-[32px] sm:text-[36px] md:text-[40px] font-bold goldenText3 mb-3">
            Our Vision{" "}
          </h3>
          <p className="text-white text-[16px] sm:text-[18px] leading-relaxed text-left">
            To be the leading real estate partner in providing integrated
            services in the real estate sector
          </p>
        </div>

        <div className="flex flex-col text-center md:text-right items-center md:items-start max-w-[400px]">
          <h3 className="text-white text-[32px] sm:text-[36px] md:text-[40px] font-bold goldenText3 mb-3">
            Our Mission{" "}
          </h3>
          <p className="text-white text-[16px] sm:text-[18px] leading-relaxed text-left">
            To provide real estate services with the highest quality standards
            based on cumulative expertise in managing and developing assets.
          </p>
        </div>
      </div>
    </div>
  );
}
