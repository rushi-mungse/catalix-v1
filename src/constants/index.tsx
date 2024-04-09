import ChartIcon from "../icons/chart-icon";
import HomeIcon from "../icons/home-icon";
import LayerIcon from "../icons/layer-icon";
import RocketIcon from "../icons/rocket-icon";
import TimerIcon from "../icons/timer-icon";
import { IData, ISidebarMenu, ITableData } from "../types";

export const sidebarMenuItems: ISidebarMenu[] = [
  {
    label: "Home",
    icon: <HomeIcon />,
    href: "/dashboard",
  },
  { label: "Activities", icon: <TimerIcon />, href: "/dashboard/activities" },
  { label: "Analytics", icon: <ChartIcon />, href: "/dashboard/analytics" },
  {
    label: "Transformation",
    icon: <RocketIcon className="size-8" />,
    href: "/dashboard/transformation",
  },
  { label: "Library", icon: <LayerIcon />, href: "/dashboard/library" },
];

export const quotations = [
  {
    title: "On Time",
    quatation: [
      {
        name: "Completed Iteratiions",
        value: 7,
        isPercentage: false,
      },
      {
        name: "Total Iterations",
        value: 9,
        isPercentage: false,
      },
      {
        name: "% Iterations Done",
        value: 77.8,
        isPercentage: true,
      },
    ],
    isGreenFlag: true,
  },
  {
    title: "On Scope",
    quatation: [
      {
        name: "Story Points Done",
        value: 320,
        isPercentage: false,
      },
      {
        name: "Total Story Points",
        value: 4230,
        isPercentage: false,
      },
      {
        name: "% Stories Done",
        value: 70.9,
        isPercentage: true,
      },
    ],
    isGreenFlag: true,
  },
  {
    title: "On Velocity",
    quatation: [
      {
        name: "Average Velocity",
        value: 428.6,
        isPercentage: false,
      },
      {
        name: "Required Velocity",
        value: 615.0,
        isPercentage: false,
      },
    ],
    isGreenFlag: false,
  },
];

export const tableData: ITableData[] = [
  {
    page: "/Defect Arrival Rate",
    pageviews: "872,337 (15.82%)",
    uniquePageviews: "574,332 (15.33%)",
    avgTimeOnPage: "00:05:43",
    extrances: "802,873 (16.75%)",
    exit: "25.96%",
    pageValue: "$1,093 (5.11%)",
  },
  {
    page: "/Defect Arrival Rate",
    pageviews: "872,337 (15.82%)",
    uniquePageviews: "574,332 (15.33%)",
    avgTimeOnPage: "00:05:43",
    extrances: "802,873 (16.75%)",
    exit: "25.96%",
    pageValue: "$1,093 (5.11%)",
  },
  {
    page: "/Defect Arrival Rate",
    pageviews: "872,337 (15.82%)",
    uniquePageviews: "574,332 (15.33%)",
    avgTimeOnPage: "00:05:43",
    extrances: "802,873 (16.75%)",
    exit: "25.96%",
    pageValue: "$1,093 (5.11%)",
  },
  {
    page: "/Defect Arrival Rate",
    pageviews: "872,337 (15.82%)",
    uniquePageviews: "574,332 (15.33%)",
    avgTimeOnPage: "00:05:43",
    extrances: "802,873 (16.75%)",
    exit: "25.96%",
    pageValue: "$1,093 (5.11%)",
  },
  {
    page: "/Defect Arrival Rate",
    pageviews: "872,337 (15.82%)",
    uniquePageviews: "574,332 (15.33%)",
    avgTimeOnPage: "00:05:43",
    extrances: "802,873 (16.75%)",
    exit: "25.96%",
    pageValue: "$1,093 (5.11%)",
  },
  {
    page: "/Defect Arrival Rate",
    pageviews: "872,337 (15.82%)",
    uniquePageviews: "574,332 (15.33%)",
    avgTimeOnPage: "00:05:43",
    extrances: "802,873 (16.75%)",
    exit: "25.96%",
    pageValue: "$1,093 (5.11%)",
  },
];

export const data1: IData[] = [
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page E",
    uv: 1890,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page G",
    uv: 3490,
  },
];

export const data2: IData[] = [
  {
    name: "Page G",
    uv: 3490,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page B",
    uv: 3000,
  },

  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page E",
    uv: 1890,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page A",
    uv: 4000,
  },
];

export const data3: IData[] = [
  {
    name: "Page G",
    uv: 3490,
  },
  {
    name: "Page D",
    uv: 2780,
  },

  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page F",
    uv: 2390,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page E",
    uv: 1890,
  },
];

export const data4: IData[] = [
  {
    name: "Page D",
    uv: 2780,
  },
  {
    name: "Page G",
    uv: 3490,
  },
  {
    name: "Page C",
    uv: 2000,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page E",
    uv: 1890,
  },
  {
    name: "Page F",
    uv: 2390,
  },
];
