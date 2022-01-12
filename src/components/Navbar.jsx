import { useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom';
import { SidebarContext } from '../context/SidebarContext';

const Navbar = () => {
  const location = useLocation();
  const [sidebar, setSidebar] = useContext(SidebarContext);
  const role = sessionStorage.getItem('role')

  const showSidebar = () => setSidebar(!sidebar);

  function handleLogout(){
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('role')
  }
  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark sticky-top'
      style={{ backgroundColor: '#2647bd' }}
    >
      <div className='container-fluid'>
        {location.pathname === '/' ||
          location.pathname === '/login' ||
          location.pathname === '/signup' ||
          location.pathname === '/profile' ? null : (
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
            <p className='text-white mt-3 me-3 d-md-block d-none'>{role === "RT" ? 'Ketua RT' : 'Keluarga'}</p>
            <div className="btn-group dropstart">
              <img src='/images/Avatar.png' alt='' style={{ width: '50px' }} className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" />
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={'/profile'}><MdIcons.MdOutlineAccountCircle/><span>AKUN</span></Link></li>
                <li><Link className="dropdown-item" to={'/dashboard'}><MdIcons.MdDashboard /><span>DASHBOARD</span></Link></li>
                <li><Link className="dropdown-item" to={'/'} onClick={handleLogout}><MdIcons.MdLogout/><span className='fw-bold'>KELUAR</span></Link></li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
