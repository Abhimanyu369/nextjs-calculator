"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LoanCalculator = () => {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(5);
  const [emi, setEmi] = useState(0);

  const calculateEMI = () => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const emiCalc =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    setEmi(emiCalc.toFixed(2));
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Loan Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Loan Amount ($)"
        />
        <Input
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          placeholder="Interest Rate (%)"
          className="mt-2"
        />
        <Input
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          placeholder="Loan Term (Years)"
          className="mt-2"
        />
        <Button onClick={calculateEMI} className="mt-4 w-full">
          Calculate EMI
        </Button>
        {emi > 0 && (
          <p className="mt-3 text-lg font-bold text-green-600">
            Monthly EMI: ${emi}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default LoanCalculator;
