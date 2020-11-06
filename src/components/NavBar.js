import React from 'react'
import {Link} from 'gatsby'
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>
        <li>
          <Link to="/product/">Product</Link>
        </li>
        <li>
          <Link to="/examples/">Examples</Link>
        </li>
        <li>
          <Link to="/image/">images</Link>
        </li>
      </ul>
      
    </nav>
  )
}

export default NavBar
