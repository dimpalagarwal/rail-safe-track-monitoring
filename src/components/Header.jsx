export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">

      {/* Left: Logo + Ministry Name */}
      <div className="flex items-center gap-4">
        <img
          src="/image.png"
          alt="Railways Logo"
          className="h-12 w-12 object-contain"
        />

        <div>
          <h1 className="text-xl font-semibold text-slate-900 leading-tight">
            Ministry of Transport
          </h1>
          <p className="text-sm text-slate-600">
            Rail Security Division
          </p>
        </div>
      </div>

      {/* push everything to the right */}
      <nav className="flex items-center gap-4 ml-auto mr-6">
        <button className="bg-red-700 text-white px-4 py-2 rounded-sm text-sm hover:bg-red-800 shadow-sm">
          Dashboard
        </button>

        <button className="bg-red-700 text-white px-4 py-2 rounded-sm text-sm hover:bg-red-800 shadow-sm">
          Incident History
        </button>
      </nav>

      {/* Right: Operator */}
      <div className="text-sm text-slate-700">
        Operator ID: <span className="font-semibold">RS-7712</span>
      </div>

    </header>
  );
}
