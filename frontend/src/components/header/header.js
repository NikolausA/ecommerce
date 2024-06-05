import styled from "styled-components";
import { Navbar, Logo } from "./components";

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
  width: 100%;
  height: 70px;
  padding: 0 25px;
  background-color: #fff;
  box-shadow: 0 -2px 17px #000;
`;
