import { Navbar, Logo } from "./components";
import styled from "styled-components";

const HeaderContainer = ({ className }) => {
  return (
    <div className={className}>
      <Logo />
      <Navbar />
    </div>
  );
};

export const Header = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 0 25px;
  background-color: #fff;
  box-shadow: 0 -2px 17px #000;
`;
