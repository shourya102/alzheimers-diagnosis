import "./ModelSelection.css";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

const ModelSelection = () => {
    const navigate = useNavigate();

    return (
        <div className="flex p-10 flex-grow justify-center items-center">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl text-amber-900 text-start font-bold font-montserrat">Select from the given
                        models</h1>
                    <p className="text-amber-800">The models are sorted by thier accuracy of prediction.</p>
                </div>
                <div
                    className="grid rounded-full overflow-clip font-montserrat grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3  items-center drop-shadow-2xl">
                    <motion.button onClick={() => navigate('/resnet50')} whileHover={{rotate: 90, opacity: 0.8}}
                                   transition={{ease: "easeInOut"}}
                                   className="pattern1 flex justify-center items-center w-[15rem] h-[15rem]">
                        <div className="flex flex-col items-center w-fit gap-2">
                            <h1 className="text-amber-900 font-bold bg-amber-200 text-2xl">ResNet50</h1>
                            <h2 className="text-amber-800 w-1/2 text-lg bg-amber-200"> Best of 3, has accuracy of
                                96%</h2>
                        </div>
                    </motion.button>
                    <motion.button onClick={() => navigate('/vgg19')} whileHover={{rotate: 90, opacity: 0.8}}
                                   transition={{ease: "easeInOut"}}
                                   className="pattern2 flex justify-center items-center w-[15rem] h-[15rem]">
                        <div className="flex flex-col items-center w-fit gap-2">
                            <h1 className="text-amber-900 font-bold bg-amber-300 text-2xl">VGG16</h1>
                            <h2 className="text-amber-800 w-1/2 text-lg bg-amber-300"> Slightly lower accuracy at
                                83%</h2>
                        </div>
                    </motion.button>
                    <motion.button onClick={() => navigate('/efficientnetb0')} whileHover={{rotate: 90, opacity: 0.8}}
                                   transition={{ease: "easeInOut"}}
                                   className="pattern3 flex justify-center items-center w-[15rem] h-[15rem]">
                        <div className="flex flex-col items-center w-fit gap-2">
                            <h1 className="text-amber-900 font-bold bg-amber-400 text-2xl">EfficientNet</h1>
                            <h2 className="text-amber-800 w-1/2 text-lg bg-amber-400"> Significantly lower accuracy at
                                74%</h2>
                        </div>
                    </motion.button>
                </div>
            </div>

        </div>
    );
};

export default ModelSelection;