"use client";

import Image from "next/image";

export default function DownloadButton({ PdfUrl }: { PdfUrl: string }) {
  return (
    <button
      onClick={() => {
        const link = document.createElement("a");
        link.href = `/files/${PdfUrl}`; 
        link.download = `${PdfUrl}`; 
        link.click();
      }}
      className="hover:bg-amber-600 text-white px-6 py-3 
        transition z-99 bg-transparent border-1 border-white rounded-2xl w-[80%]
         flex justify-center items-center gap-2"
    >
      <Image src="/text-down.jpg" width={32} height={32} alt="download"  />
      ملف الشركة    
      </button>
  );
}
