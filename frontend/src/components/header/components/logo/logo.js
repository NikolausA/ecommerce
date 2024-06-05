import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  text-transform: uppercase;
`;

const LogoContainer = ({ className }) => {
  return (
    <div className={className}>
      <StyledLink to="/">handtime</StyledLink>
    </div>
  );
};

export const Logo = styled(LogoContainer)`
  padding: 5px 0;
  margin-right: 15px;
`;
