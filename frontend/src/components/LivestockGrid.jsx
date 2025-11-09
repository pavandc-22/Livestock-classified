// // import { useEffect, useState } from "react";
// // import { getAllLivestock } from "../api/client";
// // import LivestockCard from "./LivestockCard";

// // export default function LivestockGrid() {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     getAllLivestock().then(setData);
// //   }, []);

// //   return (
// //     <div className="grid">
// //       {data.map(animal => (
// //         <LivestockCard key={animal._id} item={animal} />
// //       ))}
// //     </div>
    
// //   );
// // }


// import { useEffect, useState } from "react";
// import { getAllLivestock, deleteLivestock } from "../api/client";
// import LivestockCard from "./LivestockCard";

// export default function LivestockGrid() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");

//   const loadData = () => {
//     getAllLivestock().then(setData);
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   // Delete handler
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this listing?")) return;
//     await deleteLivestock(id);
//     loadData();
//   };

//   // Search function
//   const handleSearch = () => {
//     if (!search.trim()) {
//       return loadData();
//     }
//     const filtered = data.filter(item =>
//       (item.name || "").toLowerCase().includes(search.toLowerCase()) ||
//       (item.city || "").toLowerCase().includes(search.toLowerCase())
//     );
//     setData(filtered);
//   };

//   return (
//     <div>
//       {/* ✅ Search Bar */}
//       <div style={{ textAlign:"center", marginBottom:"20px" }}>
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search livestock..."
//           style={{ padding:"10px", width:"320px", marginRight:"5px" }}
//         />
//         <button onClick={handleSearch} style={{ padding:"10px 14px" }}>Search</button>
//         <button onClick={loadData} style={{ padding:"10px 14px", marginLeft:"5px" }}>Clear</button>
//       </div>

//       {/* ✅ Card Grid */}
//       <div className="grid">
//         {data.map(item => (
//           <LivestockCard 
//             key={item._id} 
//             item={item}
//             onDelete={() => handleDelete(item._id)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { getAllLivestock, deleteLivestock } from "../api/client";
import LivestockCard from "./LivestockCard";

export default function LivestockGrid() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = () => {
    getAllLivestock().then(setData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this listing?")) return;
    await deleteLivestock(id);
    loadData();
  };

  const handleSearch = () => {
    if (!search.trim()) return loadData();
    const q = search.toLowerCase();
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.city.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q)
    );
    setData(filtered);
  };

  return (
    <div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Search cattle, goat, city…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", width: "300px", borderRadius: "6px", border: "1px solid #aaa" }}
        />
        <button onClick={handleSearch} style={{ marginLeft: "8px", padding: "10px 14px" }}>
          Search
        </button>
        <button onClick={loadData} style={{ marginLeft: "5px", padding: "10px 14px" }}>
          Clear
        </button>
      </div>

      <div className="grid">
        {data.map(item => (
          <LivestockCard
            key={item._id}
            item={item}
            onDelete={() => handleDelete(item._id)}
          />
        ))}
      </div>
    </div>
  );
}
