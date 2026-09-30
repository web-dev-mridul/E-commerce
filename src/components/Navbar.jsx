import { Link } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons-react";
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between mx-25 my-5">
        <div>E-commerce</div>
        <div className="flex gap-5">
          <Link to="/" className="text-blue-700">Home</Link>
          <Link to="/Products" className="hover:text-blue-700">Products</Link>
          <Link to="/About" className="hover:text-blue-700">About</Link>
          <Link to="/Contact" className="hover:text-blue-700">Contact</Link>
          <Link to="/Login" className="hover:text-blue-700">Login</Link>
        </div>
        <div>
          <IconShoppingCart stroke={2} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
