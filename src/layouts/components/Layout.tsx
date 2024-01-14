import React from "react";

import HeaderLoggedIn from "./Header/HeaderLoggedIn";
import HeaderLoggedOut from "./Header/HeaderLoggedOut";
import Footer from "./Footer/Footer";

import { useAppSelector } from "@/custom-hooks/useApp";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="w-full">
      {isLoggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
