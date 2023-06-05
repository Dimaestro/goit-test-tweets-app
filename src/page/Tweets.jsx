import ScrollToTop from "react-scroll-to-top";
import Filter from "../components/Filter/Filter";
import Tweets from "../components/Tweets/Tweets";
import css from '../helpers/ScrollButton.module.css';

const TweetsPage = () => {
  return (
    <>
      <Filter />
      <Tweets />
      <ScrollToTop className={css.scrollToTop} top={300} color={{fill: "aliceblue"} } smooth />
    </>
  )
}

export default TweetsPage;
