import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col  bg-black gap-8">
      <div className="flex justify-around items-center ">
        <div className="border-l-2 border-slate-500 lg:p-4">
          <Image src="/Logo.webp" width="384" height="120" alt="logo" />
        </div>
        {/* middle paet */}
        <div className="flex flex-col gap-4 px-6 lg:px-1">
          <div className="flex flex-row justify-between gap-1 md:gap-4 lg:gap-6">
            <Link href="/" className="text-white text-[18px]">
              الرئيسية
            </Link>
            <Link href="/our-clients" className="text-white text-[18px]">
              عملائنا
            </Link>
          </div>

          <div className="flex flex-row justify-between ">
            <Link href="/about" className="text-white text-[18px]">
              نبذة عنا
            </Link>
            <Link href="/blog" className="text-white text-[18px]">
              مدونة
            </Link>
          </div>
          <Link href="/our-clients" className="text-white text-[18px]">
            تواصل معنا{" "}
          </Link>
        </div>
        {/* social */}
        <div
          className="border-r-2  border-slate-500 flex flex-col justify-center items-center gap-6
         px-10 py-4  lg:px-12 lg:py-8 "
        >
          <h3 className=" text-white font-medium text-[20px] lg:text-[18px]">
            تابعنا على{" "}
          </h3>
          <div className="flex justify-between items-center gap-3">
            <Link href="https://www.instagram.com/pro.eq25/" target="_blank">
              <Image src="/insta.png" alt="instagram" width={20} height={20} />
            </Link>

            <Link
              href="https://api.whatsapp.com/send/?phone=966550047964&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <Image
                src="/whatsapp.png"
                alt="whatsapp"
                width={20}
                height={20}
              />
            </Link>

            <Image src="/linkedin.png" alt="linkedin" width={20} height={20} />
          </div>
        </div>

        <div className="hidden md:block"></div>
      </div>
      <p className="text-gray-300 font-medium self-center pb-5  ">
        جميع الحقوق محفوظة لدى @ القاضب للاستثمار
      </p>
    </div>
  );
}
