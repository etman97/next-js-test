import DownloadButton from "@/components/DownloadButton";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col  justify-between items-center w-screen min-h-screen px-6 sm:px-10 md:px-20 lg:px-40">


      <div className="flex flex-col  md:flex-row gap-10 items-center justify-center w-[90%] h-screen pt-16 md:pt-24 md:w-full z-10 md:gap-20 lg:gap-60">
  
        <div className="flex flex-col max-w-[600px] gap-4 text-center md:text-right">
            <Image
        src="/background/azia.png"
        fill
        className="absolute w-screen h-screen opacity-80 hidden md:block object-cover"
        alt="Sanad"
      />
          <h1 className="text-[36px] sm:text-[48px] md:text-[52px] text-white font-bold leading-tight">
            عذية للضيافة النجدية{" "}
          </h1>
          <p className="text-white text-[16px] sm:text-[18px] leading-relaxed">
            في عذيّة، نقدم الضيافة النجدية العريقة برؤية معاصرة تعبّر عن الأصالة
            والفخامة. نحن أكثر من مجرد مقدّمي ضيافة… نحن حكاية تراث عريق وكرم
            أصيل يُروى على موائدكم نختص بتقديم بوفيهات ومأكولات تقليدية نجدية،
            مُعدّة بعناية وبمكونات مختارة، لتكون الضيافة انعكاسًا لكرمكم وذوقكم
            الرفيع. سواء كانت المناسبة رسمية، عائلية أو احتفالا خاصًا، نضمن أن
            تكون الضيافة فوق مستوى التوقعات.{" "}
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
            الرؤية
          </h3>
          <p className="text-white text-[16px] sm:text-[18px] leading-relaxed text-center md:text-right">
            الخيار الأول للضيافة النجدية الفاخرة على مستوى المملكة
          </p>
        </div>

        <div className="flex flex-col text-center md:text-right items-center md:items-start max-w-[400px]">
          <h3 className="text-white text-[32px] sm:text-[36px] md:text-[40px] font-bold goldenText3 mb-3">
            رسالتنا
          </h3>
          <p className="text-white text-[16px] sm:text-[18px] leading-relaxed text-center md:text-right">
            نُقدّم تجربة ضيافة لا تُنسى، مستلهمة من تراثنا، ومصمّمة بذوق اليوم{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
