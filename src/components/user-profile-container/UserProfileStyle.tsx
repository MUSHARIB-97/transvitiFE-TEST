export const Styles = {
  profileCard: `bg-white pb-4 rounded-md w-full flex flex-col items-center shadow-sm`,
  coverImage: `w-full h-30 [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:rounded-t-md`,
  profileImage: `w-20 h-20 border-4 border-white -mt-8 rounded-full [&>img]:w-full [&>img]:h-full [&>img]:object-contain`,
  userDetail: `flex flex-col items-center m-4 w-full px-4 
    [&>p]:truncate [&>p]:overflow:hidden [&>p]:whitespace-nowrap [&>p]:w-full [&>p]:text-center [&>p]:text-[.9rem] [&>p:first-child]:text-[1.3rem]`,
  StatsCard: `bg-white pb-4 rounded-md w-full mt-4 flex flex-col items-center p-3 shadow-sm
    [&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:w-full [&>div]:py-2
    [&>div]:border-b last:[&>div]:border-b-0 [&>div>p:last-child]:text-primary`,
  CalenderCard: `bg-white rounded-md w-full mt-4 flex items-center px-4 py-2 justify-between shadow-sm
    `,
};
