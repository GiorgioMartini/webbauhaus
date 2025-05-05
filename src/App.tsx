import { Outlet, Link } from "@tanstack/react-router";

function App() {
  return (
    <div>
      <nav className="p-4">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}
export default App;
