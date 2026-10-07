import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoesProvider } from "@/context/ShoesContext";

export const metadata = {
  title: "ShoesShop",
  description: "React Vite ShoesShop converted to Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <ShoesProvider>
          <div className="App">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ShoesProvider>
      </body>
    </html>
  );
}
