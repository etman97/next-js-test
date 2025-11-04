"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Slide() {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const isDown1 = useRef(false);
  const startX1 = useRef(0);
  const scrollLeftRef1 = useRef(0);

  const isDown2 = useRef(false);
  const startX2 = useRef(0);
  const scrollLeftRef2 = useRef(0);

  const [showButtons, setShowButtons] = useState(false);

  const images = [
    "/a1.png", "/a2.png", "/a3.png", "/a4.png", "/a5.png", "/a6.png", "/a7.png", "/a8.png",
    "/b1.png", "/b2.png", "/b3.png", "/b4.png", "/b5.png", "/b6.png", "/b7.png", "/b8.png",
  ];

  const images2 = [
    "/b1.png", "/b2.png", "/b3.png", "/b4.png", "/b5.png", "/b6.png", "/b7.png", "/b8.png",
    "/a1.png", "/a2.png", "/a3.png", "/a4.png", "/a5.png", "/a6.png", "/a7.png", "/a8.png",
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setShowButtons(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleMouseDown1 = (e: React.MouseEvent) => {
    if (!scrollRef1.current) return;
    isDown1.current = true;
    scrollRef1.current.classList.add("cursor-grabbing");
    startX1.current = e.pageX - scrollRef1.current.offsetLeft;
    scrollLeftRef1.current = scrollRef1.current.scrollLeft;
  };

  const handleMouseLeave1 = () => {
    isDown1.current = false;
    scrollRef1.current?.classList.remove("cursor-grabbing");
  };

  const handleMouseUp1 = () => {
    isDown1.current = false;
    scrollRef1.current?.classList.remove("cursor-grabbing");
  };

  const handleMouseMove1 = (e: React.MouseEvent) => {
    if (!isDown1.current || !scrollRef1.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef1.current.offsetLeft;
    const walk = (x - startX1.current) * 1.2;
    scrollRef1.current.scrollLeft = scrollLeftRef1.current - walk;
  };

  const handleMouseDown2 = (e: React.MouseEvent) => {
    if (!scrollRef2.current) return;
    isDown2.current = true;
    scrollRef2.current.classList.add("cursor-grabbing");
    startX2.current = e.pageX - scrollRef2.current.offsetLeft;
    scrollLeftRef2.current = scrollRef2.current.scrollLeft;
  };

  const handleMouseLeave2 = () => {
    isDown2.current = false;
    scrollRef2.current?.classList.remove("cursor-grabbing");
  };

  const handleMouseUp2 = () => {
    isDown2.current = false;
    scrollRef2.current?.classList.remove("cursor-grabbing");
  };

  const handleMouseMove2 = (e: React.MouseEvent) => {
    if (!isDown2.current || !scrollRef2.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef2.current.offsetLeft;
    const walk = (x - startX2.current) * 1.2;
    scrollRef2.current.scrollLeft = scrollLeftRef2.current - walk;
  };

  const handleScrollLeft1 = () => {
    scrollRef1.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const handleScrollRight1 = () => {
    scrollRef1.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const handleScrollLeft2 = () => {
    scrollRef2.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const handleScrollRight2 = () => {
    scrollRef2.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="w-full py-8 flex flex-col gap-6">
      {/* Slider 1 */}
      <div className="relative">
        {showButtons && (
          <>
            <button
              onClick={handleScrollLeft1}
              className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 bg-white/60 hover:bg-white text-gray-800 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110"
              aria-label="Scroll left"
            >
            <Image src="/left-arrow.png" width={24} height={24} alt="right" />
            </button>
            <button
              onClick={handleScrollRight1}
              className="absolute -right-13 top-1/2 transform -translate-y-1/2 z-10 bg-white/60 hover:bg-white text-gray-800 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110"
              aria-label="Scroll right"
            >
            <Image src="/right-arrow.png" width={24} height={24} alt="right" />
            </button>
          </>
        )}
        <div
          ref={scrollRef1}
          onMouseDown={handleMouseDown1}
          onMouseLeave={handleMouseLeave1}
          onMouseUp={handleMouseUp1}
          onMouseMove={handleMouseMove1}
          className="flex gap-8 overflow-x-hidden px-4 cursor-grab select-none scrollbar-hide"
        >
          {images.map((src, i) => (
            <div key={i} className="min-w-[104px] flex-shrink-0 relative overflow-hidden">
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                width={104}
                height={104}
                className="w-[104px] h-[104px] object-cover rounded-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slider 2 */}
      <div className="relative">
        {showButtons && (
          <>
            <button
              onClick={handleScrollLeft2}
              className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 bg-white/60 hover:bg-white text-gray-800 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110"
              aria-label="Scroll left"
            >
            <Image src="/left-arrow.png" width={24} height={24} alt="right" />
            </button>
            <button
              onClick={handleScrollRight2}
              className="absolute -right-13 top-1/2 transform -translate-y-1/2 z-10 bg-white/60 hover:bg-white text-gray-800 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110"
              aria-label="Scroll right"
            >
            <Image src="/right-arrow.png" width={24} height={24} alt="right" />
            </button>
          </>
        )}
        <div
          ref={scrollRef2}
          onMouseDown={handleMouseDown2}
          onMouseLeave={handleMouseLeave2}
          onMouseUp={handleMouseUp2}
          onMouseMove={handleMouseMove2}
          className="flex gap-8 overflow-x-hidden px-4 cursor-grab select-none scrollbar-hide"
        >
          {images2.map((src, i) => (
            <div key={i} className="min-w-[104px] flex-shrink-0 relative overflow-hidden">
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                width={104}
                height={104}
                className="w-[104px] h-[104px] object-cover rounded-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
