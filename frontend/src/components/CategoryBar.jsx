const categories = [
  { label: "Cattle", img : "/cattle.png" },
  { label: "Goat", img: "/goat.png" },
  { label: "Buffalo", img: "/buffalo.png" },
  { label: "Sheep", img: "/sheep.png" },
  { label: "Horse", img: "/horse.png" },
  { label: "Dog", img: "/Dog.png" },
  { label: "others", img: "/vite.svg" },
];

export default function CategoryBar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      margin: "20px auto",
      width: "95%",
      maxWidth:"1200px"
    }}>
      {categories.map((c, i) => (
        <div key={i} style={{ textAlign:"center", cursor:"pointer" }}>
          <img src={c.img} style={{ width:"70px", height:"70px" }} />
          <p style={{ marginTop:"10px", fontWeight:"bold" }}>{c.label}</p>
        </div>
      ))}
    </div>
  );
}
