import styled from "styled-components";

const MainContainer = ({ className }) => {
  return (
    <div className={className}>
      <img
        src="http://localhost:3002/uploads/main-page-slider-bg.jpg"
        alt="slider-bg"
      />
    </div>
  );
};

export const Main = styled(MainContainer)`
  & img {
    width: 100%;
  }
`;
