"use client";

import { useState } from "react";
import axios from "axios";
import Product from "./Product";
import Title from "./Title";
import Nike from "./Nike";
import data2 from "@/db/data2";
import { useShoes } from "@/context/ShoesContext";

export default function Home() {
  const { shoes, setShoes } = useShoes();
  const [nike, setNike] = useState(data2);
  const [count, setCount] = useState(1);

  const sort = (index) => {
    let copy = [];

    if (index === "title") {
      copy = [...shoes].sort((a, b) => (a.title > b.title ? 1 : -1));
    } else if (index === "asc") {
      copy = [...shoes].sort((a, b) => (a.price > b.price ? 1 : -1));
    } else if (index === "desc") {
      copy = [...shoes].sort((a, b) => (a.price < b.price ? 1 : -1));
    }

    setShoes(copy);
  };

  const moreNike = async () => {
    try {
      if (count === 1) {
        const result = await axios.get(
          "https://jungwoonan.github.io/react_data/nike2.json"
        );
        setNike((prev) => [...prev, ...result.data]);
        setCount(2);
      } else if (count === 2) {
        const result = await axios.get(
          "https://jungwoonan.github.io/react_data/nike3.json"
        );
        setNike((prev) => [...prev, ...result.data]);
        setCount(3);
      } else {
        alert("더이상 상품이 없습니다.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="slider" />

      <Title tindex="1" />

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <button
          className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium text-sm px-4 py-2 rounded transition-colors active:bg-blue-700"
          onClick={() => sort("title")}
        >
          이름순 정렬
        </button>

        <button
          className="border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white font-medium text-sm px-4 py-2 rounded transition-colors active:bg-gray-600"
          onClick={() => sort("asc")}
        >
          낮은가격순 정렬
        </button>

        <button
          className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium text-sm px-4 py-2 rounded transition-colors active:bg-green-700"
          onClick={() => sort("desc")}
        >
          높은가격순 정렬
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {shoes.map((shoe) => (
            <Product shoes={shoe} key={shoe.id} />
          ))}
        </div>
      </div>

      <Title tindex="2" />

      <div className="flex justify-center my-6">
        <button
          className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors active:bg-green-700 shadow-sm"
          onClick={moreNike}
        >
          + 3개 상품 더 보기
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {nike.map((item) => (
            <Nike nike={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}
