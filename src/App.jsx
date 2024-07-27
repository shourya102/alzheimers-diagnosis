import './App.css'
import Header from "./components/Header/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main.jsx";
import ModelSelection from "./pages/ModelSelection/ModelSelection.jsx";
import ResNet50 from "./pages/ResNet50/ResNet50.jsx";
import Vgg19 from "./pages/Vgg19/Vgg19.jsx";
import EfficientNetB0 from "./pages/EfficientNetB0/EfficientNetB0.jsx";

function App() {
    return (
        <>
            <div className="App flex p-4 overflow-scroll flex-col w-screen h-screen">
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/model-selection" element={<ModelSelection/>}/>
                        <Route path="/resnet50" element={<ResNet50/>}/>
                        <Route path="/vgg19" element={<Vgg19/>}/>
                        <Route path="/efficientnetb0" element={<EfficientNetB0/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
