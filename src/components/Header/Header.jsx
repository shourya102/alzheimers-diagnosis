import {motion} from "framer-motion";
import Dropdown from "../Dropdown/Dropdown.jsx";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full flex z-10 gap-4 justify-between items-center p-4 border-b border-black">
            <div className="flex text-4xl font-pt-serif flex-col">
                <span className=" font-bold text-orange-700">Alzheimer's</span>
                <span className="text-orange-400 -translate-y-2">Prediction<span
                    className="text-orange-700">.</span></span>
            </div>
            <Dropdown name={"Available Models"}>
                <motion.button onClick={() => navigate('/resnet50')} initial={{width: "fit-content"}}
                               whileHover={{width: "100%"}}
                               className="bg-amber-200">ResNet50
                </motion.button>
                <motion.button onClick={() => navigate('/efficientnetb0')} initial={{width: "fit-content"}}
                               whileHover={{width: "100%"}}
                               className="bg-amber-300">EfficientNetB0
                </motion.button>
                <motion.button onClick={() => navigate('/vgg19')} initial={{width: "fit-content"}}
                               whileHover={{width: "100%"}}
                               className="bg-amber-400">Vgg19
                </motion.button>
            </Dropdown>
        </div>
    );
};

export default Header;