"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <nav className="bg-background border-b shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          🧮 Calculator
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <Button variant={pathname === "/" ? "default" : "outline"} asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant={pathname.includes("loan") ? "default" : "outline"} asChild>
            <Link href="/calculators/loan">Loan Calculator</Link>
          </Button>
          <Button variant={pathname.includes("bmi") ? "default" : "outline"} asChild>
            <Link href="/calculators/bmi">BMI Calculator</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t p-4">
          <div className="flex flex-col space-y-3">
            <Button
              variant={pathname === "/" ? "default" : "outline"}
              asChild
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              variant={pathname.includes("loan") ? "default" : "outline"}
              asChild
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/calculators/loan">Loan Calculator</Link>
            </Button>
            <Button
              variant={pathname.includes("bmi") ? "default" : "outline"}
              asChild
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              <Link href="/calculators/bmi">BMI Calculator</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
