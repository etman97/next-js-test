import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://blog-q-gvcyhxgqehbrh5b7.canadacentral-01.azurewebsites.net/api/Auth/login",
      {
        method: "POST",
        headers: {
          "accept": "application/json",          
          "Content-Type": "application/json",    
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}
