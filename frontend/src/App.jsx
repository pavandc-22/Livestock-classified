// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import NavBar from "./components/NavBar";
// import LivestockGrid from "./components/LivestockGrid";
// import LivestockDetail from "./components/LivestockDetail";
// import UploadForm from "./components/UploadForm";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<LivestockGrid />} />
//           <Route path="/upload" element={<UploadForm />} />
//           <Route path="/animal/:id" element={<LivestockDetail />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }
import NavBar from "./components/NavBar";
import HeroSlider from "./components/HeroSlider";
import CategoryBar from "./components/CategoryBar";
import LivestockGrid from "./components/LivestockGrid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LivestockDetail from "./components/LivestockDetail";
import UploadForm from "./components/UploadForm";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <HeroSlider />
      <CategoryBar />

      <Routes>
        <Route path="/" element={<LivestockGrid />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="/animal/:id" element={<LivestockDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
