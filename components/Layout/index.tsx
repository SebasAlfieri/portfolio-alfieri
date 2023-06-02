import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import s from "./Layout.module.css";
// import { Header, Footer } from '@/components';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <motion.main
      className={router.pathname === "/" ? s.layout_login : s.layout}
    >
      <Header login={router.pathname === "/" ? true : false} />
      <motion.main className={s.layout__main}>{children}</motion.main>
      <Footer />
    </motion.main>
  );
};

export default Layout;
