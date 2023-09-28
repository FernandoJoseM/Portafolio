import'boxicons'
import { Link } from "react-router-dom";
import programing from "../assets/codificacion.png";
import { useState } from 'react';

const Header = () => {
  const [menuBar, setMenuBar] = useState(false)
  return (
    <header className="header">
      <img className='img-bar' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFJJREFUSEtjZKAxYKSx+QyjFhAMYfoH0c9v3/4TdBYeBexcXCiOxvABzS2gxPXY9NI/DmjuA5rHAc0toHkQDX0LaB4HNLdg6MfBqA/QQ4DmpSkAR1QYGTfm0yIAAAAASUVORK5CYII=" onClick={()=>setMenuBar(!menuBar)}/>
      <img className="img-logo" src={programing} />
      <nav className='header-nav'onClick={()=>setMenuBar(false)}>
        <ul className={`header-ul ${menuBar && 'open'}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Acerca de mi</Link>
          </li>
          <li>
            <Link to="/skills">Mis habilidades</Link>
          </li>
          <li>
            <Link to="/experience">Proyectos</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );  
};

export default Header;
