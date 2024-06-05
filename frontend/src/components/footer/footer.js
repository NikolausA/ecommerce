import styled from "styled-components";

const FooterContainer = ({ className }) => {
  return <div className={className}>Footer</div>;
};

export const Footer = styled(FooterContainer)`
  width: 100%;
  height: 80px;
  text-align: center;
  font-size: 30px;
  background-color: #0f1521;
  color: #fff;
`;
