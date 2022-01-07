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
        {location.pathname === '/' ? null : (
          <>
            <div className=' mt-1'>
              <Link to='/' className='menu-bars'>
                <FaIcons.FaLongArrowAltLeft
                  onClick={showSidebar}
                  style={{ color: 'white' }}
                />
              </Link>
            </div>
          </>
        )}
        <Link className='navbar-brand' to='/'>
          Neimo
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
        <div
          className='collapse navbar-collapse'
          id='navbarSupportedContent'
        ></div>
        {location.pathname === '/' ? (
          <Link className='nav-link btn-masuk px-4 fw-normal' to={'/login'}>
            {' '}
            Masuk{' '}
          </Link>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
