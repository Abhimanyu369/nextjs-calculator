import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-6 text-primary">Welcome to Calculator App Test</h1>
      <p className="text-lg text-muted-foreground">Choose a calculator below:</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Loan Calculator</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Calculate your monthly loan EMI easily.</p>
            <Button className="mt-4 w-full" asChild>
              <Link href="/calculators/loan">Go to Loan Calculator</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="w-80">
          <CardHeader>
            <CardTitle>BMI Calculator</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Find out your Body Mass Index (BMI).</p>
            <Button className="mt-4 w-full" asChild>
              <Link href="/calculators/bmi">Go to BMI Calculator</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
