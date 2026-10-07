"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Product({ shoes }) {
  const { id, title, imgUrl, price } = shoes;
  const router = useRouter();

  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={() => router.push(`/detail/${id}`)}
    >
      <img src={imgUrl} alt="상품1" className="w-4/5 h-auto rounded-lg mb-3" />
      <h4 className="text-lg font-bold text-gray-900">{title}</h4>
      <p className="text-gray-500 mt-1">{price}</p>
    </div>
  );
}
