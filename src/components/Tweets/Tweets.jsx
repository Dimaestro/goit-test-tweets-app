import css from './Tweets.module.css';
import Tweet from '../Tweet/Tweet';
import LoadMore from '../LoadMore/LoadMore';
import Section from '../Section/Section';
import { useState } from 'react';
import { useGetTweetsQuery } from '../../redux/api/tweetsApi';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFollows } from '../../redux/follows/selectors';
import { selectStatusFilter } from '../../redux/filters/selectors';
import { statusFilters } from '../../redux/filters/constants';

const Tweets = () => {
  const location = useLocation();
  const follows = useSelector(selectFollows);
  const status = useSelector(selectStatusFilter);
  const [perPage, setPerPage] = useState(3);
  const { data = [], isLoading, isError, error } = useGetTweetsQuery();

  const getFilteredFollows = (follows, data, status, statusFilter) => {

    const resultFollowing = data.filter(user => {
      return follows.some(item => item === user.id);
    });

    const resultFollow = data.filter(user => {
      return !(follows.some(item => item === user.id));
    })

    console.log('getFilteredFollowing');
    switch (status) {
      case statusFilter.active:
        return resultFollowing;
      case statusFilter.completed:
        return resultFollow;
      default:
        return data;
    }
  };

  const getUserTweets = (data, isLoading) => {
    if (!isLoading && location.pathname === '/') {
      console.log("getUserTweets");
      return [...data.slice(0, perPage)];
    }
    if (!isLoading && location.pathname === '/tweets') {
      const filterData = getFilteredFollows(follows, data, status, statusFilters);
      console.log("filterData");
      return filterData;
    }
  };

  const handleLoadMore = () => {
    setPerPage(state => state + 3);
    console.log("Download");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.data}</div>;
  }

  const userTweets = getUserTweets(data, isLoading);

  return (
    <Section>
      <h2 className={css.titleHidden}>Tweets</h2>
      <ul className={css.listTweets}>
        {userTweets &&
          userTweets.map(user => (
            <li className={css.itemTweets} key={user.id}>
              <Tweet user={user} />
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
