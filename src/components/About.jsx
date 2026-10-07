"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function About() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Start");
  }, []);

  useEffect(() => {
    console.log("Hello");
    console.log(count);

    return () => {
      console.log("초기화");
    };
  }, [count]);

  return (
    <div className="max-w-7xl mx-auto px-4 w-full py-8">
      <div className="mb-4">About 페이지</div>

      <div className="flex gap-3 mb-4">
        <Link
          href="/about/member"
          className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium text-sm px-4 py-2 rounded transition-colors"
        >
          Member
        </Link>
        <Link
          href="/about/location"
          className="border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white font-medium text-sm px-4 py-2 rounded transition-colors"
        >
          Location
        </Link>
      </div>

      <button
        className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium text-sm px-4 py-2 rounded transition-colors active:bg-blue-700"
        onClick={() => setCount(count + 1)}
      >
        버튼 {count}
      </button>
    </div>
  );
}
