import {TbRibbonHealth} from "react-icons/tb";
import {motion} from "framer-motion";
import {BiRightArrowCircle, BiUpload} from "react-icons/bi";
import "./Results.css";
import {CgSpinner} from "react-icons/cg";
import {useEffect, useState} from "react";
import axios from "axios";

const Results = ({file, disease, modelName, handleUpload, preview, handleSubmit, loading}) => {
    const [images, setImages] = useState([]);
    const [loadingP, setLoadingP] = useState(false);

    useEffect(() => {
        if (file) {
            console.log(file);
            setLoadingP(true);
            const formData = new FormData();
            formData.append("img", file);
            axios.post('http://localhost:5000/preprocessed_response', formData)
                .then(res => {
                    const prefixed = res.data.results.map(i => {
                        return 'data:image/png;base64,' + i;
                    });
                    setImages(prefixed);
                    setLoadingP(false);
                }).catch(err => {
                console.log(err);
                setLoadingP(false);
            });
        }
    }, [file]);

    return (
        <div className="flex items-center p-10 flex-grow justify-between">
            <div className="w-[40rem] font-montserrat gap-4 h-[30rem] flex flex-col">
                <h1 className="flex gap-2 border-amber-900 border-b text-amber-900 items-center "><TbRibbonHealth
                    size={80}/>
                    <div>
                        <span className="text-amber-900 font-bold text-5xl">You are using {modelName}</span>
                        <h2 className="text-amber-800">Drag and drop or upload an image.</h2>
                    </div>
                </h1>
                <div className="flex flex-col text-amber-900 md:flex-row w-full items-center gap-4 h-full">
                    <label
                        htmlFor="upload"
                        className="overflow-clip hover:cursor-pointer border-2 border-dashed border-amber-900 h-full shadow-md rounded-2xl w-1/2 bg-amber-200 bg-opacity-10 flex">
                        <div className="grad1 min-w-10 font-bold flex justify-center items-center text-amber-900">
                            <span className="writing-mode-vertical ">UPLOAD</span>
                        </div>
                        <motion.div
                            initial={{y: 0}}
                            animate={{y: [7, 0, 7]}}
                            transition={{ease: 'easeInOut', repeat: Infinity, duration: 2}}
                            className="flex flex-grow justify-center items-center">
                            {preview && <img className="w-2/3 rounded-2xl" src={preview} alt="preview"/>}
                            {!preview && <BiUpload size={40}/>}
                        </motion.div>
                    </label>
                    <input id="upload" onChange={handleUpload} type="file" className="hidden"/>
                    {loading && <span className="animate-spin"><CgSpinner size={50}/></span>}
                    {!loading &&
                        <button onClick={handleSubmit} className="hover:text-amber-700"><BiRightArrowCircle size={50}/>
                        </button>}
                    <div
                        className="overflow-clip border-2 border-dashed border-amber-900 h-full shadow-md rounded-2xl w-1/2 bg-amber-300 bg-opacity-10 flex">
                        <div className="grad1 min-w-10 font-bold flex justify-center items-center text-amber-900">
                            <span className="writing-mode-vertical ">RESULTS</span>
                        </div>
                        <div className="flex p-4 w-full justify-center items-center">
                            {disease.name && <div className="flex flex-col items-center">
                                <h2 className="font-bold text-2xl">Your Result is: <span
                                    className="bg-amber-200">{disease.name}</span></h2>
                                <p>{disease.details}</p>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            {!images.length && <div
                className="flex w-1/2 bg-white bg-opacity-10 min-h-[30rem] font-montserrat justify-center items-center">
                {!loadingP && <p className="text-2xl font-bold bg-amber-200 text-amber-900">Please submit an image.</p>}
                {loadingP && <span className="text-amber-900 animate-spin"><CgSpinner size={40}/></span>}
            </div>}
            {images.length > 0 && <div
                className="font-montserrat p-4 flex-wrap flex justify-between bg-white bg-opacity-10 w-1/2 min-h-[30rem]">
                <div className="flex flex-col items-center gap-1">
                    <img id="original" className="w-52 h-52 rounded-2xl shadow-lg" src={images[0]} alt="original"/>
                    <label htmlFor="original">Original</label>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <img id="resized-normalzied" className="w-52 h-52 rounded-2xl shadow-lg" src={images[1]}
                         alt="resized-normalized"/>
                    <label htmlFor="resized-normalzied">Resized & Normalized</label>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <img id="contrast-adjusted" className="w-52 h-52 rounded-2xl shadow-lg" src={images[2]}
                         alt="contrast-adjusted"/>
                    <label htmlFor="contrast-adjusted">Contrast Adjustment</label>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <img id="preprocessed" className="w-52 h-52 rounded-2xl shadow-lg" src={images[3]}
                         alt="preprocessed"/>
                    <label htmlFor="preprocessed">Preprocessed</label>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <img id="segmented" className="w-52 h-52 rounded-2xl shadow-lg" src={images[4]} alt="segmented"/>
                    <label htmlFor="segmented">Segmentation</label>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <img id="channel-adjusted" className="w-52 h-52 rounded-2xl shadow-lg" src={images[5]}
                         alt="channel-adjusted"/>
                    <label htmlFor="channel-adjusted">Channel Adjustment</label>
                </div>
            </div>}
        </div>
    );
};

export default Results;