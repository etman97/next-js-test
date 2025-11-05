  "use client";
  import Image from "next/image";
  import { useRouter } from "next/navigation";
  import { useEffect, useState } from "react";
  import Cookies from "js-cookie";

  interface Article {
    title?: string;
    blogImage?: string;
    content1?: string;
    content2?: string;
    diagram?: string;
    paragraph1?: string;
    paragraph2?: string;
    paragraph3?: string;
  }
  
  export default function BlogCards({ article, onClose }: { article: Article; onClose: () => void }) {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedArticle, setEditedArticle] = useState(article);
    const router = useRouter();

    useEffect(() => {
      const isAuth = Cookies.get("adminAuth");
      if (isAuth === "true") {
        setIsAdmin(true);
      }
    }, []);

    const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setEditedArticle({ ...editedArticle, [name]: value });
    };

    const handleImageUpload = (
      e: React.ChangeEvent<HTMLInputElement>,
      field: string
    ) => {
      const file = e.target.files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setEditedArticle({ ...editedArticle, [field]: imageUrl });
      }
    };

    const handleSave = () => {
      console.log("✅ Updated Article:", editedArticle);
      setIsEditing(false);
    };

    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
        <div className="relative flex flex-col bg-white w-[600px] min-h-[70vh] max-h-[70vh] rounded-2xl shadow-lg overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b border-gray-300 flex-shrink-0">
            <h1 className="text-black text-lg font-bold">
              {editedArticle.title || "Blog address"}
            </h1>
            <button
              onClick={onClose}
              className="text-black text-xl hover:text-red-500 transition-colors font-bold"
            >
              ✕
            </button>
          </div>

          <div className="overflow-y-auto flex-1">
            <div className="p-4">
          
              <div className="flex gap-10 mb-6">
                <div className="w-[180px] h-[120px] flex-shrink-0">
                  <Image
                    src={editedArticle.blogImage || "/blog.png"}
                    width={300}
                    height={250}
                    alt="blog"
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-black text-xs leading-relaxed">
                    {editedArticle.content1 ||
                      "Lorem ipsum dolor sit amet consectetur..."}
                  </p>
                </div>

                <div className="flex-1">
                  <p className="text-black text-xs leading-relaxed">
                    {editedArticle.content2 ||
                      "Lorem ipsum dolor sit amet consectetur..."}
                  </p>
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <div className="w-[600px] h-[120px]">
                  <Image
                    src={editedArticle.diagram || "/diagram.png"}
                    width={600}
                    height={120}
                    alt="diagram"
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex gap-8 mb-4">
                <p className="text-black text-xs leading-relaxed">
                  {editedArticle.paragraph1}
                </p>
                <p className="text-black text-xs leading-relaxed">
                  {editedArticle.paragraph2}
                </p>
                <p className="text-black text-xs leading-relaxed">
                  {editedArticle.paragraph3}
                </p>
              </div>

              {isAdmin && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-gray-900 px-4 py-2 rounded-xl text-white text-sm mt-3 hover:bg-gray-700"
                >
                  Edit
                </button>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col p-6 overflow-y-auto">
              <h2 className="text-lg font-bold mb-4 text-gray-800">Edit Blog</h2>

              <input
                name="title"
                value={editedArticle.title}
                onChange={handleInputChange}
                placeholder="Title"
                className="border p-2 mb-3 rounded-lg w-full"
              />

              {/* Upload buttons */}
              <div className="flex  gap-2 mb-4">
                <div className="flex flex-col items-center gap-1 ">
                  <div className="flex flex-col">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, "blogImage")}
                      className="hidden"
                      id="uploadBlogImage"
                    />

                    <div className="flex flex-col items-center justify-center">
                      {editedArticle.blogImage && (
                        <Image
                          src={editedArticle.blogImage}
                          width={140}
                          height={120}
                          alt="blog preview"
                          className="rounded-md"
                        />
                      )}
                      <label
                        htmlFor="uploadBlogImage"
                        className="cursor-pointer bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700 text-sm"
                      >
                        Upload Photo
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-1 ">
                  <div className="flex flex-col">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, "diagram")}
                      className="hidden"
                      id="uploadDiagram"
                    />

                    <div className="flex flex-col items-center justify-center">
                      {editedArticle.diagram && (
                        <Image
                          src={editedArticle.diagram}
                          width={300}
                          height={180}
                          alt="diagram preview"
                          className="rounded-md"
                        />
                      )}
                      <label
                        htmlFor="uploadBlogImage"
                        className="cursor-pointer bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-gray-700 text-sm"
                      >
                        Upload Photo
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mb-4">
                <textarea
                  name="content1"
                  value={editedArticle.content1}
                  onChange={handleInputChange}
                  placeholder="Content 1"
                  className="border p-2 rounded-lg w-full min-h-[200px]"
                />

                <textarea
                  name="content2"
                  value={editedArticle.content2}
                  onChange={handleInputChange}
                  placeholder="Content 2"
                  className="border p-2 rounded-lg w-full min-h-[200px]"
                />
              </div>

              <div className="flex gap-6">
                <textarea
                  name="paragraph1"
                  value={editedArticle.paragraph1}
                  onChange={handleInputChange}
                  placeholder="Paragraph 1"
                  className="border p-2 rounded-lg w-full min-h-[200px]"
                />
                <textarea
                  name="paragraph2"
                  value={editedArticle.paragraph2}
                  onChange={handleInputChange}
                  placeholder="Paragraph 2"
                  className="border p-2 rounded-lg w-full min-h-[200px]"
                />
                <textarea
                  name="paragraph3"
                  value={editedArticle.paragraph3}
                  onChange={handleInputChange}
                  placeholder="Paragraph 3"
                  className="border p-2 rounded-lg w-full min-h-[200px]"
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
