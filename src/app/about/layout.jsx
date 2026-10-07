import About from "@/components/About";

export default function AboutLayout({ children }) {
  return (
    <>
      <About />
      {children}
    </>
  );
}
