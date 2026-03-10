import { NavLink } from "react-router-dom";
import home from "../img/home.svg";
import transactions from "../img/transaction.svg";
import analytics from "../img/analytics.svg";
import settings from "../img/setting.svg";

export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", icon: home, path: "/" },
    { name: "Transactions", icon: transactions, path: "/transactions" },
    { name: "Analytics", icon: analytics, path: "/analytics" },
    { name: "Settings", icon: settings, path: "/settings" },
  ];

  return (
    <div className="w-20 h-screen bg-slate-100 text-black ">
      <ul className=" space-y-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded transition 
    ${isActive ? " bg-blue-200" : " hover:bg-blue-400"}`
              }
            >
              <img src={item.icon} className="w-15 h-11 " />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
