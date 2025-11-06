const BASE_URL = "https://blog-q-gvcyhxgqehbrh5b7.canadacentral-01.azurewebsites.net/api/Blogs";

export async function getAllBlogs() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 
        "Accept": "application/json",
      },
      next: {
        revalidate: 3600 // revalidate every hour
      }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.status}`);
    }
    
    return await res.json();
  } catch (err: any) {
    console.error("Failed to fetch blogs:", err);
    return [];
  }
}