import { useSelector, useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/filters/constants';
import { setStatusFilter } from '../../redux/filters/filtersSlice';
import { selectStatusFilter } from '../../redux/filters/selectors';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectStatusFilter)

  const handleChange = event => {
    dispatch(setStatusFilter(event.target.value))
  };

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
          <MenuItem className={css.item} value={statusFilters.followings}>Followings</MenuItem>
          <MenuItem className={css.item} value={statusFilters.follow}>Follow</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
