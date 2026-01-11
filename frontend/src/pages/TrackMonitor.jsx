import AppBrand from "../components/AppBrand";
import { useState, useEffect } from "react";
import { mockAlerts } from "../data/mockAlerts";
import vibration from "../assets/vibration.png";

import { useNavigate } from "react-router-dom";
import {
    Activity,
    AlertTriangle,
    Camera,
    FileText,
    ArrowLeft,
    Cpu,
    LayoutList,
    Filter,
    Download,
} from "lucide-react";

const anchors = [
    {
        id: "NR-DLI-DLI-GZB-UP-KM0012-M000",
        score: 0.42,
        risk: "MEDIUM",
        color: "yellow",
    },
    {
        id: "NR-DLI-DLI-GZB-UP-KM0012-M050",
        score: 0.91,
        risk: "CRITICAL",
        color: "red",
    },
    {
        id: "NR-DLI-DLI-GZB-UP-KM0012-M100",
        score: 0.58,
        risk: "HIGH",
        color: "orange",
    },
];

function InfoBox({ label, value }) {
    return (
        <div className="border border-slate-300 p-3">
            <p className="text-xs text-slate-500">{label}</p>
            <p className="font-semibold text-slate-900">{value}</p>
        </div>
    );
}

function KpiCard({ icon: Icon, iconColor, title, value, subtitle, badge }) {
    return (
        <div className="bg-white border border-slate-300 p-4 flex items-center gap-4">
            {/* ICON */}
            <div className={`p-3 rounded-md ${iconColor}`}>
                <Icon className="h-5 w-5 text-white" />
            </div>

            {/* TEXT */}
            <div className="flex-1">
                <p className="text-xs text-slate-500 uppercase mb-1">{title}</p>

                <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-slate-900">{value}</p>

                    {badge && (
                        <span
                            className={`text-xs px-2 py-0.5 font-medium border ${badge.color}`}
                        >
                            {badge.text}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function TrackMonitor() {
    const [alerts, setAlerts] = useState(mockAlerts);
    const [selectedAlert, setSelectedAlert] = useState(alerts[0]);
    const [selectedAnchor, setSelectedAnchor] = useState(anchors[1]);
    const zone = "Northern Railway (Delhi)";
    const route = "Delhi–Ghaziabad";
    const line = "UP";
    const segment = "NR-DLI-DLI-GZB-UP-KM234/050";

    useEffect(() => {
        fetch("/api/ml/predict")
            .then((res) => res.json())
            .then((data) => {
                setAlerts(data);
                setSelectedAlert(data[0]);
            })
            .catch(() => {
                console.warn("Using mock alerts");
            });
    }, []);

    const [showNotesBox, setShowNotesBox] = useState(false);
    const [noteText, setNoteText] = useState("");
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[#F4F7FB] flex flex-col">
            <header className="sticky top-0 z-50 bg-white border-b border-slate-300">
                <div className="max-w-7xl mx-auto px-6 py-1 flex items-center gap-4">
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2 border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:bg-slate-100 transition"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                    </button>
                    <AppBrand />
                    <div className="ml-auto flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1 border border-green-600 text-green-700 text-sm font-medium">
                            <Activity className="h-4 w-4" />
                            SYSTEM LIVE
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 border border-[#0f2b6a] text-[#0f2b6a] text-sm font-medium">
                            <AlertTriangle className="h-4 w-4 text-yellow-500" />
                            Track Monitor
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex-1 p-6">


                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <KpiCard
                        icon={AlertTriangle}
                        iconColor="bg-red-600"
                        title="Active Alerts"
                        value="12"
                        badge={{
                            text: "+2 New",
                            color: "bg-red-100 text-red-700 border-red-300",
                        }}
                    />
                    <KpiCard
                        icon={Cpu}
                        iconColor="bg-orange-500"
                        title="Highest Anomaly"
                        value="92%"
                        badge={{
                            text: "HIGH",
                            color: "bg-orange-100 text-orange-700 border-orange-300",
                        }}
                    />
                    <KpiCard
                        icon={Activity}
                        iconColor="bg-green-600"
                        title="Sensors Online"
                        value="450 / 452"
                        badge={{
                            text: "99.5% Uptime",
                            color: "bg-green-100 text-green-700 border-green-300",
                        }}
                    />
                    <KpiCard
                        icon={Camera}
                        iconColor="bg-blue-600"
                        title="Cameras Active"
                        value="98%"
                        badge={{
                            text: "Stable",
                            color: "bg-blue-100 text-blue-700 border-blue-300",
                        }}
                    />
                </div>
                <div className="grid grid-cols-12 gap-4 mb-6">

                    <section className="col-span-12 md:col-span-6 bg-white border border-slate-300">

                        <div className="px-4 py-3 bg-[#0f2b6a] text-white text-sm font-bold uppercase">
                            Incident Overview · {selectedAlert.id}
                        </div>

                        <div className="p-6 space-y-5 text-sm">

                            <div className="border border-slate-300 p-4 space-y-2">

                                <p className="text-xs uppercase text-slate-500 flex items-center gap-2">
                                    <LayoutList className="h-4 w-4" />
                                    Monitoring Track Segment
                                </p>

                                <p className="text-sm font-semibold text-slate-900">
                                    Northern Railway (Delhi) · Delhi–Ghaziabad · Line UP
                                </p>

                                <p className="text-xs text-slate-600">
                                    Segment ID:
                                    <span className="font-medium ml-1">
                                        NR-DLI-DLI-GZB-UP-KM0012-S001
                                    </span>
                                </p>

                                <p className="text-xs text-slate-600">
                                    Human View:
                                    <span className="font-medium ml-1">
                                        KM 12/000 – KM 12/100
                                    </span>
                                </p>

                                <div className="border border-slate-300 rounded-md p-4 bg-slate-50">

  <p className="text-xs uppercase text-slate-500 flex items-center gap-2 mb-2">
    Point Anchor
  </p>

  <div className="flex items-center gap-3">

    <select
      value={selectedAnchor.id}
      onChange={(e) => {
        const found = anchors.find(a => a.id === e.target.value);
        setSelectedAnchor(found);
      }}
      className="flex-1 border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0f2b6a]"
    >
      {anchors.map(anchor => (
        <option key={anchor.id} value={anchor.id}>
          {anchor.id}
        </option>
      ))}
    </select>

  </div>
</div>


                            </div>


                            <div className="border p-4 text-center">
                                <p className="text-xs uppercase text-slate-600 mb-2">
                                    AI Anomaly Score
                                </p>

                                <p className={`text-4xl font-bold ${selectedAlert.color === "red"
                                        ? "text-red-600"
                                        : selectedAlert.color === "yellow"
                                            ? "text-yellow-600"
                                            : "text-green-600"
                                    }`}>
                                    {selectedAlert.anomalyScore}
                                </p>

                                <div className="w-full h-2 bg-slate-200 mt-2">
                                    <div
                                        className={`h-2 ${selectedAlert.color === "red"
                                                ? "bg-red-600"
                                                : selectedAlert.color === "yellow"
                                                    ? "bg-yellow-500"
                                                    : "bg-green-600"
                                            }`}
                                        style={{ width: `${selectedAlert.anomalyScore * 100}%` }}
                                    />
                                </div>

                                <p className="mt-2 text-xs font-semibold uppercase">
                                    {selectedAlert.severity} Risk
                                </p>
                            </div>

                            <div className="text-xs text-slate-600">
                                Last updated: <span className="font-medium">{selectedAlert.time}</span>
                            </div>
                        </div>
                    </section>

                    <section className="col-span-12 md:col-span-6 bg-white border border-slate-300">
                        <div className="px-4 py-3 bg-[#0f2b6a] text-white text-sm font-bold uppercase">
                            Analysis & Monitor Actions
                        </div>

                        <div className="p-6 space-y-6">

                            {/* VIBRATION */}
                            <div className="border border-slate-300 rounded">
                                <div className="px-3 py-2 bg-slate-100 border-b text-xs font-semibold uppercase">
                                    Vibration Waveform Analysis
                                </div>

                                <div className="flex justify-center p-4 bg-white">
                                    <img
                                        src={vibration}
                                        alt="Vibration waveform"
                                        className="max-w-[400px] w-full h-auto"
                                    />
                                </div>
                            </div>


                            {/* CAMERA */}
                            <div className="h-44 bg-black flex items-center justify-center">
                                <img
                                    src="/camera.png"
                                    alt={`Camera Snapshot ${selectedAlert.id}`}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            <p className="text-xs text-center text-slate-500 mt-2">
                                Live Feed · Section {selectedAlert.id} · {selectedAlert.time}
                            </p>

                            {/* ACTIONS */}
                            <div className="space-y-3 border-t pt-4">
                                <button className="w-full border border-slate-900 py-2 hover:bg-slate-900 hover:text-white">
                                    Acknowledge Alert
                                </button>

                                <button
                                    onClick={() => setShowNotesBox(!showNotesBox)}
                                    className="w-full border border-slate-300 px-4 py-2 text-sm hover:bg-slate-100 flex items-center justify-center gap-2"
                                >
                                    <FileText className="h-4 w-4" />
                                    {showNotesBox ? "Hide Notes" : "Add Notes"}
                                </button>
                                {showNotesBox && (
                                    <div className="mt-3 border border-slate-300 p-3 bg-slate-50">
                                        <label className="block text-xs font-semibold text-slate-700 mb-2">
                                            Operator Notes
                                        </label>
                                        <textarea
                                            value={noteText}
                                            onChange={(e) => setNoteText(e.target.value)}
                                            rows={4}
                                            placeholder="Describe observations, ground verification, or concerns..."
                                            className="w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0f2b6a]"
                                        />
                                        <div className="flex justify-end mt-3">
                                            <button
                                                onClick={() => {
                                                    console.log("Saved Note:", noteText);
                                                    setShowNotesBox(false);
                                                }}
                                                className="bg-[#0f2b6a] text-white px-4 py-2 text-sm hover:bg-[#0b2154]"
                                            >
                                                Save Note
                                            </button>
                                        </div>
                                    </div>
                                )}
                                <button className="w-full bg-red-600 text-white py-2 hover:bg-red-700 flex items-center justify-center gap-2">
                                    <AlertTriangle className="h-4 w-4" />
                                    Escalate to Traffic Control
                                </button>
                            </div>
                        </div>
                    </section>


                </div>
            </main>

            <footer className="px-6 py-6 text-center text-xs text-slate-200 bg-[#0f2b6a]">
                This system is intended for authorized railway personnel only. All
                activities are logged for security and audit purposes.
            </footer>
        </div>
    );
}
