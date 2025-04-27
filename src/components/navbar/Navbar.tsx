import React, { useState } from "react";
import IMAGES from "../../assets/images";
import { NavLink } from "react-router-dom";
import { RoutesLinks } from "../../helper/Constant";
import CustomButton from "../CustomButton";
import { motion, AnimatePresence } from "framer-motion";
import { style } from "./navbar-style";
import UserProfileLogo from "../UserProfileLogo";
import { NavbarProps } from "../../types/dataTypes";
import BottomSheet from "../BottomSheet";
import UserProfile from "../user-profile-container/UserProfile";

const Navbar: React.FC<NavbarProps> = ({ openMenu = false, setOpenMenu }) => {
  const [showUserProfileSheet, setShowUserProfileSheet] =
    useState<boolean>(false);

  return (
    <header className={style.mainContainer}>
      <nav className={style.subContainer}>
        {/* leftSection */}
        <section className={style.leftSection}>
          <div className={style.logoContainer}>
            <img src={IMAGES.logo} alt="Logo" className={style.logoImage} />
          </div>

          {/* NavLinks */}
          <div className={style.navLinksContainer}>
            {RoutesLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  `${style.navLink} ${
                    isActive ? style.navLinkActive : style.navLinkInactive
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Toggle Button */}
          <div className={style.toggleButton} onClick={() => setOpenMenu(true)}>
            {/* <AnimatePresence mode="wait"> */}
            <img
              key="menu"
              // {...style.toggleMotionProps}
              src={IMAGES.menu}
              alt="menu"
              className={style.toggleIcon}
            />
            {/* </AnimatePresence> */}
          </div>
        </section>
        {/* right section */}
        <section className={style.rightSection}>
          {/* search bar */}
          <div className="flex items-center gap-2">
            <div className={style.searchContainer}>
              <img
                src={IMAGES.search}
                alt="search"
                className={style.searchIcon}
              />
              <input
                type="search"
                placeholder="Search"
                className={style.searchInput}
              />
            </div>
            {/* resume button */}
            <div className="hidden md:flex">
              <CustomButton title="Resume Builder" />
            </div>
          </div>
          {/* profile image */}
          <div>
            <UserProfileLogo />
          </div>
        </section>
      </nav>

      {/* mobile view navbar */}
      <main className={style.mainContainer}>
        <div className={style.mainContainerMobile}>
          <div className={style.toggleButton} onClick={() => setOpenMenu(true)}>
            <img src={IMAGES.menu} className={style.toggleIcon} />
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Search"
              className={style.searchContainer}
            />
          </div>
          <div>
            <img src={IMAGES.logo} alt="logo" className={style.logoImage} />
          </div>
        </div>
      </main>
      {/* drawer */}
      <AnimatePresence>
        {openMenu && (
          <>
            {/* Backdrop */}
            <motion.div
              className={style.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpenMenu(false)}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={style.drawerContainer}
            >
              <div className={style.headerContent}>
                <div className={style.closeIconContainer}>
                  <img
                    src={IMAGES.close}
                    alt="close menu"
                    className={style.closeIcon}
                    onClick={() => setOpenMenu(false)}
                  />
                </div>
                <div className={style.userContainer}>
                  {/* <UserProfileLogo /> */}
                  {/* Show profile image on medium and up */}
                  <div className="flex md:hidden">
                    <UserProfileLogo />
                  </div>

                  {/* Show user initials or logo only on small screens */}
                  <div className="hidden md:flex">
                    <img
                      src={IMAGES.logo}
                      alt="logo"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        setShowUserProfileSheet(true);
                      }
                    }}
                  >
                    <p className={style.userName}>Albert Flores</p>
                    <p className={style.userDesc}>Senior Product Designer</p>
                  </div>
                </div>
                {/* logo at medium screen or tablet screen */}
                {/* <div className={style.logoContainer}>
                  <img
                    src={IMAGES.logo}
                    alt="Logo"
                    className={style.logoImage}
                  />
                </div> */}
              </div>
              <div className={style.drawerContent}>
                <div className={style.drawerResumeBtn}>
                  <CustomButton title="Resume Builder" />
                </div>
                {RoutesLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.to}
                    className={({ isActive }) =>
                      `${style.navLink} ${
                        isActive ? style.navLinkActive : style.navLinkInactive
                      }`
                    }
                    onClick={() => setOpenMenu(false)}
                  >
                    <img src={link.icon} className="w-5 h-5 object-contain" />
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
      {/* BottomSHeet */}
      <BottomSheet
        isOpen={showUserProfileSheet}
        onClose={() => setShowUserProfileSheet(false)}
      >
        <UserProfile />
      </BottomSheet>
    </header>
  );
};

export default Navbar;
