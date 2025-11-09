import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLivestockById } from "../api/client";

export default function LivestockDetail() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    getLivestockById(id).then(setAnimal);
  }, [id]);

  if (!animal) return <p>Loading...</p>;

  return (
    <div>
      <h2>{animal.name}</h2>
      <img src={animal.imageBase64} style={{ width: "100%", maxWidth: "500px" }} />
      <p><strong>Price:</strong> ₹ {animal.price}</p>
      <p><strong>City:</strong> {animal.city}</p>
      <p>{animal.description}</p>
      <a className="btn" href={`tel:${animal.contactPhone}`}>Call Seller</a>
    </div>
  );
}
