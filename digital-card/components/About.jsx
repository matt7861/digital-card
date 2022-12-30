import photo from "../src/assets/ph.jpg";
import linkedin from "../src/assets/linkedin.svg";
import email from "../src/assets/email.svg";

const About = () => {
  return (
    <div className="about">
      <img src={photo} alt="" />
      <div className="about__inner">
        <h1>Matt McGilton</h1>
        <h2>Frontend Developer</h2>
        <a className="site" href="#">
          mattmcgilton.com
        </a>
        <div className="button-container">
          <a className="button button--white" href="#">
            <img src={email} alt="" />
            Email
          </a>
          <a className="button button--blue" href="#">
            <img src={linkedin} alt="" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
