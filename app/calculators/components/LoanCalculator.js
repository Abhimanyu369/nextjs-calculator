"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Rectangle,
} from "recharts";

const LoanCalculator = () => {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(5);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const calculateEMI = () => {
    const monthlyRate = rate / 100 / 12;
    const months = years * 12;
    const emiCalc =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPaymentCalc = emiCalc * months;
    const totalInterestCalc = totalPaymentCalc - amount;

    setEmi(emiCalc.toFixed(2));
    setTotalInterest(totalInterestCalc.toFixed(2));
    setTotalPayment(totalPaymentCalc.toFixed(2));
  };

  const data = [
    { name: "Principal", value: amount, fill: "#4CAF50" },
    { name: "Interest", value: totalInterest, fill: "#FF9800" },
    { name: "Total", value: totalPayment, fill: "#2196F3" },
  ];

  return (
    <Card className="w-full max-w-lg md:max-w-xl lg:max-w-2xl mx-auto p-0 md:p-6">
      <CardHeader>
        <CardTitle className="text-center">Loan Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Loan Amount Input */}
        <div className="mb-3">
          <Label>Loan Amount ($)</Label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter Loan Amount"
          />
        </div>

        {/* Interest Rate Input */}
        <div className="mb-3">
          <Label>Interest Rate (%)</Label>
          <Input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            placeholder="Enter Interest Rate"
          />
        </div>

        {/* Loan Term Input */}
        <div className="mb-3">
          <Label>Loan Term (Years)</Label>
          <Input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            placeholder="Enter Loan Term"
          />
        </div>

        {/* Calculate Button */}
        <Button onClick={calculateEMI} className="w-full bg-blue-500 mt-4">
          Calculate EMI
        </Button>

        {/* EMI Result */}
        {emi > 0 && (
          <div className="mt-6 text-center">
            <h3 className="text-lg font-bold text-green-600">
              Monthly EMI: ${emi}
            </h3>
            <p className="text-sm text-gray-600">
              Total Payment: ${totalPayment}
            </p>
            <p className="text-sm text-gray-600">
              Total Interest: ${totalInterest}
            </p>

            {/* Loan Breakdown Chart */}
            <div className="mt-6">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data} barSize={20}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" />
                  {/* <Bar
                    dataKey="name"
                    fill="#8884d8"
                    activeBar={<Rectangle fill="pink" stroke="blue" />}
                  />
                  <Bar
                    dataKey="value"
                    fill="#82ca9d"
                    activeBar={<Rectangle fill="gold" stroke="purple" />}
                  /> */}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LoanCalculator;
