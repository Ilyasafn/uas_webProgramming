import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10 px-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Products</a>
      </div>
      <div className="flex-none gap-4">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Category</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Beauty</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <Link to={"/"}>
            <ShoppingCart/>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
