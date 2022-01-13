import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import routes from '../routes';
import '../styles/css/sidebar.css';
import { IconContext } from 'react-icons';
import { SidebarContext } from '../context/SidebarContext';

function Sidebar() {
  const location = useLocation();
  const queryString = require('query-string')
  const value = queryString.parse(location.pathname);
  console.log(value)
  const role = sessionStorage.getItem('role')
  console.log(role)

  const [sidebar, setSidebar] = useContext(SidebarContext);
  const showSidebar = () => setSidebar(sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#00000' }}>
        <nav className={sidebar ? 'nav-menu mt-5' : 'nav-menu active mt-5'}>
          <ul className='nav-menu-items mt-5' onClick={showSidebar}>
            {routes.map((item, index) => {
              return (
                index > 4 ?
                  role === 'Keluarga' && item.path === '/data-laporan' ?
                    null
                    :
                    <li key={index} className={item.cName} value={index}>
                      <Link to={item.path}>
                        {item.icon}
                        <span
                          className={
                            location.pathname === item.path
                              ? 'fw-bold'
                              : 'fw-normal'
                          }
                        >
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  : null
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
