import Bgsvg from "@/components/Bgsvg";
import DownloadButton from "@/components/DownloadButton";
import Image from "next/image";

export default function Page() {
  return (
    <div
      className="flex flex-col  justify-between items-center w-screen min-h-screen px-6 sm:px-10 md:px-20 lg:px-40"
      dir="ltr">

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-[90%] h-screen pt-24 md:pt-32 md:w-full z-10 md:gap-20 lg:gap-40">
       <Image
              src="/background/professional.png"
              fill
              className="absolute w-screen h-screen hidden md:block object-cover"
              alt="Sanad"
            />
    
            <div className="absolute inset-0 z-30 opacity-40">
              <Bgsvg />
            </div>
        <div className="flex flex-col max-w-[600px] gap-4 text-center md:text-left ">
          <h1 className="text-[36px] sm:text-[48px] md:text-[52px] text-white font-bold leading-tight">
PRO Equipment Company or Professional Equipment Company          </h1>
          <p className="text-white text-[16px] sm:text-[18px] leading-relaxed">
          At PRO Equipment Company, we provide comprehensive solutions for events of all sizes.
Since our very beginning, we have successfully brought our clients’ visions to life with exceptional professionalism, utilizing the latest technologies and global standards to deliver outstanding experiences.

          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/companies/professional.png"
            width={300}
            height={300}
            alt="professional Logo"
            className="hidden md:block z-10"
          />
          <DownloadButton PdfUrl="/company-profile.docx" />
        </div>
      </div>

     
    </div>
  );
}
