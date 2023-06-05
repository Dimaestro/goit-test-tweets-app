import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/filters/constants';
import { setStatusFilter } from '../../redux/filters/filtersSlice';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.filter.status)

  const handleChange = event => {
    dispatch(setStatusFilter(event.target.value))
  };

  console.log(status);

  return (
    <div className={css.container}>
      <FormControl className={css.form} fullWidth>
        <InputLabel className={css.label} id="demo-simple-select-label">Filter</InputLabel>
        <Select 
          className={css.select}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem className={css.item} value={statusFilters.all}>All</MenuItem>
          <MenuItem className={css.item} value={statusFilters.active}>Active</MenuItem>
          <MenuItem className={css.item} value={statusFilters.completed}>Completed</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
