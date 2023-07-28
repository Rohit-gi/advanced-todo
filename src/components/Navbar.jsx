import {NavLink} from 'react-router-dom'
import {ReactComponent as Brand} from '../images/logo.svg'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
            <Brand/>
        </div>
        <div className='nav-elements'>
          <ul>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <NavLink to="/tasklist">Task List</NavLink>
            <li>
            <NavLink to="/addtasks">Add Tasks</NavLink>
            </li>
            <NavLink to="/about">About</NavLink>
            <li>
            <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
