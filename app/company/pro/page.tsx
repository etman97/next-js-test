import Bgsvg from "@/components/Bgsvg";
import DownloadButton from "@/components/DownloadButton";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col relative justify-between items-center w-screen min-h-screen px-6 sm:px-10 md:px-20 lg:px-40">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-[90%] h-screen pt-16 md:pt-24 md:w-full z-10 md:gap-20 lg:gap-60">
        <Image
          src="/background/pro.png"
          fill
          className="absolute w-screen h-screen hidden md:block object-cover"
          alt="Sanad"
        />

        <div className="absolute inset-0 z-30 opacity-40">
          <Bgsvg />
        </div>
        <div className="flex flex-col max-w-[600px] gap-4 text-center md:text-right">
          <h1 className="text-[36px] sm:text-[48px] md:text-[52px] text-white font-bold leading-tight">
            مصنع التجهيزات الاحترافية{" "}
          </h1>
          <p className="text-white text-[16px] sm:text-[18px] leading-relaxed">
            منشأة وطنية تعمل في مجال صناعة وتصميم الأثاث، ليكون قطعة فريدة تجمع
            بين التراث السعودي والأناقة العصرية باستخدام مواد وخامات عالية
            الجودة، والتزام بأعلى معايير الدقة والاحترافية في التنفيذ والتميز في
            تقديم الحلول المتكاملة للمساحات المختلفة التي تجعل العميل يمتلك
            إرثاً ثقافياً يرثه الأجيال.{" "}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/companies/pro.png"
            width={300}
            height={300}
            alt="pro Logo"
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
            الخيار الأمثل في صناعة المنتجات الخشبية التراثية العصرية
          </p>
        </div>

        <div className="flex flex-col text-center md:text-right items-center md:items-start max-w-[400px]">
          <h3 className="text-white text-[32px] sm:text-[36px] md:text-[40px] font-bold goldenText3 mb-3">
            رسالتنا
          </h3>
          <p className="text-white text-[16px] sm:text-[18px] leading-relaxed text-center md:text-right">
            تقديم الإبداع في قطع تجمع الأصالة بالجمال العصري تمنح عملاءنا الرضا
          </p>
        </div>
      </div>
    </div>
  );
}
