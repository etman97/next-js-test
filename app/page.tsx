"use client";


import Box from "@/components/Box";
import FlameHero from "../components/FlameHero";
import Bgsvg from "@/components/Bgsvg";
import Slide from "@/components/Slide";
import CompanyContainer from "@/components/CompanyContainer";

export default function Page() {
  return (
    <div className="flex relative flex-col">

      {/* 🔹 Hero Section */}
      <div className="relative h-screen overflow-hidden lg:pr-0">
        <FlameHero />
        <div className="absolute inset-0 h-full w-full bg-black/60 z-1"></div>

        {/* 🔸 SVG Overlay */}
        <div className="absolute inset-0 z-20">
          <Bgsvg />
        </div>
      </div>

      {/* 🔹 Statistics Section */}
      <div className="relative p-12 md:p-16 xl:p-20 overflow-hidden z-30">
        <div className="text-center lg:text-start overflow-hidden bg-[#1a1a1d] rounded-2xl p-6">
          <h1 className="mb-2">
            <span className="goldenText2 text-[40px] font-bold">احصائيات </span>
            <span className="goldenText3 text-[40px] font-bold"> المجموعة </span>
          </h1>
          <p className="text-white mb-8 text-lg">نظرة عامة عن القاضي في أرقام</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
            <Box num="1,7" client="شهادة معتمدة" />
            <Box num="4,000" client="عملية" />
            <Box num="3,500" client="عميل" />
            <Box num="1,000" client="موظف" />
          </div>
        </div>

        {/* 🔹 Companies Section */}
        <div className="py-12 px-4 w-full max-w-[620px] text-center md:text-start">
          <span className="goldenText2 text-[28px] sm:text-[36px] md:text-[46px] font-readex-pro font-bold inline-block sm:inline">
            مجموعة
          </span>{" "}
          <span className="goldenText3 text-[28px] sm:text-[34px] md:text-[40px] font-readex-pro font-bold inline-block sm:inline">
            القاضب
          </span>{" "}
          <span className="goldenText4 text-[28px] sm:text-[34px] md:text-[40px] font-readex-pro font-bold inline-block sm:inline">
            الاستثمارية
          </span>

          <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-readex-pro leading-relaxed mt-3">
            تضم القاضب مجموعة شركات رائدة في مختلف الفئات الاستثمارية.
          </p>
        </div>

        {/* 🔹 Background SVG + Company Grid */}
        <div className="relative">
          <div className="absolute bottom-0 z-0">
            <Bgsvg />
          </div>
          <CompanyContainer />
        </div>
      </div>

      {/* 🔹 Slide Section */}
      <div className="px-[4%]">
        <Slide />
      </div>
    </div>
  );
}
