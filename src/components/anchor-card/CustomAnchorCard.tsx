import React from "react";
import IMAGES from "../../assets/images";
import CustomButton from "../CustomButton";

interface CustomAnchorCardProps {
  title: string;
  company: string;
  location: string;
  jobType?: string;
  datePosted: string;
  applicants: number;
  isSaved: boolean;
}

// const CustomAnchorCard: React.FC<CustomAnchorCardProps> = ({
//   title,
//   company,
//   location,
//   jobType,
//   datePosted,
//   applicants,
//   isSaved,
// }) => {
//   return (
//     <div className="max-w-xs h-full flex flex-col justify-between relative border-2 border-border-primary bg-white px-5 py-3 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
//       <div>
//         <p className="text-xs text-gray-500">{isSaved ? "Promoted" : ""}</p>

//         <div className="flex items-center gap-4 my-2">
//           <div className="w-14 h-14 rounded-xl bg-background-secondary flex items-center justify-center">
//             <img
//               src={IMAGES.teamsLogo}
//               alt="Teams Logo"
//               className="w-10 h-10 object-contain"
//             />
//           </div>
//           <div>
//             <h4 className="text-lg leading-3 text-text-black">{title}</h4>
//             <p className="text-normal text-text-black">{company}</p>
//           </div>
//         </div>

//         <div>
//           <div className="flex items-center">
//             <div className="w-8 h-8 flex items-center shrink-0">
//               <img
//                 src={IMAGES.location}
//                 alt="Location Icon"
//                 className="w-5 h-5 object-contain"
//               />
//             </div>

//             <div className="flex items-center overflow-hidden text-text-card text-lg">
//               <p className="whitespace-nowrap overflow-hidden text-ellipsis">
//                 {location}
//               </p>
//               <p className="shrink-0 ml-1">({jobType})</p>
//             </div>
//           </div>

//           <div className="flex items-center mt-2">
//             <div className="w-8 h-8 flex items-center shrink-0">
//               <img
//                 src={IMAGES.clock}
//                 alt="Clock Icon"
//                 className="w-5 h-5 object-contain"
//               />
//             </div>

//             <div className="flex items-center gap-2 overflow-hidden text-text-card text-lg">
//               <p className="whitespace-nowrap overflow-hidden text-ellipsis">
//                 {datePosted}
//               </p>
//               <div className="w-[1.5px] self-stretch bg-text-card" />
//               <p className="shrink-0 text-primary font-semibold">
//                 {`${applicants} Applicants`}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Button Section fixed at bottom */}
//       <div className="flex items-center gap-4 mt-auto pt-4">
//         <CustomButton title="Apply" />
//         <div>
//           <img
//             src={IMAGES.save}
//             alt="Save Icon"
//             className="w-5 self-stretch object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
const CustomAnchorCard: React.FC<CustomAnchorCardProps> = ({
  title,
  company,
  location,
  jobType,
  datePosted,
  applicants,
  isSaved,
}) => {
  return (
    <div className="w-full flex flex-col justify-between border-2 border-border-primary bg-white p-4 md:px-5 md:py-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Top Badge */}
      <header>
        {isSaved && (
          <p className="text-[10px] md:text-xs text-gray-500 font-medium">
            Promoted
          </p>
        )}
      </header>

      {/* Logo + Title */}
      <div className="flex items-center gap-3 md:gap-4 my-2">
        <div className="w-10 h-10 md:w-11 md:h-11 rounded-md bg-background-secondary flex items-center justify-center shrink-0">
          <img
            src={IMAGES.teamsLogo}
            alt="Teams Logo"
            className="w-6 h-6 md:w-7 md:h-7 object-contain"
          />
        </div>

        <div className="flex flex-col justify-center overflow-hidden">
          <h4
            className="text-sm md:text-base font-semibold text-text-black truncate"
            title={title}
          >
            {title}
          </h4>
          <p className="text-xs md:text-sm text-text-secondary truncate">
            {company}
          </p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center mt-2">
        <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center shrink-0">
          <img
            src={IMAGES.location}
            alt="Location Icon"
            className="w-5 h-5 object-contain"
          />
        </div>
        <div className="flex items-center overflow-hidden text-text-card text-sm md:text-base">
          <p className="whitespace-nowrap overflow-hidden text-ellipsis">
            {location}
          </p>
          <p className="shrink-0 ml-1">({jobType})</p>
        </div>
      </div>

      {/* Date Posted + Applicants */}
      <div className="flex items-center mt-2">
        <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center shrink-0">
          <img
            src={IMAGES.clock}
            alt="Clock Icon"
            className="w-5 h-5 object-contain"
          />
        </div>
        <div className="flex items-center gap-2 overflow-hidden text-text-card text-sm md:text-base">
          <p className="flex-1 truncate">{datePosted}</p>
          <div className="w-[1px] self-stretch bg-text-card" />
          <p className="flex-1 truncate text-primary font-semibold">
            {`${applicants} Applicants`}
          </p>
        </div>
      </div>

      {/* Apply & Save */}
      <footer className="flex items-center gap-4 mt-4">
        <CustomButton title="Apply" />
        <div className="flex items-center justify-center">
          <img
            src={IMAGES.save}
            alt="Save Icon"
            className="w-5 h-5 object-contain"
          />
        </div>
      </footer>
    </div>
  );
};

export default CustomAnchorCard;
