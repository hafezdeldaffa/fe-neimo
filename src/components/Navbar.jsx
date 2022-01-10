import { useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { SidebarContext } from '../context/SidebarContext';

const Navbar = () => {
  const location = useLocation();
  const [sidebar, setSidebar] = useContext(SidebarContext);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark sticky-top'
      style={{ backgroundColor: '#2647bd' }}
    >
      <div className='container-fluid'>
        {location.pathname === '/' ||
        location.pathname === '/login' ||
        location.pathname === '/signup' ? null : (
          <>
            <div>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars
                  onClick={showSidebar}
                  style={{ color: 'white' }}
                />
              </Link>
            </div>
          </>
        )}
        <Link className='navbar-brand' to='/'>
          NEIMO
        </Link>
        {location.pathname === '/' ? (
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
        ) : null}
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            {/* {routes.map((r, id) => (
              <li key={id} className='nav-item'>
                <Link
                  className={`nav-link text-capitalize ${
                    location.pathname === r.path ? 'active' : ''
                  }`}
                  to={r.path}
                >
                  {r.name}
                </Link>
              </li>
            ))} */}
          </ul>
        </div>
        {location.pathname === '/' ||
        location.pathname === '/login' ||
        location.pathname === '/signup' ? (
          <Link className='nav-link btn-masuk px-4 fw-normal' to={'/login'}>
            {' '}
            Masuk{' '}
          </Link>
        ) : (
          <>
            <p className='text-white mt-3 me-3 d-md-block d-none'>Keluarga</p>
            <img src='/images/Avatar.png' alt='' style={{ width: '50px' }} />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
