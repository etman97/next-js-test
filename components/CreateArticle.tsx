"use client";
import Image from "next/image";
import { useState } from "react";

interface CreateArticleProps {
  onClose: () => void;
  onSuccess?: () => void;
}

export default function CreateBlog({ onClose, onSuccess }: CreateArticleProps) {
  const [title, setTitle] = useState("");
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [paragraph1, setParagraph1] = useState("");
  const [paragraph2, setParagraph2] = useState("");
  const [paragraph3, setParagraph3] = useState("");
  const [smImage, setSmImage] = useState<File | null>(null);
  const [lgImage, setLgImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !smImage || !lgImage) {
      alert("Please fill all required fields (Title + Images)");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content1", content1);
    formData.append("content2", content2);
    formData.append("paragraph1", paragraph1);
    formData.append("paragraph2", paragraph2);
    formData.append("paragraph3", paragraph3);
    formData.append("smImage", smImage);
    formData.append("lgImage", lgImage);

    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/articles", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to create article");
      alert("Article created successfully!");
      // prefer parent callback if provided so it can refresh data
      if (onSuccess) {
        onSuccess();
      } else {
        onClose();
      }
    } catch (err) {
      console.error(err);
      alert("Error creating article");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute inset-0  bg-white/95 backdrop-blur-sm flex flex-col p-6 overflow-y-auto z-50">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-bold mb-4 text-gray-800">
          Create New Article
        </h2>
          <button
              onClick={onClose}
              className="text-black text-xl hover:text-red-500 transition-colors font-bold"
            >
              ✕
            </button>
      </div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mb-3 rounded-lg w-full"
      />

      <div className="flex flex-col md:flex-row gap-4 mb-4 ">
        {/* small image */}

        <div className="flex flex-col items-center">
          <label className="text-sm font-semibold mb-2">Small Image</label>

          <div className="relative w-[180px] h-[120px] border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center overflow-hidden">
            {smImage ? (
              <Image
                src={URL.createObjectURL(smImage)}
                alt="Small Preview"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            ) : null}

            <input
              type="file"
              id="uploadSmImage"
              accept="image/*"
              onChange={(e) => setSmImage(e.target.files?.[0] || null)}
              className="hidden"
            />

            <label
              htmlFor="uploadSmImage"
              className="absolute bg-black/60 text-white px-4 py-2 rounded-lg text-sm cursor-pointer hover:bg-black/80 transition"
            >
              {smImage ? "Change Image" : "Upload"}
            </label>
          </div>
        </div>

        <textarea
          placeholder="Content 1"
          value={content1}
          onChange={(e) => setContent1(e.target.value)}
          className="border p-2 text-sm rounded-lg w-full min-h-[120px]"
        />
        <textarea
          placeholder="Content 2"
          value={content2}
          onChange={(e) => setContent2(e.target.value)}
          className="border p-2 text-sm rounded-lg w-full min-h-[120px]"
        />
      </div>

      <div className="flex justify-center mb-4">
        <div className="relative w-[600px] h-[120px] border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center overflow-hidden">
          {lgImage ? (
            <Image
              src={URL.createObjectURL(lgImage)}
              alt="Large Preview"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          ) : null}

          <input
            type="file"
            id="uploadLgImage"
            accept="image/*"
            onChange={(e) => setLgImage(e.target.files?.[0] || null)}
            className="hidden"
          />

          <label
            htmlFor="uploadLgImage"
            className="absolute bg-black/60 text-white px-4 py-2 rounded-lg text-sm cursor-pointer hover:bg-black/80 transition"
          >
            {lgImage ? "Change Image" : "Upload"}
          </label>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <textarea
          placeholder="Paragraph 1"
          value={paragraph1}
          onChange={(e) => setParagraph1(e.target.value)}
          className="border p-1 text-sm  rounded-lg w-full min-h-[150px]"
        />
        <textarea
          placeholder="Paragraph 2"
          value={paragraph2}
          onChange={(e) => setParagraph2(e.target.value)}
          className="border p-1  text-sm rounded-lg w-full min-h-[150px]"
        />
        <textarea
          placeholder="Paragraph 3"
          value={paragraph3}
          onChange={(e) => setParagraph3(e.target.value)}
          className="border p-1 text-sm rounded-lg w-full min-h-[150px]"
        />
      </div>

      <div className="flex justify-start mt-4">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`px-4 py-2 rounded-lg text-white ${
            loading ? "bg-gray-500" : "bg-[#101828] hover:bg-green-700"
          }`}
        >
          {loading ? "Creating..." : "Create"}
        </button>
      </div>
    </div>
  );
}
