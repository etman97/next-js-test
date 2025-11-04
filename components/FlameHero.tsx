"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Flamehero() {
  const pathname = usePathname();
  const isEnglish = pathname.includes("/en");

  return (
    <div
      className="relative flex flex-col overflow-x-hidden h-screen"
      dir={isEnglish ? "ltr" : "rtl"}
    >
      <div className="relative flex flex-row w-screen h-screen overflow-x-hidden lg:gap-20 xl:gap-40">
        {/* النصوص */}
        <div
          className={`flex flex-col justify-center items-center h-full w-full lg:w-1/2 
          z-30 text-center ${isEnglish ? "lg:text-left" : "lg:text-right"}`}
        >
          <div className="max-w-[460px] lg:max-w-[450px] xl:max-w-[500px] mb-4 md:mb-6 text-white drop-shadow-lg">
            <h1 className="font-amiri font-bold text-[36px] sm:text-[36px] md:text-[46px] lg:text-[52px] xl:text-[68px] tracking-tight leading-[1.1]">
              {isEnglish ? (
                <>
                  <span className="goldenText2">Al-Qadib </span>
                  <span className="goldenText3">Investment </span>
                  <span className="goldenText2">Group</span>
                </>
              ) : (
                <>
                  <span className="goldenText2">مجموعة</span>
                  <span className="goldenText3"> القاضب </span>
                  <span className="goldenText2">الاستثمارية</span>
                </>
              )}
            </h1>
          </div>

          <h3
            className="text-[16px] sm:text-[18px] lg:text-[18px] xl:text-[20px] leading-7 md:leading-8 lg:leading-9
            drop-shadow-md text-white w-full max-w-[460px] lg:max-w-[450px] xl:max-w-[500px]"
          >
            {isEnglish
              ? `A leading investment entity that includes specialized companies such
              as Professional Equipment, Professional Equipment Factory, MQ
              Company, and Sanad Company. It provides integrated solutions that
              meet market needs in industrial and commercial sectors, focusing on
              innovation and quality to achieve leadership.`
              : `هي كيان استثماري رائد يضم شركات متخصصة مثل التجهيزات الاحترافية
              ومصنع التجهيزات الاحترافية وشركة إم كيو وشركة سند، لتقديم حلول
              متكاملة تلبي احتياجات السوق في القطاعات الصناعية والتجارية، مع
              التركيز على الابتكار والجودة لتحقيق الريادة.`}
          </h3>
        </div>

        {/* الصور المتحركة */}
        <div className="relative hidden md:flex justify-center items-center z-10 lg:pl-0 xl:pl-0">
          <Image
            src="/svg2.png"
            fill
            alt="svg2"
            className="h-full w-full translate-x-40"
          />
          <Image
            src="/svg3.png"
            fill
            alt="svg3"
            className="absolute h-full w-full -translate-x-10"
          />

          <section className="relative flex justify-center items-center h-full w-full overflow-hidden text-white">
            <motion.div
              className="relative flex justify-center items-center z-30 md:scale-80 lg:scale-80 xl:scale-90"
              animate={{ y: [0, -20, 0], rotate: [-1, 4, -1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/svg1.png"
                alt="Flame"
                width={450}
                height={400}
                priority
                className="relative z-10 opacity-90"
              />

              <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[650px] md:h-[450px] lg:w-[700px] lg:h-[500px]">
                <Image
                  src="/logo.webp"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}
