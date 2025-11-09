// import { Link } from "react-router-dom";

// export default function LivestockCard({ item, onDelete }) 
//  {
//   return (
//     <div className="card">
//       <img src={item.imageBase64} alt={item.name} />
//       <h3>{item.name}</h3>
//       <p>₹ {item.price} · {item.city}</p>

//       <div className="actions">
//         <a className="btn secondary" href={`tel:${item.contactPhone}`}>Call</a>
//         <Link className="btn" to={`/animal/${item._id}`}>View</Link>
//       </div>
//       <button 
//   style={{ background: "red", color: "white", padding: "8px 12px", borderRadius: "5px", border:"none", marginLeft:"5px" }}
//   onClick={onDelete}
// >
//   Delete
// </button>

//     </div>
//   );
// }

import { Link } from "react-router-dom";

export default function LivestockCard({ item, onDelete }) {
  return (
    <div className="card">
      <img src={item.imageBase64} alt={item.name} />

      <h3>{item.name}</h3>
      <p>₹ {item.price} · {item.city}</p>

      <div className="actions">
        <a className="btn secondary" href={`tel:${item.contactPhone}`}>Call</a>
        <Link className="btn" to={`/animal/${item._id}`}>View</Link>
        <button
          className="btn"
          style={{ background:"red", color:"white" }}
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

