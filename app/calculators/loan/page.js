import LoanCalculator from "@/app/calculators/components/LoanCalculator";
import Link from "next/link";

export default function LoanPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Loan Calculator</h1>
      <LoanCalculator />
      <Link href="/" className="mt-4 text-blue-500">Back to Home</Link>
    </div>
  );
}
