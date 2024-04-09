import React from "react";

export type IconProps = React.HTMLAttributes<HTMLOrSVGElement>;

export interface ISidebarMenu {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export interface ITableData {
  page: string;
  pageviews: string;
  uniquePageviews: string;
  avgTimeOnPage: string;
  extrances: string;
  exit: string;
  pageValue: string;
}

export interface IData {
  name: string;
  uv: number;
}
