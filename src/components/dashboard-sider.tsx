import { Link, useLocation } from "react-router-dom";
import Sider from "antd/es/layout/Sider";

import { cn } from "../lib/utils";
import LogoLink from "./logo-link";
import { sidebarMenuItems } from "../constants";

import SettingIcon from "../icons/setting-icon";
import LogoutIcon from "../icons/logout-icon";

const DashboardSider = () => {
  const { pathname } = useLocation();

  return (
    <Sider
      width={280}
      style={{ background: "#F9F9F9" }}
      className="min-h-scree"
    >
      <div className="relative mx-3 my-8 rounded-3xl bg-primary h-[calc(100vh_-50px)] shadow-lg px-6">
        <LogoLink className="pt-20" />

        <div className="h-[600px] mt-8 flex flex-col justify-between">
          <div className="space-y-1">
            {sidebarMenuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "flex items-center px-4 py-3 hover:bg-secondary transition-all rounded-lg",
                  pathname === item.href && "bg-secondary"
                )}
              >
                {item.icon}
                <span className="pl-4 text-lg text-white font-light tracking-wider">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="relative">
            <div className="w-full h-[1px] bg-white mb-2"></div>
            <Link
              to={"/dashboard/settings"}
              className={cn(
                "flex items-center px-4 py-3 hover:bg-secondary transition-all rounded-lg mb-1",
                pathname === "/dashboard/settings" && "bg-secondary"
              )}
            >
              <SettingIcon />
              <span className="pl-4 text-lg text-white font-light tracking-wider">
                Settings
              </span>
            </Link>

            <button className="flex items-center px-4 py-3 hover:bg-secondary transition-all rounded-lg w-full">
              <LogoutIcon />
              <span className="pl-4 text-lg text-white font-light tracking-wider">
                Logout
              </span>
            </button>
          </div>
        </div>
      </div>
    </Sider>
  );
};

export default DashboardSider;
