import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#F5F7FA]">
            <Header />

            {/* HERO SECTION */}
            <HeroSlider />
            {/* <section className="px-6 py-16 text-center">
        <h1 className="text-3xl font-semibold text-slate-900 mb-4">
          Rail Track Tampering Detection & Monitoring System
        </h1>

        <p className="text-slate-600 max-w-3xl mx-auto mb-8">
          An AI-enabled surveillance and monitoring platform for detecting
          intentional railway track tampering using vibration sensors,
          camera feeds, and intelligent threat analysis.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-red-700 text-white px-6 py-3 rounded-md text-sm hover:bg-red-800 shadow-sm">
            Go to Monitoring Areas
          </button>

          <button className="border border-red-700 text-red-700 px-6 py-3 rounded-md text-sm hover:bg-red-50">
            Incident History
          </button>
        </div>
      </section> */}

            {/* FEATURE HIGHLIGHTS */}
            <section className="px-6 py-14 bg-[#F8FAFC]">
                <div className="max-w-6xl mx-auto">

                    {/* Section Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-semibold text-slate-900">
                            System Capabilities
                        </h2>
                        <div className="w-16 h-1 bg-red-700 mx-auto mt-2"></div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="bg-white border border-slate-200 p-6 flex gap-4">
                            <div className="bg-red-700 p-3 rounded">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M12 3v18M3 12h18" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">
                                    AI-Based Threat Detection
                                </h3>
                                <p className="text-sm text-slate-600">
                                    Detects abnormal vibrations, suspicious human activity, and tool
                                    usage near railway tracks using AI models.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white border border-slate-200 p-6 flex gap-4">
                            <div className="bg-red-700 p-3 rounded">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M3 3h18v18H3z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">
                                    Real-Time Monitoring
                                </h3>
                                <p className="text-sm text-slate-600">
                                    Continuous monitoring of railway sections with live alerts and
                                    color-coded risk indicators.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white border border-slate-200 p-6 flex gap-4">
                            <div className="bg-red-700 p-3 rounded">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5v14" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">
                                    Evidence & Audit Trails
                                </h3>
                                <p className="text-sm text-slate-600">
                                    Automatically stores sensor data, visual evidence, and operator
                                    actions for audits and investigation.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* HOW IT WORKS */}
            <section className="px-6 py-12 bg-white border-t border-slate-200">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-xl font-semibold text-slate-900 mb-6 text-center">
                        How the System Works
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-slate-700">
                        <div>
                            <span className="font-semibold">1.</span> Sensors & cameras monitor
                            railway tracks continuously.
                        </div>
                        <div>
                            <span className="font-semibold">2.</span> AI models analyze vibration
                            and visual data for anomalies.
                        </div>
                        <div>
                            <span className="font-semibold">3.</span> Threat scores are generated
                            based on context and confidence.
                        </div>
                        <div>
                            <span className="font-semibold">4.</span> Operators review alerts,
                            take action, and evidence is stored securely.
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER NOTE */}
            <footer className="px-6 py-6 text-center text-xs text-slate-500">
                This system is intended for authorized railway personnel only.
                All activities are logged for security and audit purposes.
            </footer>
        </div>
    );
}
