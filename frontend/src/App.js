// import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  AdminPanel,
  Authorization,
  Main,
  Product,
  Registration,
} from "./pages";
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
  padding: 20px;
  min-height: calc(100vh - 176px);
  background-color: #f5f5f5;
`;

export const App = () => {
  // const [data, setData] = useState("");

  // useEffect(() => {});

  return (
    <AppColumn>
      <Header />
      <Page>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/:id" element={<Product />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Routes>
      </Page>
      <Footer />
    </AppColumn>
  );
};
