import styled from "styled-components";
import { Logo } from "../header/components";

const FooterContainer = ({ className }) => {
  return (
    <div className={className}>
      <Logo color="#fff" />
      <div className="container">
        <div className="contacts">
          <h4>Contacts</h4>
          <p>
            <i className="fa fa-map-marker" />
            Bryansk, Lenina str., 12
          </p>
          <p>
            <i className="fa fa-mobile" />
            +7-123-456-88-99
          </p>
          <p>
            <i className="fa fa-envelope-o" />
            handtime@mail.ru
          </p>
        </div>
        <div className="information">
          <h4>Information</h4>
          <p>
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt
          </p>
        </div>
      </div>
    </div>
  );
};

export const Footer = styled(FooterContainer)`
  width: 100%;
  text-align: center;
  font-size: 30px;
  background-color: #0f1521;
  color: #fff;

  & .container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    border-top: 3px solid #fff;
  }

  & h4 {
    font-size: 20px;
    margin: 10px 0 0 0;
  }

  & .contacts {
    width: 40%;
    font-size: 14px;
  }

  & .information {
    width: 40%;
    font-size: 14px;
  }

  & .fa {
    margin-right: 5px;
  }
`;
