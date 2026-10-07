"use client";

import { useEffect, useState } from "react";
import { useShoes } from "@/context/ShoesContext";

export default function TabContent({ tab }) {
  const [fade, setFade] = useState("");
  const { remain, shoes } = useShoes();

  useEffect(() => {
    const aniTimer = setTimeout(() => setFade("end"), 50);

    return () => {
      setFade("");
      clearTimeout(aniTimer);
    };
  }, [tab]);

  const contents = [
    <div key="0">
      내용0
      <br />
      {remain[0]} : {shoes[0]?.title}
    </div>,
    <div key="1">내용1</div>,
    <div key="2">내용2</div>,
  ];

  return <div className={`text-center start ${fade}`}>{contents[tab]}</div>;
}
