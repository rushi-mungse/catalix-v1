import { AreaChart, Area } from "recharts";
import { IData } from "../../types";

const AnalyticsChart = ({
  strokeColor,
  fillColor,
  data,
}: {
  strokeColor: string;
  fillColor: string;
  data: IData[];
}) => {
  return (
    <AreaChart
      width={260}
      height={180}
      data={data}
      syncId="analytics-chart"
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Area type="linear" dataKey="uv" stroke={strokeColor} fill={fillColor} />
    </AreaChart>
  );
};

export default AnalyticsChart;
