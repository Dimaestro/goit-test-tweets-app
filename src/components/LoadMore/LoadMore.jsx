import PropTypes from 'prop-types';
import css from './LoadMore.module.css';

const LoadMore = ({onClick}) => {
  return (
    <div>
      <button
        className={css.button}
        type="button"
        name="load"
        onClick={onClick}
      >
        Load More ...
      </button>
    </div>
  )
}

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default LoadMore;
