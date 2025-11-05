import Bgsvg from "@/components/Bgsvg";
import DownloadButton from "@/components/DownloadButton";
import Image from "next/image";

export default function Page() {
  return (
    <div
      className="flex flex-col 
       justify-between items-center w-screen min-h-screen px-6 sm:px-10 md:px-20 lg:px-40"
      dir="ltr"
    >
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-[90%] h-screen pt-24 md:pt-32 md:w-full z-10 md:gap-20 lg:gap-40">
        <Image
          src="/background/sanad.png"
          fill
          className="absolute w-screen h-screen hidden md:block"
          alt="Sanad"
        />

        <div className="absolute inset-0 z-30 opacity-40">
          <Bgsvg />
        </div>
        <div className="flex flex-col max-w-[600px] gap-4 text-center md:text-left ">
          <h1 className="text-[36px] sm:text-[48px] md:text-[46px] text-white font-bold leading-tight">
            Sanad Limited for Management Consulting and Training Services{" "}
          </h1>
          <p className="text-white text-[16px] sm:text-[18px] leading-relaxed">
            We aim to elevate the academic and institutional outcomes according
            to national and international classifications, offering educational
            and pedagogical consultations, digital transformation, as well as
            scientific and research consultations, marketing and advertising
            consultations, business and institutional development consultations,
            and quality and financial sustainability consultations.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/companies/sanad.png"
            width={300}
            height={300}
            alt="sanad Logo"
            className="hidden md:block z-10"
          />
          <DownloadButton PdfUrl="/company-profile.docx" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-20 md:gap-40 py-10 w-full z-10">
        <div className="flex flex-col text-center md:text-right items-center md:items-start max-w-[400px]">
          <h3 className="text-white text-[32px] sm:text-[36px] md:text-[40px] font-bold goldenText3 mb-3">
            Our Vision{" "}
          </h3>
          <p className="text-white text-center  text-[16px] sm:text-[18px] leading-relaxed md:text-left">
            To be the trusted reference in developing institutional capabilities
            and building human competencies locally and regionally.
          </p>
        </div>

        <div className="flex flex-col text-center md:text-right items-center md:items-start max-w-[400px]">
          <h3 className="text-white text-[32px] sm:text-[36px] md:text-[40px] font-bold goldenText3 mb-3">
            Our Mission{" "}
          </h3>
          <p className="text-white text-[16px] sm:text-[18px] leading-relaxed text-center md:text-left">
            We empower and create a sustainable impact that supports
            institutional excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
