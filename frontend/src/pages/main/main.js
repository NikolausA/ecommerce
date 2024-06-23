import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProductsAsync } from "../../actions";
import styled from "styled-components";

const MainContainer = ({ className }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProductsAsync());
  }, [dispatch]);

  return <div className={className}>Main Page</div>;
};

export const Main = styled(MainContainer)``;
