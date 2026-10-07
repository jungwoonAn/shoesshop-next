import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-wide hover:text-gray-300 transition-colors"
        >
          ShoesShop
        </Link>

        <div className="flex space-x-6 ml-6 mr-auto">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/detail/0"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Detail
          </Link>
          <Link
            href="/cart"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
