import React from "react";
import IMAGES from "../assets/images";
// import IMAGES from "../assets/images";

interface CustomButtonProps {
  title: string;
  onClick?: () => void;
  isOutline?: boolean;
  rightIcon?: string;
  customStyles?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onClick,
  isOutline,
  rightIcon,
  customStyles,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        `${
          isOutline
            ? "border-2 border-text-secondary min-h-8 px-2 max-w-xs rounded-md text-text-secondary text-md font-medium"
            : `bg-primary text-white px-2 rounded-[.3rem] text-md 
          font-light flex items-center gap-2 w-full justify-center flex-1 text-xs md:text-sm min-h-8`
        } ` + customStyles
      }
    >
      {rightIcon && <img src={rightIcon} className="w-4 h-4 object-contain" />}
      {title}
    </button>
  );
};

export default CustomButton;
