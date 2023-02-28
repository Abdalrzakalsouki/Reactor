import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Reacter</h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  );
};
export default Navbar;
