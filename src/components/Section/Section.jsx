import css from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ children }) => {
  return (
    <section className={css.section}>
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.any.isRequired
}
export default Section
