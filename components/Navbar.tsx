"use client";

import Link from "next/link";
import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-primary p-2 rounded-lg group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              easy<span className="text-gradient">contracts</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#come-funziona" className="text-gray-600 hover:text-primary-600 transition-colors">
              Come Funziona
            </Link>
            <Link href="/#contratti" className="text-gray-600 hover:text-primary-600 transition-colors">
              Contratti
            </Link>
            <Link href="/#prezzi" className="text-gray-600 hover:text-primary-600 transition-colors">
              Prezzi
            </Link>
            <Link href="/generate" className="btn-primary">
              Inizia Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <Link
              href="/#come-funziona"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Come Funziona
            </Link>
            <Link
              href="/#contratti"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contratti
            </Link>
            <Link
              href="/#prezzi"
              className="block text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Prezzi
            </Link>
            <Link href="/generate" className="block btn-primary text-center" onClick={() => setIsOpen(false)}>
              Inizia Gratis
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

