import {NavLink} from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <NavLink className="products" to='/'>Products</NavLink>
      </div>
    </>
  )
}

export default Navbar;
 