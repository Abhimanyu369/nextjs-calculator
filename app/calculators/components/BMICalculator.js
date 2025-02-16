"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

// Define BMI categories
const bmiCategories = [
  { name: "Severe Underweight", range: [0, 16], color: "#FF6666" },
  { name: "Underweight", range: [16, 18.5], color: "#FFA500" },
  { name: "Normal", range: [18.5, 24.9], color: "#4CAF50" },
  { name: "Overweight", range: [25, 29.9], color: "#FFD700" },
  { name: "Obesity I", range: [30, 34.9], color: "#FF8C00" },
  { name: "Obesity II", range: [35, 39.9], color: "#FF4500" },
  { name: "Obesity III", range: [40, 100], color: "#8B0000" },
];

const BMICalculator = () => {
  const [unit, setUnit] = useState("metric");
  const [age, setAge] = useState(25);
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(180);
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const [gender, setGender] = useState("male");

  const calculateBMI = () => {
    let bmiCalc;
    if (unit === "metric") {
      const heightMeters = height / 100;
      bmiCalc = weight / (heightMeters * heightMeters);
    } else {
      bmiCalc = (weight / (height * height)) * 703; // US units formula
    }

    setBmi(bmiCalc.toFixed(1));

    // Determine BMI category
    const categoryIndex = bmiCategories.findIndex(
      (cat) => bmiCalc >= cat.range[0] && bmiCalc < cat.range[1]
    );
    setCategory(bmiCategories[categoryIndex]?.name || "Unknown");
    setActiveIndex(categoryIndex);
  };

  // Custom active shape for highlighting BMI category
  const renderActiveShape = (props) => {
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const RADIAN = Math.PI / 180;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text
          x={cx}
          y={cy}
          dy={8}
          textAnchor="middle"
          fill={fill}
          className="text-lg font-bold"
        >
          BMI {bmi}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 6}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill={fill}
        >
          {payload.name} ({value})
        </text>
      </g>
    );
  };

  return (
    <Card className="w-full max-w-lg md:max-w-xl lg:max-w-2xl mx-auto p-0 md:p-6">
      <CardHeader>
        <CardTitle className="text-center">BMI Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Tabs for Unit Selection */}
        <Tabs defaultValue="metric" onValueChange={setUnit}>
          <TabsList className="flex justify-center mb-4">
            <TabsTrigger value="metric">Metric Units</TabsTrigger>
            <TabsTrigger value="us">US Units</TabsTrigger>
            {/* <TabsTrigger value="other">Other Units</TabsTrigger> */}
          </TabsList>
        </Tabs>

        {/* Age Input */}
        <div className="mb-3">
          <label className="block text-sm font-medium">
            Age (2 - 120 years)
          </label>
          <Input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="mt-1"
            min={2}
          />
        </div>

        {/* Gender Selection */}
        <div className="mb-3">
          <label className="block text-sm font-medium">Gender</label>
          <RadioGroup defaultValue="male" className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <RadioGroupItem
                value="male"
                checked={gender === "male"}
                onClick={() => setGender("male")}
              />
              <span>Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <RadioGroupItem
                value="female"
                checked={gender === "female"}
                onClick={() => setGender("female")}
              />
              <span>Female</span>
            </label>
          </RadioGroup>
        </div>

        {/* Height Input */}
        <label className="block text-sm font-medium">
          Height ({unit === "metric" ? "cm" : "inches"})
          <Input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            placeholder={`Height (${unit === "metric" ? "cm" : "inches"})`}
            className="mb-3"
          />
        </label>

        {/* Weight Input */}
        <label className="block text-sm font-medium">
          Weight ({unit === "metric" ? "kg" : "lbs"})
          <Input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            placeholder={`Weight (${unit === "metric" ? "kg" : "lbs"})`}
            className="mb-3"
          />
        </label>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Button className="w-full bg-green-500" onClick={calculateBMI}>
            Calculate
          </Button>
          <Button className="w-full bg-gray-500" onClick={() => setBmi(null)}>
            Clear
          </Button>
        </div>

        {/* BMI Result & Chart */}
        {bmi && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-bold">
              BMI = {bmi} kg/m²{" "}
              <span className="text-green-600">({category})</span>
            </h3>

            <div className="mt-6">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={bmiCategories}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    dataKey="range[1]"
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    // onMouseEnter={(_, index) => setActiveIndex(index)}
                  >
                    {bmiCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BMICalculator;
