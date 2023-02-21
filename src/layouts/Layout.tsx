import {Outlet} from "react-router";
import Categories from "@components/categories/Categories";

const Layout = () => {
  return (
      <>
        <Categories />
        <Outlet />
      </>
  );
};

export default Layout;
