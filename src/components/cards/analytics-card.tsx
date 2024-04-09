import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { cn } from "../../lib/utils";
import AnalyticsChart from "../charts/area-chart";
import { IData } from "../../types";

interface AnalyticsCardProps {
  className?: string;
  title: string;
  description: string;
  val: number;
  analytics: string;
  finance: string;
  isProfitable: boolean;
  strokeColor?: string;
  fillColor?: string;
  data: IData[];
}

export const AnalyticsCard = ({
  className,
  title,
  description,
  val,
  isProfitable,
  analytics,
  finance,
  strokeColor = "#FFFFFF",
  fillColor = "#539BBB",
  data,
}: AnalyticsCardProps) => {
  return (
    <div
      className={cn(
        "relative border border-gray-300 rounded-lg text-black h-[180px] w-[260px] overflow-hidden",
        className
      )}
    >
      <div className="absolute">
        <AnalyticsChart
          strokeColor={strokeColor}
          fillColor={fillColor}
          data={data}
        />
      </div>

      <div className="p-3">
        <div className="flex flex-col">
          <span className="text-lg font-bold uppercase">{title}</span>
          <span>{description}</span>
        </div>

        <div className="relative">
          <div className="mt-2 flex items-center space-x-8">
            <span className="text-3xl font-medium">{val}</span>
            <span>
              {isProfitable ? (
                <CaretUpOutlined style={{ fontSize: 30 }} />
              ) : (
                <CaretDownOutlined style={{ fontSize: 30 }} />
              )}
            </span>
          </div>
          <span className="italic tracking-wider">{analytics}</span>
        </div>

        <div className="mt-5">
          <span>{finance}</span>
        </div>
      </div>
    </div>
  );
};
