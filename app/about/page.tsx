"use client";

import Bgsvg from "@/components/Bgsvg";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProfileProps {
  ImgUrl: string;
  Name: string;
  Position: string;
}

function ManagerProfile({ ImgUrl, Name, Position }: ProfileProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 object-cover ">
      <Image
        src={ImgUrl}
        width={212}
        height={224}
        alt={Name}
        className="rounded-lg"
      />
      <h1 className="text-[20px] text-white font-alexandria">{Name}</h1>
      <h3 className="text-[20px] text-white font-alexandria">{Position}</h3>
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col ">

      <div className="relative flex items-center justify-center min-h-screen overflow-hidden ">
           <Image
                 src="/background/about.png"
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
          className="relative flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-40 px-6 py-20 z-90 w-full "
        >
          <div className="w-full max-w-[1200px]">
            <div className="w-full max-w-[590px] mb-8 text-white drop-shadow-lg pt-16 lg:pt-4 mx-auto lg:mx-0">
              <h1 className="font-amiri font-bold text-[34px] sm:text-[42px] md:text-[52px] lg:text-[60px] tracking-tight leading-[1.1] text-center lg:text-right">
                <span className="goldenText2">نبذة عن</span>
                <span className="goldenText3"> القاضب </span>
                <span className="goldenText3">الاستثمارية</span>
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-20 w-full ">
              <p className="w-full lg:w-[590px] font-alexandria text-white text-[18px] leading-[1.6] text-center lg:text-right">
                هي كيان استثماري رائد يضم شركات متخصصة مثل التجهيزات الاحترافية
                ومصنع التجهيزات الاحترافية وشركة MQ وشركة سند، لتقديم حلول
                متكاملة تلبي احتياجات السوق في القطاعات الصناعية والتجارية، مع
                التركيز على الابتكار والجودة لتحقيق الريادة.
              </p>

              <p className="w-full lg:w-[590px] font-alexandria text-white text-[20px] leading-[1.6] text-center lg:text-right">
                هي كيان استثماري رائد يضم شركات متخصصة مثل التجهيزات الاحترافية
                ومصنع التجهيزات الاحترافية وشركة MQ وشركة سند، لتقديم حلول
                متكاملة تلبي احتياجات السوق في القطاعات الصناعية والتجارية، مع
                التركيز على الابتكار والجودة لتحقيق الريادة.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col relative self-center  justify-center gap-8 md:gap-10 items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-72 py-8 md:py-10">
        {/* <div className="absolute left-0 z-20">
          <Bgsvg />
        </div> */}
        <div className="absolute inset-0 bg-black/10 z-10" />

        <div className="flex flex-col lg:flex-row justify-center gap-8 md:gap-12  lg:gap-36 w-full max-w-7xl">
          <div className="w-full lg:w-1/2 lg:max-w-[590px] flex flex-col items-center lg:items-start">
            <h1 className="text-[36px] font-readex-pro font-medium text-white py-4">
              الرؤية
            </h1>
            <p className="text-white text-[20px] font-alexandria leading-relaxed">
              الشريك العقاري الرائد في تقديم الخدمات المتكاملة في القطاع
              العقاري.
            </p>
          </div>

          <div className="w-full lg:w-1/2 lg:max-w-[590px] flex flex-col items-center lg:items-start">
            <h1 className="text-[36px] font-readex-pro font-medium text-white py-4">
              الرسالة
            </h1>
            <p className="text-white text-[20px] font-alexandria leading-relaxed">
              تقديم خدمات عقارية بأعلى معايير الجودة المعتمدة على الخبرات
              التراكمية وإدارة وتنمية الأصول.
            </p>
          </div>
        </div>

        <div className="lg:self-start w-full max-w-7xl ">
            <div className="absolute inset-0 z-30 opacity-40">
                 <Bgsvg />
               </div>
          <h2 className="text-[36px] font-readex-pro font-bold text-start pt-24">
            <span className="goldenText2"> فريق العمل </span>
          </h2>
        </div>
      </div>

      <div className="relative mx-auto px-4 py-10 w-full max-w-7xl pb-20 ">
        <div className="flex flex-col justify-center items-center gap-1 mb-8">
          <Image
            src="/p7.jpg"
            width={220}
            height={220}
            alt="p1"
            className="w-full max-w-[220px] h-[220px] object-cover rounded-lg shadow-md"
          />
          <h1 className="text-[20px] text-white font-amiri font-semibold">
            محمد احمد عبد الله
          </h1>
          <h3 className="text-[16px] text-white font-amiri font-medium">
            المدير التنفيذي للمجموعة
          </h3>
        </div>

    <div className="grid gap-32 grid-cols-2 lg:grid-cols-3">
  <ManagerProfile
    ImgUrl="/team/p2.jpg"
    Name="محمد احمد عبد الله"
    Position="المدير التقني للمجموعة"
  />
  <ManagerProfile
    ImgUrl="/team/p3.jpg"
    Name="محمد احمد عبد الله"
    Position="المدير المالي للمجموعة"
  />
  <ManagerProfile
    ImgUrl="/team/p4.jpg"
    Name="محمد احمد عبد الله"
    Position="مدير التشغيل"
  />
  <ManagerProfile
    ImgUrl="/team/p5.jpg"
    Name="محمد احمد عبد الله"
    Position="مدير التشغيل"
  />
  <ManagerProfile
    ImgUrl="/team/p6.jpg"
    Name="محمد احمد عبد الله"
    Position="مدير التشغيل"
  />
  <ManagerProfile
    ImgUrl="/team/p1.jpg"
    Name="محمد احمد عبد الله"
    Position="مدير التشغيل"
  />
</div>

      </div>
    </div>
  );
}
