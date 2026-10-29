import {motion} from "motion/react"
import { NavigationLink } from "../../utils/contentTypes";
import { useMenuContext } from "../../context/MobileMenuContext";

interface MobileDropdownProps {
    links: NavigationLink[] | undefined;
}

export default function MobileDropdown({
    links,
}: MobileDropdownProps) {
    const { setMenuOpened } = useMenuContext();
    const closeMenu = () => setMenuOpened(false);

    return (
        <motion.ul 
        initial={{ opacity: 0, height: 0}}
        animate={{ opacity: 1,height: "auto"}}
        exit={{ height: 0, opacity: 0}}
        transition={{ duration: 0.35, ease: "easeInOut"}}
        className="flex flex-col gap-y-4 overflow-hidden pl-2">
            {links?.map((link) => (
                <li
                    key={link.id}
                    className="text-grey-600"
                >
                    <a
                        href={link.href}
                        onClick={closeMenu}
                        className="block"
                    >
                        {link.text}
                    </a>
                </li>
            ))}
        </motion.ul>
    );
}
