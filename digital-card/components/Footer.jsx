import facebook from "../src/assets/facebook.svg";
import github from "../src/assets/github.svg";
import instagram from "../src/assets/instagram.svg";
import twitter from "../src/assets/twitter.svg";

const Footer = () => {
  return (
    <footer>
      <a href="#">
        <img src={twitter} alt="twitter icon" />
      </a>
      <a href="#">
        <img src={facebook} alt="facebook icon" />
      </a>
      <a href="#">
        <img src={instagram} alt="instagram icon" />
      </a>
      <a href="#">
        <img src={github} alt="github icon" />
      </a>
    </footer>
  );
};

export default Footer;
