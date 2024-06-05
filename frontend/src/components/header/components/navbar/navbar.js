import { NavbarButton } from "../navbar-button/navbar-button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledIcon = styled(Link)`
  margin-left: 10px;
  font-size: 16px;
  color: #8019c8;
`;

const NavbarContainer = ({ className }) => {
  return (
    <div className={className}>
      <NavbarButton to="/">Home</NavbarButton>
      <NavbarButton to="/product">Men</NavbarButton>
      <NavbarButton to="/product">Women</NavbarButton>
      <NavbarButton to="/admin-panel">Admin</NavbarButton>
      <StyledIcon to="/login">
        <i className="fa fa-user" />
      </StyledIcon>
      <StyledIcon to="/cart">
        <i className="fa fa-shopping-cart" />
      </StyledIcon>
    </div>
  );
};

export const Navbar = styled(NavbarContainer)`
  display: flex;
  justify-content: end;
  align-items: center;
`;
