"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TabContent from "./TabContent";
import { useCartStore } from "@/state/cartStore";
import { useShoes } from "@/context/ShoesContext";

export default function Detail({ id }) {
  const { shoes } = useShoes();
  const [tab, setTab] = useState(0);
  const [alert, setAlert] = useState(true);
  const [fade, setFade] = useState("");
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);

  const selproduct = shoes.find((x) => x.id === Number(id));

  useEffect(() => {
    const timer = setTimeout(() => setAlert(false), 2000);
    const aniTimer = setTimeout(() => setFade("end"), 50);

    return () => {
      clearTimeout(timer);
      clearTimeout(aniTimer);
    };
  }, []);

  if (!selproduct) {
    return (
      <div className="max-w-7xl mx-auto px-4 w-full py-16 text-center">
        상품을 찾을 수 없습니다.
      </div>
    );
  }

  const handleOrder = () => {
    addItem({
      id: selproduct.id,
      imgUrl: selproduct.imgUrl,
      item: selproduct.title,
      price: selproduct.price,
      amount: 1,
    });

    if (window.confirm("장바구니로 이동하시겠습니까?")) {
      router.push("/cart");
    }
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 w-full py-8 start ${fade}`}>
      {alert && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg font-medium w-full text-center">
          2초이내 구매시 할인
        </div>
      )}

      <div className="py-5 text-gray-500">
        <button
          className="text-white text-[30px] w-full py-[100px] border border-[#ccc] bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          지금 구매하면 10% 할인
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <img src={selproduct.imgUrl} alt="상품 이미지" className="w-full h-auto" />
        </div>

        <div className="pt-5 md:pt-0 space-y-4">
          <h4 className="text-2xl font-bold text-gray-900">
            {selproduct.title}
          </h4>
          <p className="text-gray-600 leading-relaxed">
            {selproduct.content}
          </p>
          <p className="text-xl font-semibold text-gray-900">
            {selproduct.price}원
          </p>

          <button
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-md active:scale-95 transform"
            onClick={handleOrder}
          >
            주문하기
          </button>
        </div>
      </div>

      <ul className="flex border-b border-gray-200 list-none p-0 m-0">
        {[0, 1, 2].map((item) => (
          <li
            key={item}
            onClick={() => setTab(item)}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 -mb-[1px] border-b-2 cursor-pointer select-none ${
              tab === item
                ? "border-blue-600 text-blue-600 font-semibold"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            버튼{item}
          </li>
        ))}
      </ul>

      <TabContent tab={tab} />
    </div>
  );
}
