import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const math_marks = [
    {
      id: 1,
      name: "John",
      math: 65,
      physics: 72,
      chemistry: 88,
    },
    {
      id: 2,
      name: "Alice",
      math: 78,
      physics: 94,
      chemistry: 72,
    },
    {
      id: 3,
      name: "Bob",
      math: 92,
      physics: 85,
      chemistry: 78,
    },
    {
      id: 4,
      name: "Emily",
      math: 88,
      physics: 90,
      chemistry: 87,
    },
    {
      id: 5,
      name: "David",
      math: 76,
      physics: 82,
      chemistry: 85,
    },
    {
      id: 6,
      name: "Olivia",
      math: 95,
      physics: 93,
      chemistry: 91,
    },
    {
      id: 7,
      name: "Michael",
      math: 89,
      physics: 79,
      chemistry: 88,
    },
    {
      id: 8,
      name: "Sophia",
      math: 70,
      physics: 91,
      chemistry: 94,
    },
    {
      id: 9,
      name: "William",
      math: 81,
      physics: 84,
      chemistry: 80,
    },
    {
      id: 10,
      name: "Ella",
      math: 87,
      physics: 89,
      chemistry: 86,
    },
  ];

  return (
    <div>
      <LChart className="mx-auto" width={1200} height={400} data={math_marks}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="blue"></Line>
        <Line dataKey="physics" stroke="green"></Line>
        <Line dataKey="chemistry" stroke="yellow"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
