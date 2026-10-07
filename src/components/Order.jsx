"use client";

import { useCartStore } from "@/state/cartStore";

export default function Order() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="max-w-7xl mx-auto px-4 w-full py-8">
      <h4 className="text-2xl font-bold text-gray-900 tracking-tight mb-6">
        주문하기 페이지
      </h4>

      <button
        className="bg-green-500 hover:bg-green-600 text-white font-semibold text-base py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
        onClick={() => addItem({ id: 3, item: "오렌지", amount: 1 })}
      >
        오렌지 주문하기
      </button>
    </div>
  );
}
