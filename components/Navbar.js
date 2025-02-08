"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-background border-b shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold">🧮 Calculator</Link>
        <div className="flex space-x-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
