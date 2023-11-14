import PropTypes from "prop-type";
import { PieChart, Pie, Cell } from "recharts";
import data from "../../data/data.json";

const getData = (data) => {
  const newData = [
    { name: "good", value: 0 },
    { name: "bad", value: 0 },
  ];

  data.forEach((item) => {
    if (item === "good") {
      newData[0].value += 1;
    } else {
      newData[1].value += 1;
    }
  });

  return newData;
};

const COLORS = ["#16A34A", "#DC2626"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const BehavioralAnalytics = ({ className }) => {
  return (
    <div className={`${className} p-3 bg-gray-300`} id="analytics">
      <h3 className="font-semibold text-center text-lg">
        Behavioral Analytics
      </h3>

      <div className="flex justify-center items-end flex-wrap">
        <PieChart width={250} height={200}>
          <Pie
            data={getData(data["Behavioral Analytics"])}
            cx={150}
            cy={100}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            className="flex justify-center items-center"
          >
            {getData(data["Behavioral Analytics"]).map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.name === "good" ? COLORS[0] : COLORS[1]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="flex justify-center items-start flex-col">
          <div className="flex justify-center items-center space-x-2">
            <div className="w-3 h-3 bg-green-600" />
            <p>GOOD</p>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <div className="w-3 h-3 bg-red-600" />
            <p>BAD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

BehavioralAnalytics.propTypes = {
  className: PropTypes.string,
};

export default BehavioralAnalytics;
