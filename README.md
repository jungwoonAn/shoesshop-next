# 👟 Shoes Shop - Next.js

React + Vite로 제작한 신발 쇼핑몰 프로젝트를 **Next.js App Router** 기반으로 변환한 프로젝트입니다.

상품 목록, 상품 상세, 장바구니, About 페이지 등의 기능을 구현했으며, 기존 React Router 기반의 라우팅을 Next.js의 **App Router** 방식으로 변경했습니다.

---

## 📌 Project

**Shoes Shop**

신발 상품을 조회하고 장바구니에 상품을 추가할 수 있는 간단한 쇼핑몰 웹 애플리케이션입니다.

기존 React + Vite 프로젝트를 Next.js로 마이그레이션하면서 다음과 같은 변경 사항을 적용했습니다.

* React Router → Next.js App Router
* Vite → Next.js
* React Router `Link` → Next.js `Link`
* `useNavigate()` → `useRouter()`
* `useParams()` → Next.js Dynamic Route
* React Context → Next.js Provider
* Zustand 상태관리 유지 및 Next.js 환경에 맞게 정리
* styled-components → Tailwind CSS
* 이미지 경로를 Next.js `public` 폴더 기준으로 변경

---

## 🖥️ Preview

### Home

상품 목록을 확인할 수 있으며 상품 정렬 기능을 제공합니다.

### Product Detail

상품을 선택하면 상품 상세 정보를 확인할 수 있습니다.

### Cart

상품을 장바구니에 추가하고 수량을 관리할 수 있습니다.

### About

쇼핑몰 소개 및 멤버, 위치 정보를 확인할 수 있습니다.

---

## 🛠️ Tech Stack

### Frontend

* Next.js
* React
* JavaScript
* Tailwind CSS

### State Management

* Zustand
* React Context API

### Development

* VS Code
* Git
* GitHub
* npm

---

## 📂 Project Structure

```text
shoesshop-next/
│
├── public/
│   └── img/
│       ├── bg.jpg
│       ├── shoes1.jpg
│       ├── shoes2.jpg
│       ├── shoes3.jpg
│       ├── ...
│       └── nike/
│           ├── nike1.jpg
│           ├── nike2.jpg
│           └── nike3.jpg
│
├── src/
│   │
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── not-found.jsx
│   │   │
│   │   ├── detail/
│   │   │   └── [id]/
│   │   │       └── page.jsx
│   │   │
│   │   ├── about/
│   │   │   ├── layout.jsx
│   │   │   ├── page.jsx
│   │   │   ├── member/
│   │   │   │   └── page.jsx
│   │   │   └── location/
│   │   │       └── page.jsx
│   │   │
│   │   └── cart/
│   │       └── page.jsx
│   │
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Detail.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── Nike.jsx
│   │   ├── Order.jsx
│   │   ├── Product.jsx
│   │   ├── TabContent.jsx
│   │   └── Title.jsx
│   │
│   ├── context/
│   │   └── ShoesContext.jsx
│   │
│   ├── db/
│   │   ├── data.js
│   │   └── data2.js
│   │
│   └── state/
│       ├── cartStore.js
│       └── useStore.js
│
├── .gitignore
├── jsconfig.json
├── package.json
└── postcss.config.mjs
```

---

## 🚀 Getting Started

### 1. Clone

```bash
git clone https://github.com/jungwoonAn/shoesshop-next.git
```

프로젝트 폴더로 이동합니다.

```bash
cd shoesshop-next
```

---

### 2. Install

필요한 패키지를 설치합니다.

```bash
npm install
```

---

### 3. Run Development Server

```bash
npm run dev
```

브라우저에서 다음 주소로 접속합니다.

```text
http://localhost:3000
```

---

## 📜 Available Scripts

### Development

```bash
npm run dev
```

개발 서버를 실행합니다.

### Build

```bash
npm run build
```

프로덕션 빌드를 생성합니다.

### Production

```bash
npm start
```

빌드된 Next.js 애플리케이션을 실행합니다.

### Lint

```bash
npm run lint
```

ESLint를 실행합니다.

---

## 🧭 Routing

Next.js App Router의 폴더 기반 라우팅을 사용합니다.

| URL               | 설명     |
| ----------------- | ------ |
| `/`               | 메인 페이지 |
| `/detail/1`       | 상품 상세  |
| `/detail/2`       | 상품 상세  |
| `/cart`           | 장바구니   |
| `/about`          | About  |
| `/about/member`   | 멤버 소개  |
| `/about/location` | 위치 정보  |

상품 상세 페이지는 Dynamic Route를 사용합니다.

```text
src/app/detail/[id]/page.jsx
```

따라서 다음과 같이 접근할 수 있습니다.

```text
/detail/1
/detail/2
/detail/3
```

---

## 🛒 Main Features

### 상품 목록

* 신발 상품 목록 출력
* 상품 이미지 출력
* 상품 가격 표시
* 상품 클릭 시 상세 페이지 이동

### 상품 정렬

상품 가격 등을 기준으로 상품을 정렬할 수 있습니다.

### 상품 상세

상품의 상세 정보를 확인할 수 있습니다.

Dynamic Route를 사용하여 상품 ID에 따라 다른 상품 정보를 표시합니다.

```text
/detail/[id]
```

### 장바구니

* 상품 추가
* 상품 삭제
* 상품 수량 관리
* 장바구니 상품 목록 확인

장바구니 상태는 Zustand를 사용하여 관리합니다.

### About

```text
/about
/about/member
/about/location
```

중첩 라우팅 구조를 사용합니다.

---

## 🔄 React Router → Next.js

기존 React + Vite 프로젝트에서는 React Router를 사용했습니다.

### 기존

```jsx
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
```

Next.js에서는 App Router를 사용합니다.

```text
src/app/
├── page.jsx
├── cart/
│   └── page.jsx
├── detail/
│   └── [id]/
│       └── page.jsx
└── about/
    ├── page.jsx
    ├── member/
    │   └── page.jsx
    └── location/
        └── page.jsx
```

폴더 구조 자체가 URL이 됩니다.

---

## 🔗 Navigation

기존 React Router의 `Link` 대신 Next.js의 `Link`를 사용합니다.

```jsx
import Link from "next/link";

<Link href="/cart">
  장바구니
</Link>
```

프로그램 방식의 페이지 이동은 `useRouter()`를 사용합니다.

```jsx
"use client";

import { useRouter } from "next/navigation";

const router = useRouter();

router.push("/cart");
```

---

## 🗃️ State Management

프로젝트에서는 Zustand를 사용하여 장바구니 등의 상태를 관리합니다.

```text
src/state/
├── cartStore.js
└── useStore.js
```

예:

```jsx
const { cart, addCart } = useStore();
```

React Context는 상품 데이터와 같은 공통 데이터를 관리하는 용도로 사용합니다.

```text
src/context/
└── ShoesContext.jsx
```

---

## 🖼️ Images

이미지는 Next.js 프로젝트의 `public` 폴더에서 관리합니다.

```text
public/
└── img/
    ├── bg.jpg
    ├── shoes1.jpg
    ├── shoes2.jpg
    └── ...
```

예:

```jsx
<img src="/img/shoes1.jpg" alt="shoes" />
```

또는 Next.js Image 컴포넌트를 사용할 수 있습니다.

```jsx
import Image from "next/image";

<Image
  src="/img/shoes1.jpg"
  alt="shoes"
  width={300}
  height={300}
/>
```

---

## ⚙️ Path Alias

`jsconfig.json`에서 `@` alias를 사용할 수 있도록 설정했습니다.

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    },
    "ignoreDeprecations": "6.0"
  }
}
```

따라서 다음과 같이 사용할 수 있습니다.

```jsx
import Product from "@/components/Product";
```

---

## 🔁 Migration

### Before

```text
React + Vite
     │
     ├── React Router
     ├── Context API
     ├── Zustand
     ├── styled-components
     └── Vite
```

### After

```text
Next.js
     │
     ├── App Router
     ├── React Context
     ├── Zustand
     ├── Tailwind CSS
     └── Next.js
```

---

## 📚 Learning Purpose

이 프로젝트는 React에서 Next.js로 마이그레이션하는 과정을 학습하기 위한 프로젝트입니다.

주요 학습 내용:

* Next.js 기본 구조
* App Router
* Dynamic Route
* Nested Route
* Client Component
* Server Component
* Next.js Navigation
* Zustand
* Context API
* Tailwind CSS
* React → Next.js Migration

---

## 👨‍💻 Deploy

https://shoesshop-next.vercel.app/
