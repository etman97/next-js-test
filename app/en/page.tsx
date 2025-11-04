"use client";

import Box from "@/components/Box";
import Bgsvg from "@/components/Bgsvg";
import Slide from "@/components/Slide";
import Flamehero from "@/components/FlameHero";
import CompanyContainer from "@/components/CompanyContainer";

export default function Page() {
  return (
    <div className="flex relative flex-col" dir="ltr">
      <div className="relative h-screen overflow-hidden lg:pr-0">
        <Flamehero />
        <div className="absolute inset-0 h-full w-full bg-black/60 z-1"></div>

        <div className="absolute inset-0 z-20">
          <Bgsvg />
        </div>
      </div>

      <div className="relative p-12 md:p-16 xl:p-20 overflow-hidden z-30">
        <div className="text-center lg:text-start overflow-hidden bg-[#1a1a1d] rounded-2xl p-6">
          <h1 className="mb-2">
            <span className="goldenText2 text-[40px] font-bold">Group </span>
            <span className="goldenText3 text-[40px] font-bold">Statistics</span>
          </h1>
          <p className="text-white mb-8 text-lg">
            An overview of Al-Qadib in numbers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
            <Box num="1,7" client="Certified Certificates" />
            <Box num="4,000" client="Operations" />
            <Box num="3,500" client="Clients" />
            <Box num="1,000" client="Employees" />
          </div>
        </div>

        <div className="py-12 px-4 w-full max-w-[620px] text-center md:text-start">
          <span className="goldenText2 text-[28px] sm:text-[36px] md:text-[46px] font-readex-pro font-bold inline-block sm:inline">
            Al-Qadib
          </span>{" "}
          <span className="goldenText3 text-[28px] sm:text-[34px] md:text-[40px] font-readex-pro font-bold inline-block sm:inline">
            Investment
          </span>{" "}
          <span className="goldenText4 text-[28px] sm:text-[34px] md:text-[40px] font-readex-pro font-bold inline-block sm:inline">
            Group
          </span>

          <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-readex-pro leading-relaxed mt-3">
            Al-Qadib Group includes leading companies across various investment
            sectors.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 z-0">
            <Bgsvg />
          </div>
          <CompanyContainer />
        </div>
      </div>

      <div className="px-[4%]">
        <Slide />
      </div>
    </div>
  );
}
