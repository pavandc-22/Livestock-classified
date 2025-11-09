import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav">
      <Link to="/">🐄 Livestock Market</Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
      </div>
    </div>
  );
}
