import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { addFollowing, removeFollowing } from '../../redux/follows/followsSlice';
import { useUpdateTweetsMutation } from '../../redux/api/tweetsApi';
import { selectFollows } from '../../redux/follows/selectors';
import clsx from 'clsx';
import css from './Tweet.module.css'
import PropTypes from 'prop-types';
import logo from '../../assets/Logo.svg';
import background from '../../assets/backgroundTweet.png';


const Tweet = ({ user, isFetching }) => {
  const dispatch = useDispatch();
  const following = useSelector(selectFollows);
  const [isFollowing, setIsFollowing] = useState(false);
  const [updateUser, isLoading] = useUpdateTweetsMutation();
  
  useEffect(() => {
    const renderItem = following.some(item => item === user.id);
    if (renderItem) {
      setIsFollowing(true);
    }
    return;
  },[following, user.id])

  const handleClick = () => {
    if (isFollowing) {
      updateUser({...user, followers: user.followers - 1});
      dispatch(removeFollowing(user.id))
      setIsFollowing(false)
      return;
    }
    updateUser({...user, followers: user.followers + 1});
    dispatch(addFollowing(user.id));
    setIsFollowing(true)
  }

  return (
    <div className={css.container}>
      <div>
        <LazyLoadImage
          src={logo}
          alt='GOIT company'
        />
      </div>
      <div className={css.backgroundContainer}>
        <LazyLoadImage
          src={background}
          alt='backgrount tweets card'
        />
      </div>
      <div className={css.rectangle}></div>
      <div className={css.containeAvatar}>
        <div className={css.circle}>
          <LazyLoadImage
            className={css.avatar}
            src={user.avatar}
            alt={user}
            width={62}
            height={62} />
        </div>
      </div>
      <ul className={css.listInfo}>
        <li className={css.listItem}>
          <p className={css.infoText}>
            {user.tweets} tweets
          </p>
        </li>
        <li className={css.listItem}>
          <p className={css.infoText}>
            {user.followers} followers
          </p>
        </li>
      </ul>
      <div className={css.buttonContainer}>
        <button
          type="button"
          disabled={isFetching && isLoading}
          className={
            clsx(
              css.button,
              isFollowing && css.buttonActive
            )
          }
          onClick={handleClick}
        >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
      </div>
    </div>
  )
}

Tweet.propTypes = {
  user: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

export default Tweet;
