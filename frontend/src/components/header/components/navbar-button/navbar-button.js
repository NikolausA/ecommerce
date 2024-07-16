import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarButton = styled(NavLink)`
  margin: 0 2px;
  padding: 5px 15px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #000;
  border-radius: 5px;
  text-transform: uppercase;

  &.active {
    color: #fff;
    background-color: #19c880;
  }

  &:hover {
    color: #fff;
    background-color: #8019c8;
  }
`;
