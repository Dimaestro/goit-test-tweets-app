import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';
import logo from '../../assets/Logo.svg';
import clsx from 'clsx';

const AppBar = () => {
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
          <li className={clsx(css.listItem, css.descItem)}>
            <NavLink className={css.navLink} to="/tweets">show all</NavLink>
          </li>
          <li className={clsx(css.listItem, css.mobileItem)}>
            <NavLink className={css.navLink} to="/tweets">all</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppBar;
