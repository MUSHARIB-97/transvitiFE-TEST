import React, { ReactNode, useState } from "react";
import Navbar from "../components/navbar/Navbar";
interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <main className="w-full h-screen overflow-x-hidden bg-[#F4F4F4]">
      <section className="md:px-6 px-2 bg-white">
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </section>
      <section className="md:px-6 px-2 w-full">{children}</section>
    </main>
  );
};

export default MainLayout;
