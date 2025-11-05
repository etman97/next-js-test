"use client";
import Bgsvg from "@/components/Bgsvg";
import BlogCards from "@/components/BlogCards";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import CreateBlog from "@/components/CreateArticle";

interface Article {
  id: string;
  title: string;
  smImage: string;
  lgImage: string;
  content1: string;
  content2: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
}

export default function Page() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);

  const [articles] = useState<Article[]>([
    {
      id: "1",
      title: "Exploring the Mountains",
      smImage: "/blog1.jpg",
      lgImage: "/diagram.png",
      content1: "Discover hidden trails and breathtaking views.",
      content2: "Join our journey through the high peaks.",
      paragraph1: "The mountains offer peace and adventure alike.",
      paragraph2: "Every trail tells a story of endurance and beauty.",
      paragraph3: "Experience the wild like never before.",
    },
    {
      id: "2",
      title: "City Nights & Bright Lights",
      smImage: "/blog4.jpg",
      lgImage: "/diagram.png",
      content1:
        "A look into the vibrant life of modern cities. Every corner shines with stories untold.",
      content2:
        "The beauty of architecture and human energy. Every corner shines with stories untold.",
      paragraph1:
        "City life is a mix of chaos and creativity. Every corner shines with stories untold.",
      paragraph2:
        "Every corner shines with stories untold. Every corner shines with stories untold.",
      paragraph3:
        "Night reveals the true rhythm of urban living. Every corner shines with stories untold.",
    },
    {
      id: "3",
      title: "Calm by the Sea",
      smImage: "/blog2.jpg",
      lgImage: "/diagram.png",
      content1: "Listen to the waves and embrace serenity.",
      content2: "The ocean whispers peace to the soul.",
      paragraph1: "Every sunrise paints a story on the water.",
      paragraph2: "Waves speak a universal language of calm.",
      paragraph3: "The sea is both a mystery and a mirror.",
    },
    {
      id: "4",
      title: "Desert Dreams",
      smImage: "/blog3.jpg",
      lgImage: "/diagram.png",
      content1: "Where silence speaks louder than words.",
      content2: "Explore the golden horizons and endless sands.",
      paragraph1: "The desert teaches patience and strength.",
      paragraph2: "Every dune holds secrets of time and wind.",
      paragraph3: "Under the stars, everything feels infinite.",
    },
  ]);

  useEffect(() => {
    const isAuth = Cookies.get("adminAuth");
    if (isAuth === "true") setIsAdmin(true);
  }, []);

  return (
    <div className="flex flex-col md:gap-10 relative" dir="ltr">
      {/* Selected Article Card */}
      {selectedArticle && (
        <div className="flex justify-center items-center">
          <BlogCards
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        </div>
      )}

      {/* Create Blog Modal */}
      {showCreate && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative w-[80%] h-[70%] lg:w-[50%] bg-white rounded-2xl shadow-2xl overflow-hidden">
            <CreateBlog onClose={() => setShowCreate(false)} />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#444444]">
        <Image src="/bgblog2.jpg" fill className="opacity-50" alt="bg-blog" />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 py-[15%]">
          <Bgsvg />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-40 flex flex-col justify-center items-start gap-10 lg:gap-10 px-6"
        >
          <div className="w-full max-w-[590px] text-white drop-shadow-lg text-center lg:text-left md:pt-12">
            <h1 className="font-amiri font-bold text-[36px] sm:text-[42px] md:text-[52px] lg:text-[60px] tracking-tight leading-[1.1]">
              <span className="goldenText2">Our </span>
              <span className="goldenText3">Clients</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-start items-start gap-10 xl:gap-40 w-full max-w-[1200px]">
            <p className="w-full md:w-[400px] xl:w-[530px] font-[500] font-alexandria text-white text-[18px] leading-[1.8] text-center lg:text-left">
              At Al-Qadib Blog, we share our vision of the future of business and
              investment in the Kingdom, offering rich, insightful content that
              highlights the latest economic trends, modern technologies, and
              development strategies across various sectors.
            </p>
            <p className="w-full md:w-[400px] xl:w-[530px] font-[500] font-alexandria text-white text-[18px] leading-[1.8] text-center lg:text-left">
              Through this blog, we aim to be a source of inspiration and
              reliable information for decision-makers, entrepreneurs, and
              business enthusiasts, through analytical articles and real-world
              studies that reflect our expertise and experience in the Saudi
              market.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Articles Grid */}
      <div className="py-10 text-center text-white text-xl">
        {articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col items-center cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => setSelectedArticle(article)}
              >
                <Image
                  src={article.smImage}
                  width={610}
                  height={248}
                  alt={article.title}
                  className="rounded-lg shadow-lg object-cover w-[90%] max-w-[610px]"
                />
                <h2 className="text-white mt-4 text-xl font-bold text-center">
                  {article.title}
                </h2>
              </div>
            ))}
          </div>
        )}

        {isAdmin && (
          <div className="my-6">
            <button
              onClick={() => setShowCreate(true)}
              className="bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition"
            >
              Create Article
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
