import Bgsvg from "@/components/Bgsvg";
import DownloadButton from "@/components/DownloadButton";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col relative justify-between items-center w-screen min-h-screen px-6 sm:px-10 md:px-20 lg:px-40">

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-[90%] h-screen pt-16 md:pt-32 md:pt-20 md:w-full z-10 md:gap-20 lg:gap-40">
           <Image
                  src="/background/mawroth.png"
                  fill
                  className="absolute w-screen h-screen hidden md:block object-cover"
                  alt="Sanad"
                />
        
                <div className="absolute inset-0 z-30 opacity-40">
                  <Bgsvg />
                </div>
        <div className="flex flex-col max-w-[600px] gap-4 text-center md:text-right">
          <h1 className="text-[36px] sm:text-[48px] md:text-[58px] text-white font-bold leading-tight">
            شركة ام كيو
          </h1>
          <p className="text-white text-[16px] sm:text-[18px] leading-relaxed">
            إم كيو كيان هندسي وطني متخصص في تقديم الاستشارات الهندسية الشاملة،
            تأسس ليكون ركيزة في تطوير المشاريع العمرانية والهندسية وفق أعلى
            المعايير المهنية والجمالية. يعمل إم كيو بفكر هندسي متجدد يجمع بين
            الإبداع التصميمي والدقة التنفيذية، ويقدم حلولا متكاملة تشمل جميع
            مراحل المشروع من الفكرة إلى التسليم ليكون شريكا موثوقاً في بناء
            بيئات عمرانية عصرية ومستدامة.
          </p>
        </div>

        {/* اللوجو + زر التحميل (يظهر فقط من md وفوق) */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/mq.png"
            width={300}
            height={300}
            alt="MQ Logo"
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
    <p className="text-white text-[16px] sm:text-[18px] leading-relaxed">
      الريادة في صناع بيئات عمرانية بروح معمارية معاصرة.
    </p>
  </div>

  {/* الرسالة */}
  <div className="flex flex-col text-center md:text-right items-center md:items-start max-w-[400px]">
    <h3 className="text-white text-[32px] sm:text-[36px] md:text-[40px] font-bold goldenText3 mb-3">
      رسالتنا
    </h3>
    <p className="text-white text-[16px] sm:text-[18px] leading-relaxed">
      خدمات هندسية متكاملة تحقيق تطلعات العملاء في تطوير المشهد العمراني
      بمستوى هندسي يتجاوز التوقعات.
    </p>
  </div>
</div>

    </div>
  );
}
