"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

interface Article {
  id: number;
  title: string;
  imageUrl1: string;
  imageUrl2: string;
  contentText1: string;
  contentText2: string;
  contentText3: string;
  contentText4: string;
  contentText5: string;
}

interface BlogCardsProps {
  articleId: number;
  onClose: () => void;
  onUpdate?: () => void; 
}

export default function BlogCards({ articleId, onClose, onUpdate }: BlogCardsProps) {
  const [article, setArticle] = useState<Article | null>(null);
  const [editedArticle, setEditedArticle] = useState<Article | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [imageFile1, setImageFile1] = useState<File | null>(null);
  const [imageFile2, setImageFile2] = useState<File | null>(null);

  // admin 
  useEffect(() => {
    const token = Cookies.get("adminAuth");
    if (token) setIsAdmin(true);
  }, []);

  // Fetch blogs
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://blog-q-gvcyhxgqehbrh5b7.canadacentral-01.azurewebsites.net/api/Blogs/${articleId}`,
          {
            headers: { Accept: "application/json" },
          }
        );

        if (!res.ok) throw new Error(`Failed to fetch blog: ${res.status}`);
        const data = await res.json();

        setArticle(data);
        setEditedArticle(data);
      } catch (err) {
        console.error("Fetch error:", err);
        alert("Error loading article");
      } finally {
        setLoading(false);
      }
    };

    if (articleId) fetchBlog();
  }, [articleId]);

  // Handle changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (editedArticle) {
      setEditedArticle({ ...editedArticle, [name]: value });
    }
  };

  // Handle image 
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, imageNumber: number) => {
    const file = e.target.files?.[0];
    if (file) {
      if (imageNumber === 1) {
        setImageFile1(file);
      } else {
        setImageFile2(file);
      }
    }
  };

  // Update article
  const handleUpdate = async () => {
    if (!editedArticle) return;
    try {
      const token = Cookies.get("adminAuth");
      
      const formData = new FormData();
      formData.append('Id', editedArticle.id.toString());
      formData.append('Title', editedArticle.title);
      formData.append('IsPublished', 'true');
      formData.append('ContentText1', editedArticle.contentText1 || '');
      formData.append('ContentText2', editedArticle.contentText2 || '');
      formData.append('ContentText3', editedArticle.contentText3 || '');
      formData.append('ContentText4', editedArticle.contentText4 || '');
      formData.append('ContentText5', editedArticle.contentText5 || '');
      formData.append('RemoveImage1', 'false');
      formData.append('RemoveImage2', 'false');

      if (imageFile1) {
        formData.append('ImageFile1', imageFile1);
      }
      if (imageFile2) {
        formData.append('ImageFile2', imageFile2);
      }

      const res = await fetch(
        `https://blog-q-gvcyhxgqehbrh5b7.canadacentral-01.azurewebsites.net/api/Blogs/${articleId}`,
        {
          method: "PUT",
          headers: {
            "Accept": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!res.ok) throw new Error(`Update failed: ${res.status}`);
      
      alert("Article updated successfully");
      setIsEditing(false);
      setImageFile1(null);
      setImageFile2(null);
      
      // Refresh article data
      const refetchRes = await fetch(
        `https://blog-q-gvcyhxgqehbrh5b7.canadacentral-01.azurewebsites.net/api/Blogs/${articleId}`,
        {
          headers: { Accept: "application/json" },
        }
      );
      if (refetchRes.ok) {
        const updated = await refetchRes.json();
        setArticle(updated);
        setEditedArticle(updated);
      }
      
      if (onUpdate) {
        onUpdate();
      }
      
    } catch (err) {
      console.error("Update error:", err);
      alert("Error updating article");
    }
  };

  // Delete blog
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this article?")) return;
    try {
      const token = Cookies.get("adminAuth");
      const res = await fetch(
        `https://blog-q-gvcyhxgqehbrh5b7.canadacentral-01.azurewebsites.net/api/Blogs/${articleId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
      alert("Article deleted successfully");
      
      if (onUpdate) {
        onUpdate();
      }
      
      onClose();
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error deleting article");
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl animate-fadeIn">
          <div className="text-gray-600 font-medium">Loading article...</div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 transition-all duration-300">
        <div className="bg-white p-8 rounded-2xl shadow-xl animate-fadeIn">
          <div className="text-red-600 font-semibold">Article not found</div>
          <button
            onClick={onClose}
            className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 ">
      <div className="relative w-[90%] md:w-[75%] h-[70%]">
        <div className="relative flex flex-col bg-white w-full h-full rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-300 bg-gray-50 flex-shrink-0">
            <h1 className="text-black text-lg font-bold truncate">
              {article.title}
            </h1>
            <button
              onClick={onClose}
              className="text-black text-xl hover:text-red-500 transition-colors font-bold"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto flex-1 p-5 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
              {article.imageUrl1 && (
                <div className="w-full h-[180px] rounded-xl overflow-hidden shadow-md col-span-1">
                  <img
                    src={article.imageUrl1.replace(
                      "https://localhost:7036",
                      "https://blog-q-gvcyhxgqehbrh5b7.canadacentral-01.azurewebsites.net"
                    )}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              )}

              {article.contentText1 && (
                <div className="text-gray-700 text-sm leading-relaxed col-span-1  max-h-[180px]">
                  <p>{article.contentText1}</p>
                </div>
              )}

              {article.contentText2 && (
                <div className="text-gray-700 text-sm leading-relaxed col-span-1 max-h-[180px]">
                  <p>{article.contentText2}</p>
                </div>
              )}
            </div>

            {article.imageUrl2 && (
              <div className="w-[90%] mx-auto h-[250px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={article.imageUrl2.replace(
                    "https://localhost:7036",
                    "https://blog-q-gvcyhxgqehbrh5b7.canadacentral-01.azurewebsites.net"
                  )}
                  alt={article.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            )}

            <div className="space-y-4 text-gray-700 text-sm leading-relaxed flex gap-16 px-10">
              {[article.contentText3, article.contentText4, article.contentText5]
                .filter(Boolean)
                .map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
            </div>

            {/* update and delete */}
            {isAdmin && !isEditing && (
              <div className="flex justify-center mt-6 gap-3">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg transition"
                >
                  Edit
                </button>

                <button
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-400 text-white font-semibold px-6 py-2 rounded-lg transition"
                >
                  Delete
                </button>
              </div>
            )}
          </div>

          {/* Edit Mode */}
          {isEditing && editedArticle && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col p-6 overflow-y-auto z-50 animate-fadeIn">
              <h2 className="text-lg font-bold mb-6 text-gray-800 text-center">
                Edit Article
              </h2>

              {/* Title Input - NEW */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={editedArticle.title || ""}
                  onChange={handleInputChange}
                  placeholder="Article Title"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start mb-10">
                <div className="w-full h-[220px] rounded-xl overflow-hidden shadow-md col-span-1 flex flex-col items-center justify-center bg-gray-100 relative">
                  {editedArticle.imageUrl1 ? (
                    <img
                      src={editedArticle.imageUrl1.replace(
                        "https://localhost:7036",
                        "https://blog-q-gvcyhxgqehbrh5b7.canadacentral-01.azurewebsites.net"
                      )}
                      alt="Image 1"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <span className="text-gray-500">No Image 1</span>
                  )}
                  <label className="absolute bottom-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-lg cursor-pointer hover:bg-blue-600 transition text-sm">
                    Upload
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, 1)}
                      className="hidden "
                    />
                  </label>
                  {imageFile1 && (
                    <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                      New image selected
                    </span>
                  )}
                </div>

                <textarea
                  name="contentText1"
                  value={editedArticle.contentText1 || ""}
                  onChange={handleInputChange}
                  placeholder="Paragraph 1"
                  className="border p-1 rounded-lg w-full h-[200px] focus:outline-none focus:ring-2 focus:ring-yellow-400 col-span-1 text-sm"
                />

                <textarea
                  name="contentText2"
                  value={editedArticle.contentText2 || ""}
                  onChange={handleInputChange}
                  placeholder="Paragraph 2"
                  className="border p-1 rounded-lg w-full h-[200px] focus:outline-none focus:ring-2 focus:ring-yellow-400 col-span-1 text-sm"
                />
              </div>

              <div className="w-[90%] mx-auto h-[250px] rounded-xl overflow-hidden shadow-lg mb-10 bg-gray-100 flex items-center justify-center relative">
                {editedArticle.imageUrl2 ? (
                  <img
                    src={editedArticle.imageUrl2.replace(
                      "https://localhost:7036",
                      "https://blog-q-gvcyhxgqehbrh5b7.canadacentral-01.azurewebsites.net"
                    )}
                    alt="Image 2"
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <span className="text-gray-500">No Image 2</span>
                )}
                <label className="absolute bottom-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-lg cursor-pointer hover:bg-blue-600 transition text-sm">
                  Upload
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, 2)}
                    className="hidden"
                  />
                </label>
                {imageFile2 && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                    New image selected
                  </span>
                )}
              </div>

              <div className="space-y-5 flex flex-col lg:flex-row gap-4 lg:gap-10">
                {[3, 4, 5].map((num) => (
                  <textarea
                    key={num}
                    name={`contentText${num}`}
                    value={editedArticle[`contentText${num}` as keyof Article] || ""}
                    onChange={handleInputChange}
                    placeholder={`Paragraph ${num}`}
                    className="border p-1 rounded-lg w-full lg:h-[200px] focus:outline-none focus:ring-2 focus:ring-yellow-400 col-span-1 text-sm"
                  />
                ))}
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-5 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}