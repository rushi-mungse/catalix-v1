import { Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import type { TableProps } from "antd";

import {
  data1,
  data2,
  data3,
  data4,
  quotations,
  tableData,
} from "../../constants";

import { AnalyticsCard } from "../../components/cards/analytics-card";
import { QuotationCard } from "../../components/cards/quotation-card";

import { ITableData } from "../../types";
import TableTitle from "../../components/table-title";

const columns: TableProps<ITableData>["columns"] = [
  {
    title: "Page",
    dataIndex: "page",
    key: "page",
  },
  {
    title: <TableTitle title="Pageviews" num={356928} data={data1} />,
    dataIndex: "pageviews",
    key: "pageviews",
  },
  {
    title: <TableTitle title="Unique pageviews" num={356928} data={data4} />,
    dataIndex: "uniquePageviews",
    key: "uniquePageviews",
  },
  {
    title: <TableTitle title="Avg. time on page" num={356928} data={data2} />,
    dataIndex: "avgTimeOnPage",
    key: "avgTimeOnPage",
  },
  {
    title: <TableTitle title="Extrances" num={356928} data={data4} />,
    dataIndex: "extrances",
    key: "extrances",
  },
  {
    title: <TableTitle title="% Exit" num={356928} data={data3} />,
    dataIndex: "exit",
    key: "exit",
  },
  {
    title: <TableTitle title="Page Value" num={356928} data={data2} />,
    dataIndex: "pageValue",
    key: "pageValue",
  },
];

const DashboardHome = () => {
  return (
    <div className="relative">
      {/* button section */}
      <div className="flex items-center justify-between">
        <Button
          icon={<PlusOutlined />}
          type="primary"
          className="px-8 rounded-full border-none ring-0"
        >
          Create Report
        </Button>
        <Button className="px-8 rounded-full"> Share this dashboard</Button>
        <Button className="px-8 rounded-full"> Select Duration</Button>
        <Button className="px-8 rounded-full"> Compare with Duration</Button>
      </div>

      {/* chart section */}
      <div className="mt-8 grid grid-cols-4 gap-3">
        <AnalyticsCard
          title="Efficiency"
          description="Lorem Ipsum"
          val={1.1921}
          isProfitable={true}
          analytics="+0.0015 (+0.13%)"
          finance="0.00 USD"
          className="bg-white"
          fillColor="#F5761F"
          data={data1}
        />

        <AnalyticsCard
          title="time to market"
          description="Lorem Ipsum"
          val={327176}
          isProfitable={false}
          analytics="-97,914.00 (-23.03%)"
          finance="131,040,723,108 JPY"
          className="bg-white"
          fillColor="#82CB24"
          data={data2}
        />

        <AnalyticsCard
          title="Tech debt"
          description="Lorem Ipsum"
          val={1.1763}
          isProfitable={true}
          analytics="+0.0015 (+0.13%)"
          finance="0.00 USD"
          className="bg-white"
          fillColor="#895FF7"
          data={data3}
        />

        <AnalyticsCard
          title="Predictability"
          description="Lorem Ipsum"
          val={0.0031301}
          isProfitable={true}
          analytics="-0.00050430(-13.88%)"
          finance="1,566 BTC"
          className="bg-white"
          fillColor="#E252A0"
          data={data4}
        />
      </div>

      {/* card section */}
      <div className="mt-8 grid grid-cols-3 gap-3 mb-8">
        {quotations.map((q) => (
          <QuotationCard
            key={q.title}
            title={q.title}
            quotation={q.quatation}
            isGreenFlag={q.isGreenFlag}
          />
        ))}
      </div>

      {/* table section */}
      <Table columns={columns} dataSource={tableData} />
    </div>
  );
};

export default DashboardHome;
