import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductsAsync } from "./actions";
import { Routes, Route } from "react-router-dom";
import { Header, Footer, Modal } from "./components";
import {
  AdminPanel,
  Authorization,
  Main,
  Product,
  Products,
  Registration,
} from "./pages";
import { selectUser } from "./selectors";
import { ProtectedRoute } from "./protected-route";
import { ROLE } from "./constants";
import styled from "styled-components";

const AppColumn = styled.div`
  margin: 0 auto;
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Page = styled.div`
  box-sizing: border-box;
  margin: 10px 0;
  width: 100%;
  padding: 10px 5px;
  min-height: calc(100vh - 176px);
  background-color: #f5f5f5;
`;

export const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(setProductsAsync());
  }, [dispatch]);

  return (
    <AppColumn>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route
            path="/admin-panel"
            element={
              <ProtectedRoute user={user} admin={ROLE.ADMIN}>
                <AdminPanel />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Page>
      <Footer />
      <Modal />
    </AppColumn>
  );
};
