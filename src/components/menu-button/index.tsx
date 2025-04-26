import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IMAGES from "../../assets/images";
import { MenuButtonProps, MenuItemProps } from "../../types/dataTypes";

const MenuButton: React.FC<MenuButtonProps> = ({
  title,
  list,
  selected,
  setSelected,
  style,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (item: MenuItemProps) => {
    setSelected?.(item.title);
    setIsOpen(false);
  };

  return (
    <div
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      className="relative inline-block text-left w-full max-w-xs focus:outline-none"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full border-l-2 h-8 px-2 md:px-4 flex items-center justify-between gap-2 ${style}`}
      >
        <p className="text-text-secondary text-base whitespace-nowrap truncate overflow-hidden">
          {selected || title}
        </p>
        <img
          src={IMAGES.arrowdown}
          className={`w-4 h-4 object-contain transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, scaleY: 0.9, y: -5 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0.9, y: -5 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md z-10 overflow-hidden origin-top"
          >
            <li className="flex md:hidden px-4 py-2 text-sm text-text-secondary font-semibold">
              {title}
            </li>
            {list.map((value: MenuItemProps) => (
              <li
                key={value.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-text-secondary"
                onClick={() => handleSelect(value)}
              >
                {value.title}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuButton;
