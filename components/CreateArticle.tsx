// components/CreateBlog.tsx
"use client";
import { useState } from "react";

interface CreateBlogProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function CreateBlog({ onClose, onSuccess }: CreateBlogProps) {
  const [formData, setFormData] = useState({
    title: "",
    contentText1: "",
    contentText2: "",
    contentText3: "",
    contentText4: "",
    contentText5: "",
  });
  const [smImage, setSmImage] = useState<File | null>(null);
  const [lgImage, setLgImage] = useState<File | null>(null);
  const [smPreview, setSmPreview] = useState<string | null>(null);
  const [lgPreview, setLgPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSmImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSmImage(file);
    setSmPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleLgImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setLgImage(file);
    setLgPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !smImage || !lgImage) {
      alert("Please fill all required fields (Title + Images)");
      return;
    }

    try {
      setLoading(true);
      const submitFormData = new FormData();
      
      // Add all text fields
      submitFormData.append("Title", formData.title);
      submitFormData.append("ContentText1", formData.contentText1);
      submitFormData.append("ContentText2", formData.contentText2);
      submitFormData.append("ContentText3", formData.contentText3);
      submitFormData.append("ContentText4", formData.contentText4);
      submitFormData.append("ContentText5", formData.contentText5);
      
      // Add images
      submitFormData.append("ImageFile1", smImage);
      submitFormData.append("ImageFile2", lgImage);
      submitFormData.append("IsPublished", "true");

      console.log("Submitting blog...");

      const res = await fetch("/api/blogs", {
        method: "POST",
        body: submitFormData,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || `Failed to create blog: ${res.status}`);
      }

      alert("Blog created successfully!");
      onSuccess();
      onClose();
    } catch (err: any) {
      console.error("Create Blog Error:", err);
      alert("Error creating blog: " + (err.message || "Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute inset-0 bg-white/95 flex flex-col p-6 overflow-y-auto z-50">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-lg font-bold text-gray-800">Create New Article</h2>
        <button
          onClick={onClose}
          className="text-black text-xl hover:text-red-500 transition font-bold"
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title *"
          value={formData.title}
          onChange={handleInputChange}
          className="border p-2 rounded-lg w-full"
          required
        />

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col items-center">
            <label className="text-sm font-semibold mb-2">Small Image *</label>
            <div className="relative w-[180px] h-[120px] border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center overflow-hidden">
              {smPreview && (
                <img
                  src={smPreview}
                  alt="Small preview"
                  className="rounded-lg w-full h-full object-cover shadow-md"
                />
              )}
              <input
                type="file"
                id="uploadSmImage"
                accept="image/*"
                onChange={handleSmImageChange}
                className="hidden"
                required
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
            name="contentText1"
            placeholder="Content 1"
            value={formData.contentText1}
            onChange={handleInputChange}
            className="border p-2 text-sm rounded-lg w-full min-h-[120px]"
          />
          <textarea
            name="contentText2"
            placeholder="Content 2"
            value={formData.contentText2}
            onChange={handleInputChange}
            className="border p-2 text-sm rounded-lg w-full min-h-[120px]"
          />
        </div>

        <div className="flex flex-col items-center">
          <label className="text-sm font-semibold mb-2">Large Image *</label>
          <div className="relative w-[600px] h-[200px] border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center overflow-hidden">
            {lgPreview && (
              <img
                src={lgPreview}
                alt="Large preview"
                className="rounded-lg w-full h-full object-cover shadow-md"
              />
            )}
            <input
              type="file"
              id="uploadLgImage"
              accept="image/*"
              onChange={handleLgImageChange}
              className="hidden"
              required
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
            name="contentText3"
            placeholder="Paragraph 1"
            value={formData.contentText3}
            onChange={handleInputChange}
            className="border p-2 text-sm rounded-lg w-full min-h-[150px]"
          />
          <textarea
            name="contentText4"
            placeholder="Paragraph 2"
            value={formData.contentText4}
            onChange={handleInputChange}
            className="border p-2 text-sm rounded-lg w-full min-h-[150px]"
          />
          <textarea
            name="contentText5"
            placeholder="Paragraph 3"
            value={formData.contentText5}
            onChange={handleInputChange}
            className="border p-2 text-sm rounded-lg w-full min-h-[150px]"
          />
        </div>

        <div className="flex justify-start gap-4 mt-4">
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 rounded-lg text-white ${
              loading ? "bg-gray-500" : "bg-[#101828] hover:bg-green-700"
            }`}
          >
            {loading ? "Creating..." : "Create Blog"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}