import BMICalculator from "@/app/calculators/components/BMICalculator";
import Link from "next/link";

export default function BMIPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">BMI Calculator</h1>
      <BMICalculator />
      <Link href="/" className="mt-4 text-blue-500">Back to Home</Link>
    </div>
  );
}
