import StyleIconsVertical from './StyleIconsVertical.css'
import { useState } from 'react'
import Collumhorizontal from '../../Collum-horizontal/Collumhorizontal'

function Customize() {
const [color, SetColor] = useState("#e66465")
    return(
        
    <>
        <div>
            <br /><br />
            <div className="container-inputcolors">
                <h1 style={{marginTop: -35}}>Customize</h1>
                <div>
                    <input type="color" name="input-color" id="input-color" value={color} onChange={(e) => SetColor(e.target.value)} />
                    <h3 style={{ color: color, textAlign: "initial", fontSize: 16, marginLeft: 5 }}>{color}</h3>
                </div>
                <div className='divsColors' style={{ backgroundColor: "#ffffff" }} onClick={() => { SetColor("#ffffff") }}></div>
                <div className='divsColors' style={{ backgroundColor: "#9B9B9B" }} onClick={() => { SetColor("#9B9B9B") }}></div>
                <div className='divsColors' style={{ backgroundColor: "#4A4A4A" }} onClick={() => { SetColor("#4A4A4A") }}></div>
                <div className='divsColors' style={{ backgroundColor: "#000000" }} onClick={() => { SetColor("#000000") }}></div>
                <div className='divsColors' style={{ backgroundColor: "#A70C2C" }} onClick={() => { SetColor("#A70C2C") }}></div>
                <div className='divsColors' style={{ backgroundColor: "#DA9A15" }} onClick={() => { SetColor("#DA9A15") }}></div>
                <div className='divsColors' style={{ backgroundColor: "#F8E71D" }} onClick={() => { SetColor("#F8E71D") }}></div>
                <div className='divsColors' style={{ backgroundColor: "#47821A" }} onClick={() => { SetColor("#47821A") }}></div>
                <div className='divsColors' style={{ backgroundColor: "#4990E2" }} onClick={() => { SetColor("#4990E2") }}></div>
                <div className='divsColors' style={{ backgroundColor: "#05C7F2" }} onClick={() => { SetColor("#05C7F2") }}></div>
                <div className='divsColors' style={{ backgroundColor: "#D92B8B" }} onClick={() => { SetColor("#D92B8B") }}></div>
                <div className='divsColors' style={{ backgroundColor: "#B7BFAA" }} onClick={() => { SetColor("#B7BFAA") }}></div>

            <Collumhorizontal color={color}/>
            </div>
        </div>
    </>
)
};
export default Customize;