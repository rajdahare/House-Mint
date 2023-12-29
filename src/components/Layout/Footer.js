import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer pt-4 d-flex flex-column align-items-center justify-content-center bg-dark text-light p-4">
      <h3>
        Made With
        <img
          src="./assets/love.gif"
          alt="love"
          height={60}
          width={80}
          className="mx-3 footer-gif"
        />
      </h3>
      <h6>All Right Reserved &copy;:2023</h6>
      <div className="d-flex flex-row p-2">
        <p className="me-4" title="Github">
          <Link to="https://github.com/rajdahare">
            <BsGithub color="black" size={30} />
          </Link>
        </p>
        <p className="me-4" title="Instagram">
          <Link to="https://www.instagram.com/rajdahare_/?igsh=Nmd6azR1a2FuMzhu">
            <BsInstagram color="red" size={30} />
          </Link>
        </p>
        <p className="me-4" title="LinkedIn">
          <Link to="https://www.linkedin.com/in/raj-dahare-88283a17a/">
            <BsLinkedin color="blue" size={30} />
          </Link>
        </p>
        <p className="me-4" title="Twitter">
          <Link to=" https://x.com/dahare_raj147?t=DSY83pWe-a3pxO8hlV0ubA&s=08 ">
            <BsTwitter color="blue" size={30} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
