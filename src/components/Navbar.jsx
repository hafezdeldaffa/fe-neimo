import routes from '../routes';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark sticky-top'
      style={{ backgroundColor: '#2647bd' }}
    >
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Neimo
        </Link>
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
        <Link className='nav-link btn-masuk px-4 fw-normal' to={'/login'}>
          Masuk
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
