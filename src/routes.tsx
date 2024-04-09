import { Layout } from "antd";
import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import DashboardSider from "./components/dashboard-sider";
import DashboardHeader from "./components/dashboard-header";

import Home from "./pages/home";
import DashboardHome from "./pages/dashboard/home";
import Activities from "./pages/dashboard/activities";
import Analytics from "./pages/dashboard/analytics";
import Transformation from "./pages/dashboard/transformation";
import Library from "./pages/dashboard/library";
import Settings from "./pages/dashboard/settings";

const { Content } = Layout;

const DashboardRoute = () => {
  return (
    <main className="h-screen bg-bgColor">
      <Layout style={{ minHeight: "100vh" }}>
        <DashboardSider />
        <Layout>
          <DashboardHeader />
          <Content>
            <div className="h-[calc(100vh_-65px)] overflow-auto bg-bgColor py-5 px-8">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </main>
  );
};

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" index element={<Home />} />
      <Route path="dashboard" element={<DashboardRoute />}>
        <Route path="" element={<DashboardHome />} />
        <Route path="activities" element={<Activities />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="transformation" element={<Transformation />} />
        <Route path="library" element={<Library />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Route>
  )
);

export default Router;
