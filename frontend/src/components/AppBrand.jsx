export default function AppBrand({ showTagline = true }) {
  return (
    <div className="flex items-center justify-center gap-0">
      {/* Logo */}
      <div className="h-15 w-20 flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Railway Track Anomaly Monitor Logo"
          className="h-20 w-auto"
        />
      </div>

      {/* Text */}
      <div>
        <h1 className="text-lg font-semibold text-[#0f2b6a] leading-tight">
          RTAM – Railway Track Anomaly Monitor
        </h1>

        {showTagline && (
          <p className="text-sm uppercase tracking-wide text-slate-500 font-semibold">
            AI-Assisted Monitoring Control
          </p>
        )}
      </div>
    </div>
  );
}
