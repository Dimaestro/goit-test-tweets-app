import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from './AppBar.module.css';
import logo from '../../assets/Logo.svg';
import clsx from 'clsx';

const AppBar = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className={css.container}>
      <NavLink className={css.logo} to='/'>
        <img src={logo} alt='logo' ></img>
      </NavLink>
      <div className={css.titleContainer}>
        <h2 className={css.title}>Popular Tweets</h2>
      </div>
      <nav>
        <ul className={css.list}>
          <li className={clsx(css.listItem, )}>
            {location.pathname === '/' ? (
              <>
                <NavLink
                  className={clsx(css.navLink)}
                  to="/tweets"
                  state={{ from: location }}
                >
                  all
                </NavLink>
              </>
            ) : (
              <NavLink className={css.navLink} to={location.state?.from} >Back</NavLink>
            )}
            
          </li>
          <li className={clsx(css.listItem, )}>
            
          </li>
          <li className={clsx(css.listItem)}>
            
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppBar;
