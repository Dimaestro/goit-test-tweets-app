import ScrollToTop from "react-scroll-to-top";
import Tweets from "../components/Tweets/Tweets"
import css from './ScrollButton.module.css';

const Home = () => {
  return (
    <>
      <Tweets />
      <ScrollToTop
        className={css.scrollToTop}
        top={300}
        width={18}
        height={18}
        smooth 
        style={{bottom: 20, right: 20,}}
      />
    </>
  )
}

export default Home
