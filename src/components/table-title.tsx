import { IData } from "../types";
import ChartForTable from "./charts/chart-for-table";

const TableTitle = ({
  title,
  num,
  data,
}: {
  title: string;
  num: number;
  data: IData[];
}) => {
  return (
    <div className="flex flex-col">
      <span>{title}</span>
      <span className="italic font-light">{num}</span>
      <ChartForTable data={data} />
    </div>
  );
};

export default TableTitle;
