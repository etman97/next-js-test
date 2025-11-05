import Bgsvg from "@/components/Bgsvg";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex relative flex-col lg:flex-row justify-center gap-10 items-center min-h-screen w-full pt-16 p-4 ">
      <Image src="/bgblog2.jpg" fill className="opacity-50" alt="bg-blog" />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="absolute inset-0 py-[15%]">
        <Bgsvg />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-1 z-99">
        {/* قسم معلومات الاتصال */}
        <div className=" p-6 rounded-lg shadow-lg">
          <h1 className="text-white text-2xl font-bold mb-6 text-right">
            تواصل معنا على
          </h1>

          {/* البريد الإلكتروني */}
          <div className="flex items-center gap-3 mb-4">
            <div className=" rounded-full text-white">
              <Image src="/mail.png" alt="email" width={24} height={24} />
            </div>
            <h1 className="text-white text-lg">Info@proquipments.sa</h1>
          </div>

          {/* أرقام الهاتف */}
          <div className="flex gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="text-white rounded-full">
                <Image src="/smartphone.png" alt="phone" width={24} height={24} />
              </div>
              <div className="flex gap-8 lg:gap-20">
                <h1 className="text-white text-lg">056 088 8705</h1>
                <h1 className="text-white text-lg">055 004 7964</h1>
                <h1 className="text-white text-lg">056 088 8705</h1>
              </div>
            </div>
          </div>

          {/* العنوان */}
          <div className="flex items-center gap-2">
            <div className="text-white rounded-full mt-1">
              <Image
                src="/map.png"
                alt="location"
                width={20}
                height={20}
              />
            </div>
            <h1 className="text-white text-lg leading-relaxed">
              2290 طريق الامير سعود بن فيصل حي الصحافة 6118 الريلض
            </h1>
          </div>
        </div>

         <div className=" rounded-lg shadow-lg w-[80%]">
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14488.106703527803!2d46.62217781185262!3d24.79454007004983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee39d5f42adaf%3A0xedda705acea248c3!2sM7%20Tower!5e0!3m2!1sen!2seg!4v1761865257335!5m2!1sen!2seg"
              width="600"
              height="300"
              className="md:w-[600px] h-[300px]  w-[450px] rounded-xl border-0 "
               style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[40%] z-99 self-center">
        <ContactForm />
      </div>
    </div>
  );
}
