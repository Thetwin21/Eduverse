import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Edulance from "./Component/Edulance/Edulance";
import Community from "./Component/Community/Community";
import Library from "./Component/Library/Library";
import Sidebar from "./Component/Sidebar";
import MarketPlace from "./Component/Market/MarketPlace";
import Setting from "./Component/Setting/Setting";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Edulance />} />
        <Route path="/community" element={<Community />} />
        <Route path="/library" element={<Library />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
