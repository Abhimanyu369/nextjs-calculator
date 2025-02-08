"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BMICalculator = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const heightMeters = height / 100;
    const bmiCalc = weight / (heightMeters * heightMeters);
    setBmi(bmiCalc.toFixed(2));

    if (bmiCalc < 18.5) setCategory("Underweight");
    else if (bmiCalc < 24.9) setCategory("Normal Weight");
    else if (bmiCalc < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>BMI Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          placeholder="Weight (kg)"
        />
        <Input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          placeholder="Height (cm)"
          className="mt-2"
        />
        <Button onClick={calculateBMI} className="mt-4 w-full">
          Calculate BMI
        </Button>
        {bmi > 0 && (
          <p className="mt-3 text-lg font-bold text-green-600">
            BMI: {bmi} ({category})
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default BMICalculator;
