// import LandingPage from "./pages/LandingPage";

// export default function App() {
//   return <LandingPage />;
// }

import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TrackMonitor from "./pages/TrackMonitor";
import TrafficControlPage from "./pages/TrafficControlPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/monitoring" element={<TrackMonitor />} />
      <Route path="/traffic-control" element={<TrafficControlPage />} />
    </Routes>
  );
}

