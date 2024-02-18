import Topbar from "../components/shared/Topbar";
import Bottombar from "../components/shared/Bottombar";
import Sidebar from "../components/shared/Sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="w-full">
      <Topbar />
      <Sidebar />
      <section className="h-screen">
        <Outlet />
      </section>
      <Bottombar />
    </div>
  );
}
