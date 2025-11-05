"use client";
import Bgsvg from "@/components/Bgsvg";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
  const clients = [
    { src: "/clients/a1.png", name: "المنبع" },
    { src: "/clients/a2.jpg", name: "إنمائيون للمقاولات" },
    { src: "/clients/a3.jpg", name: "محطة البناء" },
    { src: "/clients/a4.jpg", name: "فيردي" },
    { src: "/clients/a5.jpg", name: "جامعة الجوف" },
    { src: "/clients/a6.jpg", name: "جامعة الحدود الشمالية" },
    { src: "/clients/a7.jpg", name: "ريد" },
    { src: "/clients/a8.jpg", name: "عنوان القهوة" },
    { src: "/clients/a9.jpg", name: "أمانة الجوف" },
    {
      src: "/clients/a10.jpg",
      name: "هيئة تطوير محمية الإمام تركي بن عبد الله الملكية",
    },
    { src: "/clients/a11.jpg", name: "أمانة الحدود الشمالية" },
    { src: "/clients/a12.jpg", name: "المؤسسة العامة للتدريب التقني والمهني" },
    { src: "/clients/a13.jpg", name: "وزارة الداخلية" },
    { src: "/clients/b1.jpg", name: "هيئة حقوق الإنسان" },
    { src: "/clients/b2.jpg", name: "هيئة تطوير بوابة الدرعية" },
    { src: "/clients/b3.jpg", name: "الهيئة العامة للترفيه" },
    { src: "/clients/b4.jpg", name: "هيئة التراث" },
    { src: "/clients/b5.jpg", name: "وزارة البيئة والمياه والزراعة" },
    { src: "/clients/b6.jpg", name: "وزارة التعليم" },
    { src: "/clients/b7.jpg", name: "الموارد البشرية والتنمية الاجتماعية" },
    { src: "/clients/b8.jpg", name: "وزارة الرياضة" },
    { src: "/clients/b9.jpg", name: "وزارة الشؤون البلدية والقروية" },
    { src: "/clients/b10.jpg", name: "وزارة الخارجية" },
    { src: "/clients/b11.jpg", name: "وزارة الصحة" },
    { src: "/clients/b12.jpg", name: "وزارة الثقافة" },
    { src: "/clients/b13.jpg", name: "أمانة منطقة حائل" },
  ];

  return (
    <div className="flex flex-col md:gap-10 ">
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <Image
          src="/background/client.png"
          fill
          className="absolute w-screen h-screen hidden md:block "
          alt="Sanad"
        />

        <div className="absolute inset-0 z-30 opacity-40">
          <Bgsvg />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-40 flex flex-col justify-center items-start gap-10 lg:gap-16 px-6"
        >
          <div className="w-full max-w-[590px] text-white drop-shadow-lg text-center lg:text-right">
            <h1 className="font-amiri font-bold text-[40px] sm:text-[50px] md:text-[64px] lg:text-[72px] tracking-tight leading-[1.1]">
              <span className="goldenText2">عملاء </span>
              <span className="goldenText3">قاضب</span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-start items-start gap-10 md:gap-20 w-full max-w-[1200px]">
            <p className="w-full md:w-[590px] font-alexandria text-white text-[20px] leading-[1.8] text-center lg:text-right">
              هي كيان استثماري رائد يضم شركات متخصصة مثل التجهيزات الاحترافية
              ومصنع التجهيزات الاحترافية وشركة MQ وشركة سند، لتقديم حلول متكاملة
              تلبي احتياجات السوق في القطاعات الصناعية والتجارية، مع التركيز على
              الابتكار والجودة لتحقيق الريادة.
            </p>
            <p className="w-full md:w-[590px] font-alexandria text-white text-[20px] leading-[1.8] text-center lg:text-right">
              نحرص دائماً على بناء علاقات طويلة الأمد تقوم على المصداقية،
              والتميز، والالتزام بأعلى معايير الجودة في كل مشروع نتولاه.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-24 gap-y-10 p-6 
      lg:py-24 lg:px-24 bg-[#161616] ">
        {clients.map((client, index) => {
          const total = clients.length;
          const isLastTwo = index >= total - 2;
          let colClass = "";
          if (isLastTwo) {
            if (index === total - 2) {
              colClass = "lg:col-start-2";
            } else if (index === total - 1) {
              colClass = "lg:col-start-3";
            }
          }

          return (
            <div
              key={index}
              className={`flex flex-col justify-center items-center gap-3 w-[224px] h-[250px]  bg-[#161616]
                text-center ${colClass}`}
            >
              <Image
                src={client.src}
                width={200}
                height={200}
                alt={client.name}
                className="w-[150px] h-[150px] lg:w-[150px] lg:h-[150px] rounded-lg"
              />
              <h3 className="text-white text-[20px]">{client.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
