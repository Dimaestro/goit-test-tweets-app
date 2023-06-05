import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetUserTweetsQuery } from '../../redux/api/tweetsApi';
import { selectFollows } from '../../redux/follows/selectors';
import { selectStatusFilter } from '../../redux/filters/selectors';
import { statusFilters } from '../../redux/filters/constants';
import { getFilteredFollows } from '../../helpers/getFilteredFollows';

import css from './Tweets.module.css';
import Tweet from '../Tweet/Tweet';
import LoadMore from '../LoadMore/LoadMore';
import Section from '../Section/Section';

const Tweets = () => {
  const location = useLocation();
  const follows = useSelector(selectFollows);
  const status = useSelector(selectStatusFilter);
  const [perPage, setPerPage] = useState(3);
  const { data = [], isLoading, isError, error, isFetching } = useGetUserTweetsQuery();

  const getUserTweets = (data, isLoading) => {
    if (!isLoading && location.pathname === '/') {
      return [...data.slice(0, perPage)];
    }
    if (!isLoading && location.pathname === '/tweets') {
      const filterData = getFilteredFollows(follows, data, status, statusFilters);
      return filterData;
    }
  };

  const handleLoadMore = () => {
    setPerPage(state => state + 3);
  };

  const userTweets = getUserTweets(data, isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.data}</div>;
  }

  return (
    <Section>
      <h2 className={css.titleHidden}>Tweets</h2>
      <ul className={css.listTweets}>
        {userTweets &&
          userTweets.map(user => (
            <li className={css.itemTweets} key={user.id}>
              <Tweet user={user} isFetching={isFetching}/>
            </li>
          ))}
      </ul>
      {data.length > perPage && location.pathname === '/' && (
        <LoadMore onClick={handleLoadMore} />
      )}
    </Section>
  );
};

export default Tweets;
