import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../actions";
import { selectUserLogin, selectUserRole } from "../../../../selectors";
import { NavbarButton } from "../navbar-button/navbar-button";
import { ROLE } from "../../../../constants";
import styled from "styled-components";

const StyledIcon = styled(Link)`
  margin-left: 10px;
  font-size: 16px;
  color: #8019c8;
`;

const NavbarContainer = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = useSelector(selectUserLogin);
  const roleId = useSelector(selectUserRole);

  const onLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className={className}>
      <NavbarButton to="/">Home</NavbarButton>
      <NavbarButton to="/products">Men</NavbarButton>
      {/* <NavbarButton to="/product">Women</NavbarButton> */}
      {roleId === ROLE.ADMIN && (
        <NavbarButton to="/admin-panel">Admin</NavbarButton>
      )}
      {login ? (
        <>
          <span>{login}</span>
          <i className="fa fa-sign-out" onClick={onLogout} />
        </>
      ) : (
        <StyledIcon to="/login">
          <i className="fa fa-user" />
        </StyledIcon>
      )}

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

  & .fa-sign-out {
    margin-left: 10px;
    font-size: 18px;
    color: #8019c8;
    cursor: pointer;
  }
`;
