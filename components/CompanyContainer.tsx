"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface Company {
  name: string;
  ImgUrl: string;
  info: string;
  page: string;
}

interface CompanyCardProps {
  company: Company;
  isEnglish: boolean;
}

function CompanyCard({ company, isEnglish }: CompanyCardProps) {
  return (
    <div
      className="absolute -left-32 md:inset-0 flex justify-center items-center bg-[#777775]
      text-white border border-amber-300 rounded-2xl p-4 w-[420px] md:w-[460px] h-[220px]
      shadow-xl z-20 transition-all duration-300"
    >
      <div className="flex flex-row items-start justify-between w-full h-full text-white">
        <div className="flex flex-col justify-between flex-1 px-3">
          <p className="text-[14px] leading-relaxed text-center">{company.info}</p>
          <Link
            href={company.page}
            className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg text-sm self-center mt-2"
          >
            {isEnglish ? "Read More" : "المزيد"}
          </Link>
        </div>

        <div className="flex flex-col items-center justify-start w-[180px]">
          <Image
            src={company.ImgUrl}
            alt={company.name}
            width={160}
            height={100}
            className="rounded-xl object-cover"
          />
          <h1 className="text-[16px] font-semibold mt-2 text-center">
            {company.name}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default function CompanyContainer() {
  const pathname = usePathname();
  const isEnglish = pathname.includes("/en");
  const [activeCompany, setActiveCompany] = useState<number | null>(null);

  const Companies: Company[] = isEnglish
    ? [
        {
          name: "Sanad Limited for Management Consulting and Training Services",
          ImgUrl: "/companies/sanad.png",
          info: "We aim to elevate the academic and institutional outcomes according to national and international classifications, offering educational and pedagogical consultations, digital transformation",
          page: "/company/sanad",
        },
      
        {
          name: "MQ Co.",
          ImgUrl: "/companies/mq.png",
          info: "MQ is a national engineering entity specialized in providing comprehensive engineering consultancy, established to be a cornerstone in the development of urban and engineering projects according to the highest professional and aesthetic standards. MQ operates with a renewed engineering mindset that combines creative design with precise execution, offering integrated solutions covering all project stages from concept to delivery ",
          page: "/company/mq",
        },
        {
          name: "Professional Furnishings Factory ",
          ImgUrl: "/companies/pro.png",
          info: "A national establishment operating in the field of furniture manufacturing and design, creating unique pieces that combine Saudi heritage with modern elegance using high-quality materials and adhering to the highest standards of precision and professionalism in execution, excelling in providing comprehensive solutions for different spaces that allow the client to own a cultural legacy passed down through generations. ",
          page: "/company/pro",
        },
        {
          name: "Adhiyah for Najdi Hospitality",
          ImgUrl: "/companies/azia.png",
          info: "At Adhiyah, we offer traditional Najdi hospitality with a contemporary vision that expresses authenticity and luxury. We are more than just hospitality providers... we are a story of rich heritage and genuine generosity told at your tables. We specialize in offering buffets and traditional Najdi dishes, prepared with care and selected ingredients",
          page: "/company/azia",
        },
          {
          name: "Sanad Limited for Property Management and Real Estate Marketing ",
          ImgUrl: "/companies/sanad-group.png",
          info: "Sanad is a national company operating in the field of property management, marketing, and real estate development, contributing to providing integrated real estate solutions that combine innovation, professionalism, and commitment to the highest quality standards",
          page: "/company/sanad-group",
        },
        {
          name: "Marwoth",
          ImgUrl: "/companies/Marwoth.png",
          info: "A Saudi brand that revives rich heritage with a contemporary touch through luxurious architectural designs that reflect the authentic Saudi identity. We believe that the art of architecture is a vibrant bridge connecting historical roots with a future vision",
          page: "/company/mawroth",
        },
        {
          name: "Broom",
          ImgUrl: "/companies/broom.png",
          info: "A leading company in the field of operations and maintenance, dedicated to providing comprehensive solutions that ensure optimal performance, reliability, and longevity of our clients' assets. Through our commitment to excellence and focus on innovation, we offer operations and maintenance services tailored to meet the needs of various industries. ",
          page: "/company/broom",
        },
        {
          name: "PRO Equipment Company or Professional Equipment Company",
          ImgUrl: "/companies/professional.png",
          info: " At PRO Equipment Company, we provide comprehensive solutions for events of all sizesSince our very beginning, we have successfully brought our clients visions to life with exceptional professionalism, utilizing the latest technologies and global standards to deliver outstanding experiences",
          page: "/company/professional",
        },
      ]
    : [
        {
          name: " سند المحدودة للاستشارات الإدارية وخدمات التدريب والتعليم ",
          ImgUrl: "/companies/sanad.png",
          info: "الأكاديمية والارتقاء بمخرجات المؤسسات وفق التصنيفات الوطنية والعالمية، والاستشارات التعليمية والتربوية والتحول الرقمي، بجانب الاستشارات العلمية والبحثية، استشارات التسويق والإعلان",
          page: "/company/sanad",
        },
   
        {
          name: "أم كيو",
          ImgUrl: "/companies/mq.png",
          info: "إم كيو كيان هندسي وطني متخصص في تقديم الاستشارات الهندسية الشاملة، تأسس ليكون ركيزة في تطوير المشاريع العمرانية والهندسية وفق أعلى المعايير المهنية والجمالية.",
          page: "/company/mq",
        },
        {
          name: "مصنع التجهيزات الاحترافية",
          ImgUrl: "/companies/pro.png",
          info: "منشأة وطنية تعمل في مجال صناعة وتصميم الأثاث، ليكون قطعة فريدة تجمع بين التراث السعودي والأناقة العصرية باستخدام مواد وخامات عالية الجودة، والتزام بأعلى معايير الدقة والاحترافية  .",
          page: "/company/pro",
        },
        {
          name: "عذيّة للضيافة النجدية",
          ImgUrl: "/companies/azia.png",
          info: "في عذيّة، نقدم الضيافة النجدية العريقة برؤية معاصرة تعبّر عن الأصالة والفخامة. نحن أكثر من مجرد مقدّمي ضيافة… نحن حكاية تراث عريق وكرم أصيل يُروى على موائدكم",
          page: "/company/azia",
        },
             {
          name: "سند لادارة الاملاك والتسويق العقاري",
          ImgUrl: "/companies/sanad-group.png",
          info: "شركة سنــــــــــــــــــد هي شركة وطنية تعمل في مــــجال إدارة الأملاك والتسويق والتطوير العقاري لتساهم في تقديم حلول عقارية متكاملة تجمع بين الابتكار الاحترافية والالتزام بأعلى معايير الـــجودة ",
          page: "/company/sanad-group",
        },
        {
          name: "مروث",
          ImgUrl: "/companies/mawroth.png",
          info: "علامة تجارية سعودية تعيد إحياء التراث العريق بطابع معاصر، من خلال تصاميم معمارية فاخرة تعكس الهوية السعودية الأصيلة. ونؤمن بأن فن العمارة هو جسرا نابضا بالحياة يربط بين الجذور التاريخية والرؤية المستقبلية، ",
          page: "/company/mawroth",
        },
        {
          name: " بروم",
          ImgUrl: "/companies/broom.png",
          info: "شركة رائدة في مجال التشغيل والصيانة، مكرّسة لتقديم حلول شاملة تضمن الأداء الأمثل، والموثوقية، وطول عمر أصول عملائنا. من خلال التزامنا بالتميز وتركيزنا على الابتكار.",
          page: "/company/broom",
        },
        {
          name: "شركة التجهيزات الاحترافية",
          ImgUrl: "/companies/professional.png",
          info: " فشركة التجهيزات الاحترافية نقدم حلولا متكاملة للفعاليات بجميع أحجامها منذ انطلاقتنا الأولى، نجحنا في تنفيذ رؤى عملاؤنا بحرفية عالية، مستخدمين أحدث التقنيات والمعايير العالمية لتقديم تجارب استثنائية",
          page: "/company/professional",
        },
      ];

return (
  <div
    className={`relative flex flex-col items-center mx-auto w-full z-10 gap-10 ${
      isEnglish ? "" : "text-right"
    }`}
    dir={isEnglish ? "ltr" : "rtl"}
  >
    {Companies.map((company, index) => {
      if (index % 2 === 0) {
        return (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-24 w-full"
          >
            {/* الشركة الأولى */}
            <div className="flex flex-col items-center">
              <div
                className="relative w-[180px] h-[120px] sm:w-[240px] sm:h-[160px] md:w-[300px] md:h-[200px] lg:w-[360px] lg:h-[220px]"
                onMouseEnter={() => setActiveCompany(index)}
                onMouseLeave={() => setActiveCompany(null)}
              >
                <Image
                  src={Companies[index].ImgUrl}
                  alt={Companies[index].name}
                  fill
                  className={`rounded-xl object-cover cursor-pointer transition-all duration-300 ${
                    activeCompany === index ? "opacity-0" : "opacity-100"
                  }`}
                />
                {activeCompany === index && (
                  <CompanyCard company={Companies[index]} isEnglish={isEnglish} />
                )}
              </div>

              <h1 className="text-white text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold mt-3 max-w-[320px]">
                {Companies[index].name.length > 200
                  ? Companies[index].name.slice(0, 200) + "..."
                  : Companies[index].name}
              </h1>
            </div>

            {/* الشركة الثانية (لو موجودة) */}
            {index + 1 < Companies.length && (
              <div className="flex flex-col items-center mt-8 lg:mt-0">
                <div
                  className="relative w-[180px] h-[120px] sm:w-[240px] sm:h-[160px] md:w-[300px] md:h-[200px] lg:w-[360px] lg:h-[220px]"
                  onMouseEnter={() => setActiveCompany(index + 1)}
                  onMouseLeave={() => setActiveCompany(null)}
                >
                  <Image
                    src={Companies[index + 1].ImgUrl}
                    alt={Companies[index + 1].name}
                    fill
                    className={`rounded-xl object-cover cursor-pointer transition-all duration-300 ${
                      activeCompany === index + 1 ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  {activeCompany === index + 1 && (
                    <CompanyCard
                      company={Companies[index + 1]}
                      isEnglish={isEnglish}
                    />
                  )}
                </div>

                <h1 className="text-white text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold mt-3 max-w-[320px]">
                  {Companies[index + 1].name.length > 200
                    ? Companies[index + 1].name.slice(0, 200) + "..."
                    : Companies[index + 1].name}
                </h1>
              </div>
            )}
          </div>
        );
      }
      return null;
    })}
  </div>
);

}
