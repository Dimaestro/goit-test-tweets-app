import ScrollToTop from "react-scroll-to-top";
import Tweets from "../components/Tweets/Tweets"
import css from './ScrollButton.module.css';

const Home = () => {
  return (
    <>
      <Tweets />
      <ScrollToTop
        className={css.scrollToTop}
        color={"#fff"}
        top={300}
        width={18}
        height={18}
        smooth 
        style={{
          bottom: 20,
          right: 20,
          border: "1px solid transparent",
          borderRadius: "50%",
          width: "45px",
          height: '45px',
          backgroundColor: "hsla(240, 4%, 11%, 0.521)",
          boxShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
        }}
      />
    </>
  )
}

export default Home
