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
            src="/background/azia.png"
            fill
            className="absolute w-screen h-screen opacity-80 hidden md:block object-cover"
            alt="Sanad"
          />
        <div className="flex flex-col max-w-[600px] gap-4 text-center md:text-left ">
          <h1 className="text-[36px] sm:text-[48px] md:text-[52px] text-white font-bold leading-tight">
            Adhiyah for Najdi Hospitality{" "}
          </h1>
          <p className="text-white text-[16px] sm:text-[18px] leading-relaxed">
            At Adhiyah, we offer traditional Najdi hospitality with a
            contemporary vision that expresses authenticity and luxury. We are
            more than just hospitality providers... we are a story of rich
            heritage and genuine generosity told at your tables. We specialize
            in offering buffets and traditional Najdi dishes, prepared with care
            and selected ingredients, so that hospitality reflects your
            generosity and refined taste. Whether the occasion is formal,
            family-oriented, or a special celebration, we guarantee that the
            hospitality will exceed expectations.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/companies/azia.png"
            width={300}
            height={300}
            alt="azia Logo"
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
            To be the first choice for luxurious Najdi hospitality across the
            Kingdom
          </p>
        </div>

        <div className="flex flex-col text-center md:text-right items-center md:items-start max-w-[400px]">
          <h3 className="text-white text-[32px] sm:text-[36px] md:text-[40px] font-bold goldenText3 mb-3">
            Our Mission{" "}
          </h3>
          <p className="text-white text-[16px] sm:text-[18px] leading-relaxed text-center md:text-left">
            We offer an unforgettable hospitality experience, inspired by our
            heritage and designed with today`s taste.
          </p>
        </div>
      </div>
    </div>
  );
}
