import { Train, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import AppBrand from "../components/AppBrand";

const navItems = [
  { label: "Home", href: "#", active: true },
  { label: "Monitoring Areas", href: "/monitoring" },
  { label: "Incident History", href: "/traffic-control" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-300">

      {/* Main navbar */}
      <div className="py-1">
        <div className="max-w-6xl mx-auto px-4 flex items-center">

          {/* Left: Logo + Ministry */}
          <AppBrand />

          {/* Right side */}
          <div className="ml-auto flex items-center gap-6">

            {/* Navigation links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${item.active
                      ? "bg-[#0f2b6a] text-white"
                      : "text-[#0f2b6a] hover:bg-slate-100"
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Login */}
                  <Link to="/login">
        <button
              className="
                flex items-center gap-2
                border border-slate-900
                px-4 py-2
                text-sm
                text-[#0f2b6a]
                transition
                hover:bg-[#0f2b6a]
                hover:text-white
                cursor-pointer
              "
            >
              <User className="h-4 w-4" />
               Login
            </button>
</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
