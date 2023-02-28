import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Page Not Found!</h1>
      <p>you seem that you had lost your way!</p>
      <Link to="/">Home</Link>
    </div>
  );
};
export default NotFound;
