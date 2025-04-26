export const style = {
  // Main Containers
  mainContainer: "w-full h-16",
  subContainer: "hidden md:flex items-center justify-between h-full",

  //mobile navbar
  mainContainerMobile:
    "flex md:hidden items-center justify-between h-full gap-4",

  // Left Section
  leftSection: "flex items-center justify-center gap-2 md:gap-4",
  logoContainer: "flex items-center gap-2",
  drawerLogo: "hidden md:flex items-center gap-2",
  logoImage: "w-8 h-8 object-contain mr-2 md:mr-0",

  // Nav Links
  navLinksContainer: "hidden xl:flex items-center gap-4",
  navLink: "font-medium leading-4 flex items-center gap-2",
  navLinkActive: "text-primary text-lg font-bold [&>img]:fill-primary",
  navLinkInactive: "text-text-secondary font-light hover:text-hover-primary",

  // Toggle Button
  toggleButton: "xl:hidden flex cursor-pointer",
  toggleIcon: "w-6 h-6 object-contain",
  toggleMotionProps: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    transition: { duration: 0.2 },
  },

  // Right Section
  rightSection: "flex items-center gap-2 md:gap-4",
  searchContainer:
    "flex flex-1 w-full h-8 pl-2 items-center rounded-md gap-2 p-1 bg-background-secondary",
  searchIcon: "w-4 h-4 object-contain",
  searchInput: "w-full bg-transparent outline-none h-full",

  // Resume Button
  resumeButton: "hidden md:flex",

  // Profile Image
  profileImage: "w-10 h-10 object-contain rounded-full",

  // side drawer
  // in style.ts
  backdrop: "fixed inset-0 bg-black bg-opacity-50 z-[20]",
  drawerContainer:
    "fixed top-0 left-0 w-64 h-screen bg-white shadow-lg z-[30] flex flex-col rounded-tr-[1.5rem]",

  drawerContent:
    "flex flex-col gap-4 h-screen bg-[#F4F4F4] p-2 rounded-t-[1rem] pt-4",
  // drawerNavLink:
  //   "font-medium text-base text-text-secondary hover:text-primary transition-colors duration-200",

  // side drawer content
  headerContent: "px-4 py-2 relative",
  closeIcon: "w-4 h-4 object-contain cursor-pointer",
  closeIconContainer: "flex justify-end w-full",
  userContainer: "flex items-center gap-2 mb-8",
  userName: "text-lg font-semibold text-hover-primary p-0 m-0 leading-0",
  userDesc: "text-sm/6 font-light p-0 m-0 -mt-1.5",
  drawerResumeBtn: "flex md:hidden justify-center -mt-8",
};
