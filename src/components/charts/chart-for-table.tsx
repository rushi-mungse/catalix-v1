import { AreaChart, Area } from "recharts";
import { IData } from "../../types";

const ChartForTable = ({ data }: { data: IData[] }) => {
  return (
    <AreaChart
      width={100}
      height={30}
      data={data}
      syncId="analytics-chart"
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Area type="linear" dataKey="uv" stroke="#2F667F" fill="#539BBB" />
    </AreaChart>
  );
};

export default ChartForTable;
