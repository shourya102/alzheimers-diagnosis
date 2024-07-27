import "./Main.css";
import {AnimatePresence, motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useState} from "react";

const Main = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(0);
    const imageMap = {
        0: "resnet50",
        1: "vgg19",
        2: "efficientnet_b0"
    };

    return (
        <div className="p-12">
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="md:w-2/3 lg:w-2/5 flex flex-col gap-3">
                    <h1 className="text-5xl md:text-5xl border-b-2 border-amber-900 text-amber-900 font-montserrat font-bold">Test
                        for 4 different classes of
                        Alzheimer's, it's presence or lack thereof across 4 different Image recognition models.</h1>
                    <div className="flex justify-end w-full">
                        <motion.button onClick={() => navigate('/model-selection')} initial={{scale: 1}}
                                       whileHover={{scale: 1.1}} transition={{ease: "easeInOut"}}
                                       className="shadow-lg text-4xl grad text-amber-900 font-bebas-neue border-black">Get
                            Started
                        </motion.button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <div className="w-full flex text-center flex-col items-center gap-4">
                        <h1 className="text-4xl font-bold text-white font-montserrat">Take a look at some metrics</h1>
                        <div className="w-[70%] flex font-montserrat text-white text-sm flex-col gap-4 drop-shadow-lg">
                            <div className="rounded-lg overflow-hidden relative h-[23rem]">
                                <AnimatePresence initial={false} mode="wait">
                                    <motion.img
                                        key={selected}
                                        src={`src/assets/${imageMap[selected] || "efficientnet_b0"}_metrics.png`}
                                        alt="Model Metrics"
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                        initial={{opacity: 0, scale: 0}}
                                        animate={{opacity: 1, scale: 1}}
                                        exit={{opacity: 0, scale: 0}}
                                        transition={{duration: 0.3, ease: "easeInOut"}}
                                    />
                                </AnimatePresence>
                            </div>
                            <div className="flex gap-2">
                                <motion.button onClick={() => setSelected(0)}
                                               animate={{scale: selected === 0 ? 1.08 : 1}}
                                               className="flex  flex-col gap-1">
                                    <img className="rounded-2xl hover:contrast-75 overflow-clip w-24"
                                         src="src/assets/resnet50_metrics.png" alt="img"/>
                                    <span>ResNet50</span>
                                </motion.button>
                                <motion.button onClick={() => setSelected(1)}
                                               animate={{scale: selected === 1 ? 1.08 : 1}}
                                               className="flex  flex-col gap-1">
                                    <img className="rounded-2xl hover:contrast-75 overflow-clip w-24"
                                         src="src/assets/vgg19_metrics.png" alt="img"/>
                                    <span>Vgg19</span>
                                </motion.button>
                                <motion.button onClick={() => setSelected(2)}
                                               animate={{scale: selected === 2 ? 1.08 : 1}}
                                               className="flex flex-col gap-1">
                                    <img className="rounded-2xl hover:contrast-75 overflow-clip w-24"
                                         src="src/assets/efficientnet_b0_metrics.png" alt="img"/>
                                    <span>EfficientNet_B0</span>
                                </motion.button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;