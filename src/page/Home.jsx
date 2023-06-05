import ScrollToTop from "react-scroll-to-top";
import Tweets from "../components/Tweets/Tweets"
import css from '../helpers/ScrollButton.module.css';

const Home = () => {
  return (
    <>
      <Tweets />
      <ScrollToTop
        className={css.scrollToTop}
        top={300}
        width={18}
        height={18}
        color={{ fill: "aliceblue" }}
        smooth 
        style={{bottom: 20, right: 20, backgroundColor: "hsla(240, 4%, 11%, 0.521)"}}
      />
    </>
  )
}

export default Home