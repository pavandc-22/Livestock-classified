const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

export async function getAllLivestock() {
  const res = await fetch(`${API_BASE}/api/livestock`);
  return res.json();
}

export async function getLivestockById(id) {
  const res = await fetch(`${API_BASE}/api/livestock/${id}`);
  return res.json();
}



export async function createLivestock(data) {
  const res = await fetch(`${API_BASE}/api/livestock`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  
  return res.json();
}
const API_URL = "http://localhost:5000/api/livestock";




// ✅ Delete livestock
export async function deleteLivestock(id) {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}

