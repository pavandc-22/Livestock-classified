import { useState } from "react";
import { createLivestock } from "../api/client";
import { fileToBase64 } from "../utils/imageToBase64";

export default function UploadForm() {
  const [form, setForm] = useState({
    name: "",
    type: "",
    price: "",
    city: "",
    contactName: "",
    contactPhone: "",
    description: "",
    imageBase64: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const base64 = await fileToBase64(file);
    setForm({ ...form, imageBase64: base64 });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!form.imageBase64) {
      alert("Please upload image");
      return;
    }

    await createLivestock({ 
      ...form, 
      price: Number(form.price)
    });

    alert("✅ Livestock Added Successfully!");
    window.location.href = "/";
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add Livestock</h2>

      <input name="name" placeholder="animal name" onChange={handleChange} required />
      <input name="type" placeholder="Animal Type (cow/goat)" onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} required />
      <input name="city" placeholder="City" onChange={handleChange} required />
      <input name="contactName" placeholder="Owner Name" onChange={handleChange} required />
      <input name="contactPhone" placeholder="Phone Number" onChange={handleChange} required />

      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>

      <input type="file" onChange={handleFile} required />
      <button>Add</button>
    </form>
  );
}
