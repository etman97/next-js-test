"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Image from "next/image";


export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const ADMIN_USER = "admin";
    const ADMIN_PASS = "12345";

    if (username === ADMIN_USER && password === ADMIN_PASS) {

      Cookies.set("adminAuth", "true", { expires: 1 }); 
      router.push("/"); 
        } else {
      setError(" Username or password is incorrect");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
       <Image src="/not-found.png" fill className='h-screen w-screen absolute z-20'  alt='wood-background' />
      
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-md w-[350px] z-50"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Admin Login</h1>

        {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
