"use client";
import Bgsvg from "@/components/Bgsvg";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
const clients = [
  { src: "/clients/a1.png", name: "Al Manba" },
  { src: "/clients/a2.jpg", name: "Enmayeon Contracting" },
  { src: "/clients/a3.jpg", name: "Construction Station" },
  { src: "/clients/a4.jpg", name: "Verde" },
  { src: "/clients/a5.jpg", name: "Al Jouf University" },
  { src: "/clients/a6.jpg", name: "Northern Border University" },
  { src: "/clients/a7.jpg", name: "Reed" },
  { src: "/clients/a8.jpg", name: "Address Coffee" },
  { src: "/clients/a9.jpg", name: "Al Jouf Municipality" },
  {
    src: "/clients/a10.jpg",
    name: "Imam Turki bin Abdullah Royal Reserve Development Authority",
  },
  { src: "/clients/a11.jpg", name: "Northern Borders Municipality" },
  { src: "/clients/a12.jpg", name: "Technical and Vocational Training Corporation" },
  { src: "/clients/a13.jpg", name: "Ministry of Interior" },
  { src: "/clients/b1.jpg", name: "Human Rights Commission" },
  { src: "/clients/b2.jpg", name: "Diriyah Gate Development Authority" },
  { src: "/clients/b3.jpg", name: "General Entertainment Authority" },
  { src: "/clients/b4.jpg", name: "Heritage Commission" },
  { src: "/clients/b5.jpg", name: "Ministry of Environment, Water and Agriculture" },
  { src: "/clients/b6.jpg", name: "Ministry of Education" },
  { src: "/clients/b7.jpg", name: "Ministry of Human Resources and Social Development" },
  { src: "/clients/b8.jpg", name: "Ministry of Sports" },
  { src: "/clients/b9.jpg", name: "Ministry of Municipal and Rural Affairs" },
  { src: "/clients/b10.jpg", name: "Ministry of Foreign Affairs" },
  { src: "/clients/b11.jpg", name: "Ministry of Health" },
  { src: "/clients/b12.jpg", name: "Ministry of Culture" },
  { src: "/clients/b13.jpg", name: "Hail Municipality" },
];


  return (
    <div className="flex flex-col md:gap-10 " dir="ltr">
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
         
        </div>
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
          <div className="w-full max-w-[590px] text-white drop-shadow-lg text-center lg:text-left">
            <h1 className="font-amiri font-bold text-[40px] sm:text-[50px] md:text-[64px] lg:text-[72px] tracking-tight leading-[1.1]">
              <span className="goldenText2">Our </span>
              <span className="goldenText3">Client</span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-start items-start gap-10 md:gap-20 w-full max-w-[1200px]">
            <p className="w-full md:w-[590px] font-alexandria text-white text-[20px] leading-[1.5] text-center lg:text-left">
              It is a leading investment entity that includes specialized companies such as Professional Equipment, Professional Equipment Factory, MQ Company, and Sanad Company. Together, they provide integrated solutions that meet market needs across industrial and commercial sectors, with a strong focus on innovation and quality to achieve leadership.
            </p>
            <p className="w-full md:w-[590px] font-alexandria text-white text-[20px] leading-[1.5] text-center lg:text-left">
              We always strive to build long-term relationships based on credibility, excellence, and commitment to the highest standards of quality in every project we undertake.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-24 gap-y-10 p-6 
      lg:py-24 lg:px-24 bg-[#161616]">
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
