import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;

const LogoContainer = ({ className, ...props }) => {
  return (
    <div className={className}>
      <StyledLink to="/">handtime</StyledLink>
    </div>
  );
};

export const Logo = styled(LogoContainer)`
  color: ${({ color = "#000" }) => color};
  padding: 5px 0;
  margin-right: 15px;

  ${StyledLink} {
    color: inherit;
  }
`;
