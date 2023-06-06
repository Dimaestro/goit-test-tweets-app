import { useDispatch } from 'react-redux';
import { statusFilters } from '../../redux/filters/constants';
import { setStatusFilter } from '../../redux/filters/filtersSlice';
import { useSearchParams } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import css from './Filter.module.css';
import { useEffect } from 'react';

const Filter = () => {
  const dispatch = useDispatch();
  const [serchParams, setSerchParams] = useSearchParams();
  const statusFilter = serchParams.get('status') ?? statusFilters.all

  useEffect(() => {
    dispatch(setStatusFilter(statusFilter));
  },[])

  const handleChange = event => {
    dispatch(setStatusFilter(event.target.value));
    setSerchParams({status: event.target.value});
  };

  return (
    <div className={css.container}>
      <FormControl className={css.form} fullWidth>
        <InputLabel className={css.label} id="demo-simple-select-label">Filter</InputLabel>
        <Select 
          className={css.select}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={statusFilter}
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
