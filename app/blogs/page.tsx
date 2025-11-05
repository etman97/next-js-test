// app/blogs/page.tsx
"use client";
import Bgsvg from "@/components/Bgsvg";
import BlogCards from "@/components/BlogCards";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import CreateBlog from "@/components/CreateArticle";

export default function Page() {
  const [articles, setArticles] = useState<any[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null); 
  const [isAdmin, setIsAdmin] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [blogsLoading, setBlogsLoading] = useState(true);


const fetchArticles = async () => {
  try {
    setBlogsLoading(true);
    const res = await fetch("/api/blogs"); 
    
    if (!res.ok) {
      console.log("API route failed, trying direct fetch...");
      // جرب fetch مباشر كحل بديل
      const directRes = await fetch(
        "https://blog-q-gvcyhxgqehbrh5b7.canadacentral-01.azurewebsites.net/api/Blogs"
      );
      
      if (directRes.ok) {
        const data = await directRes.json();
        setArticles(data);
        return;
      }
      throw new Error("Failed to fetch blogs from all sources");
    }
    
    const data = await res.json();
    setArticles(data);
  } catch (err) {
    console.error("All fetch attempts failed:", err);
    setArticles([]); 
  } finally {
    setBlogsLoading(false);
  }
};

  useEffect(() => {
    fetchArticles();
    const token = Cookies.get("adminAuth");
    if (token) setIsAdmin(true);
  }, []);

  return (
    <div className="flex flex-col md:gap-10 relative">
          {selectedArticle && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-[60%] h-[60%] bg-transparent">
            <BlogCards
                  article={selectedArticle}
                  onClose={() => setSelectedArticle(null)}


            />
          </div>
        </div>
      )}

   {showCreate && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]">
    <div className="relative w-[80%] h-[70%] lg:w-[50%] bg-white rounded-2xl shadow-2xl overflow-hidden mt-20">
      <CreateBlog
        onClose={() => setShowCreate(false)}
        onSuccess={() => {
          setShowCreate(false);
          fetchArticles();
        }}
      />
    </div>
  </div>
)}

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
          <div className="w-full max-w-[590px] text-white drop-shadow-lg text-center lg:text-right md:pt-12">
            <h1 className="font-amiri font-bold text-[36px] sm:text-[42px] md:text-[52px] lg:text-[60px] tracking-tight leading-[1.1]">
              <span className="goldenText2">عملاء </span>
              <span className="goldenText3">قاضب</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row justify-start items-start gap-10 xl:gap-40 w-full max-w-[1200px]">
            <p className="w-full md:w-[400px] xl:w-[530px] font-[500] font-alexandria text-white text-[18px] leading-[1.8] text-center lg:text-right">
              في مدونة القاضب، نشارككم رؤيتنا حول مستقبل الأعمال والاستثمار في
              المملكة.
            </p>
            <p className="w-full md:w-[400px] xl:w-[530px] font-[500] font-alexandria text-white text-[18px] leading-[1.8] text-center lg:text-right">
              نسعى إلى أن نكون مصدر إلهام ومعلومة موثوقة عبر مقالات تحليلية
              ودراسات واقعية.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="py-10 text-center text-white text-xl">
        {articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col items-center cursor-pointer transform transition-transform hover:scale-105 
                         w-full max-w-[610px] h-[246px] mx-auto bg-transparent"
                onClick={() => {
                  setSelectedArticle(article.id); 
                  console.log(article.id)
                }}>
                <img
                  src={article.imageUrl1?.replace(
                    "https://localhost:7036",
                    "https://blog-q-gvcyhxgqehbrh5b7.canadacentral-01.azurewebsites.net"
                  )}
                  alt={article.title}
                  width={610}
                  height={246}
                  className="rounded-lg shadow-lg object-cover max-h-[280px] w-[420px] md:w-[540px] lg:w-[610px] "
                />
                <h2 className="text-white mt-4 text-xl font-bold text-center">
                  {article.title}
                </h2>
              </div>
            ))}
          </div>
        )}

        {isAdmin && (
          <div className="pt-32">
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