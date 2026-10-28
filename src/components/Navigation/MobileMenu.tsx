
import { useState } from "react";
import Close from "../Icons/Close";
import CaretUp from "../Icons/CaretUp";
import { navigationLinks } from "../../utils/content";
import MobileDropdown from "./MobileDropdown";
import { motion, AnimatePresence } from "motion/react";
import { useMenuContext } from "../../context/MobileMenuContext";

export default function MobileMenu() {
    const {menuOpened} = useMenuContext();

    const [activeLinkId, setActiveLinkId] = useState<number | null>(null);

    const toggleDropdown = (id: number) => {
        setActiveLinkId((currentId) =>
            currentId === id ? null : id
        );
    };

    return (
        <motion.div 
        variants={{
            hidden: {
                opacity: 0,
                display: "none",
            },
            visible: {
                opacity: 1,
                display: "flex",
            }
        }}
        animate={ menuOpened ? "visible" : "hidden"}
        className="fixed inset-0 z-50 flex justify-end bg-white/30 pl-24">
            <motion.nav 
            variants={{
                hidden: {
                    opacity: 0,
                    x: "100%",
                },
                visible: {
                    opacity: 1,
                    x: "0%"
                }
            }}
            animate={menuOpened ? "visible" : "hidden"}
            transition={{duration: 0.35, ease: "easeOut"}}
            className="flex h-full w-full max-w-96 flex-col items-start
                gap-y-12 overflow-y-auto bg-white p-6 pl-7">

                {/* زر الإغلاق */}
                <div className="flex w-full justify-end">
                    <Close />
                </div>

                {/* روابط القائمة */}
                <motion.ul 
                variants={{
                    hidden: {
                        opacity: 0,
                        x: "100%",
                    },
                    visible: {
                        opacity: 1,
                        x: "0%"
                    }
                }}
                animate={menuOpened ? "visible" : "hidden"}
                transition={{ ease: "easeOut", delay: 0.05}}
                className="flex w-full flex-col gap-y-5">
                    {navigationLinks.map((link) => {
                        const isActive = activeLinkId === link.id;
                        return (
                            <li
                                key={link.id}
                                className={`flex flex-col font-medium
                                    transition-all duration-300 ease-in-out
                                    ${isActive ? "gap-y-4" : ""}`}
                            >
                                {/* صف الرابط والسهم */}
                                <div className="flex items-center gap-x-1.75">
                                    {link.dropdown ? (
                                        <button
                                            type="button"
                                            aria-expanded={isActive}
                                            aria-controls={`mobile-dropdown-${link.id}`}
                                            onClick={() =>
                                                toggleDropdown(link.id)
                                            }
                                            className={`flex cursor-pointer
                                                items-center gap-x-1.75
                                                ${
                                                    isActive
                                                        ? "text-grey-1000"
                                                        : "text-grey-600"
                                                }`}
                                        >
                                            <span>{link.text}</span>
                                            <CaretUp
                                                className={`size-3.5
                                                    fill-grey-600
                                                    transition-transform
                                                    duration-200
                                                    ${
                                                        isActive
                                                            ? "rotate-0"
                                                            : "rotate-180"
                                                    }`}
                                            />
                                        </button>
                                    ) : (
                                        <a
                                            href={link.href}
                                            className="text-grey-600"
                                        >
                                            {link.text}
                                        </a>
                                    )}
                                </div>
                                {/* القائمة الفرعية تظهر أسفل الرابط */}
                                <AnimatePresence initial={false}>
                                    {link.dropdown && isActive && (
                                            <MobileDropdown
                                            key={`dropdown-${link.id}`}
                                            links={link.dropdownLinks}
                                            />
                                    )}
                                </AnimatePresence>
                            </li>
                        );
                    })}
                </motion.ul>

                {/* زر الانضمام */}
                        <a
                    href="#join-now"
                    onClick={() => {
                        // toggleMenu(false); // If menu context is available
                    }}
                    className="cursor-pointer rounded-[.625rem]
                        bg-primary-700 px-8 py-3 font-medium text-white
                        transition-all duration-200 hover:bg-primary-800 text-center"
                >
                    Join Now
                </a>
            </motion.nav>
        </motion.div>
    );
}

