import { AdminForm, ProductsTable } from "./components";
import styled from "styled-components";

const AdminPanelContainer = ({ className }) => {
  return (
    <div className={className}>
      <AdminForm />
      <ProductsTable />
    </div>
  );
};

export const AdminPanel = styled(AdminPanelContainer)`
  display: flex;
`;
