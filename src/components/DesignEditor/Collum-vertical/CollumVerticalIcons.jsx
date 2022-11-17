import styleDesignEditor from "../styleDesignEditor.css";

import Templates from '../Collum-vertical/Icons-vertical/Templates'
import Customize from '../Collum-vertical/Icons-vertical/Customize'
import Elements from "./Icons-vertical/Elements";
import Images from "./Icons-vertical/Images";
import Uploads from "./Icons-vertical/Uploads";
import Text from "./Icons-vertical/Text";
import Video from "./Icons-vertical/Video";

import { CgTemplate } from "react-icons/cg";
import { GoSettings } from "react-icons/go";
import { FaShapes, FaRegImages } from "react-icons/fa";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { TfiText } from "react-icons/Tfi";
import { RiVideoAddFill } from "react-icons/ri";
import { MdDoubleArrow } from "react-icons/md";
import { useEffect, useState } from "react";

function CollumVerticalIcons() {

const [value, SetValue] = useState(0)







    return (
        <>
            <div className="container-vertical">

                <div className="Coluna-vertical-icons">
                    <h2>{value}</h2>
                    <CgTemplate className="styleIcons" onClick={()=>{SetValue(1)}}/>
                    <GoSettings className="styleIcons" onClick={()=>{SetValue(2)}}/>
                    <FaShapes className="styleIcons" onClick={()=>{SetValue(3)}}/>
                    <FaRegImages className="styleIcons" onClick={()=>{SetValue(4)}}/>
                    <HiOutlineCloudUpload className="styleIcons"onClick={()=>{SetValue(5)}} />
                    <TfiText className="styleIcons" onClick={()=>{SetValue(6)}}/>
                    <RiVideoAddFill className="styleIcons"onClick={()=>{SetValue(7)}} />

                </div>
                <div className="Coluna-Vertical-Images"  >
                    <div className="container-vertical" style={{ margin: 15 }}>
                    {value == 1? <Templates/>:value == 2? <Customize />:value == 3? <Elements/>:value == 4? <Images/>:value == 5? <Uploads/>:value == 6? <Text/>:value == 7? <Video/>: <p>Sem Resultados</p>}

                        <button style={{ backgroundColor: "rgba(163, 135, 135, 0)", border: "none", height: 27, marginRight: 23, fontSize: 30 }}><MdDoubleArrow /></button>
                    </div>
                    Coluna-Vertical-Images
                </div>
            </div>
        </>
    );
}
export default CollumVerticalIcons;
