import React from 'react'
import Link from 'next/link';

function Header() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-black text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">LOgO</div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/destination" className="hover:text-gray-400">Destination</Link>
        <Link href="/blog" className="hover:text-gray-400">Blog</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
      </nav>

      {/* Sign In Button */}
      <button className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black">
        Sign In
      </button>
    </div>
  );
};

export default Header;



