import {useState} from "react";
import Results from "../../components/Results/Results.jsx";
import axios from "axios";

const ResNet50 = () => {
    const [disease, setDisease] = useState({name: "", details: ""});
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleUpload = (e) => {
        const file = e.target.files[0];
        setFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result)
            }
            reader.readAsDataURL(file);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (file) {
            console.log(file);
            setLoading(true);
            formData.append("img", file);
            formData.append("model_name", "resnet50");
            axios.post('http://localhost:5000/image_response', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                setDisease({name: res.data.name, details: res.data.details});
                setLoading(false);
            }).catch(err => {
                console.log(err);
                setLoading(false);
            });
        }
    }

    return (
        <>
            <Results file={file} disease={disease} preview={preview} handleUpload={handleUpload} loading={loading}
                     handleSubmit={handleSubmit} modelName="ResNet50"/>
        </>
    );
};

export default ResNet50;