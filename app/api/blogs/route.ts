 import { NextResponse } from "next/server";

const BASE_URL = "https://blog-q-gvcyhxgqehbrh5b7.canadacentral-01.azurewebsites.net/api/Blogs";

 export async function GET() {
  try {
    console.log('Fetching blogs from:', BASE_URL);
    
    const res = await fetch(BASE_URL, {
      headers: { 
        "Accept": "application/json",
      },
      cache: 'no-store'
    });
    
    console.log('GET Response status:', res.status);
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error("GET Error:", res.status, errorText);
      throw new Error(`Failed to fetch blogs: ${res.status}`);
    }
    
    const data = await res.json();
    console.log('Successfully fetched blogs:', data.length || 0);
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("GET Route Error:", err);
    return NextResponse.json(
      { message: err.message || "Failed to fetch blogs" }, 
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    console.log("=== FormData Received ===");
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        console.log(`${key}: File - ${value.name}, ${value.type}, ${value.size} bytes`);
      } else {
        console.log(`${key}: ${value}`);
      }
    }

    console.log("Sending POST request to backend...");
    
    const res = await fetch(BASE_URL, {
      method: "POST",
      body: formData,
    });

    console.log("Backend response status:", res.status);
    
    if (!res.ok) {
      let errorText;
      try {
        errorText = await res.text();
      } catch {
        errorText = "Could not read error response";
      }
      console.error("Backend Error:", res.status, errorText);
      throw new Error(`Failed to create blog: ${res.status}`);
    }

    const result = await res.json();
    console.log("Blog created successfully:", result);
    
    return NextResponse.json(result, { status: 201 });
    
  } catch (err: any) {
    console.error("POST Route Error:", err);
    return NextResponse.json(
      { message: err.message || "Failed to create blog" }, 
      { status: 500 }
    );
  }
}