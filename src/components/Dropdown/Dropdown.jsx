import {AiFillCaretDown} from "react-icons/ai";
import {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const Dropdown = ({name, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const ref1 = useRef(null);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && ref1.current && !ref.current.contains(e.target) && !ref1.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isOpen]);

    return (
        <div className="relative font-montserrat">
            <button ref={ref1} onClick={() => setIsOpen(prevState => !prevState)}
                    className="rounded-full flex items-center gap-1 border border-black p-4">
                <span>{name}</span>
                <motion.span animate={{rotate: isOpen ? 180 : 0}} transition={{ease: "easeInOut", duration: 0.3}}>
                    <AiFillCaretDown/></motion.span>
            </button>
            <AnimatePresence>
                {isOpen && <motion.div
                    ref={ref}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="absolute flex-col gap-2 overflow-scroll drop-shadow-lg p-3 mt-4 w-full flex items-center justify-center">
                    {children}
                </motion.div>}
            </AnimatePresence>

        </div>
    );
};

export default Dropdown;