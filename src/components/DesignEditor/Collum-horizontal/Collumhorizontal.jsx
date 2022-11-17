import { useState } from "react";

import styleDesignEditor from "../styleDesignEditor.css";
import img from "../../../imgs/pexels-miguel-á-padriñán-2882636.jpg"

import { RiImageAddFill } from "react-icons/ri"
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai"
import { MdOutlineRestore } from "react-icons/md"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"

function Collumhorizontal() {
    const [size, SetSize] = useState(300)
    const [positionLeft, SetPositionLeft] = useState(10)
    return (
        <>
            <div className="container-horizontal">
                <div className="Coluna-horizontal-View">
                    <div className="horizontal-View-header">
                        <img src={img} alt="exemple-image" className="exmple-img-mini-mini" />
                    </div>


                    <img src={img} alt="exemple-image" className="exmple-img" style={{ width: size, height: size, marginLeft: positionLeft }} />
                </div>


                <div className="Coluna-Horizontal-config">
                    <img src={img} alt="exemple-image" className="exmple-img-mini" />
                    <RiImageAddFill className="styleIcons" style={{ margin: 35 }} />
                    <div className="footer-config">
                        {/* <input type="range"  max={500} value={size} 
                    onChange={(e) => SetSize(e.target.value) + 10}/> */}
                        <p className="size-percentage">Tamanho: {size * 10 / 100}%</p>

                        <button className="buttonsZoom" onClick={() => { SetPositionLeft(positionLeft - 10) }}><BsFillArrowLeftCircleFill /></button>
                        <button className="buttonsZoom" onClick={() => { SetPositionLeft(positionLeft + 10) }}><BsFillArrowRightCircleFill /></button>
                        <button className="buttonsZoom" onClick={() => { SetSize(size + 10) }}> <AiOutlineZoomIn /></button>
                        <button className="buttonsZoom" onClick={() => { SetSize(size - 10) }}> <AiOutlineZoomOut /></button>
                        <button className="buttonsZoom" onClick={() => { SetSize(300), SetPositionLeft(320) }}> <MdOutlineRestore /></button>
                    </div>
                </div>
            </div>





        </>
    );
}
export default Collumhorizontal;
