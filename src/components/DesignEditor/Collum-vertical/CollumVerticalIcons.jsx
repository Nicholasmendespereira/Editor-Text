import styleDesignEditor from "../styleDesignEditor.css";

import Templates from '../Collum-vertical/Icons-vertical/Templates'
import Customize from '../Collum-vertical/Icons-vertical/Customize'
import Elements from "./Icons-vertical/Elements";
import Images from "./Icons-vertical/Images";
import Uploads from "./Icons-vertical/Uploads";
import Text from "./Icons-vertical/Text";
import Video from "./Icons-vertical/Video";
import TestCheckBox from '../TransitionMaterialUI/TestCheckBox'

import { CgTemplate } from "react-icons/cg";
import { GoSettings } from "react-icons/go";
import { FaShapes, FaRegImages } from "react-icons/fa";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { TfiText } from "react-icons/Tfi";
import { RiVideoAddFill } from "react-icons/ri";
import { MdDoubleArrow } from "react-icons/md";
import { useEffect, useState } from "react";

import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import { display } from "@mui/system";

function CollumVerticalIcons() {

    const [value, SetValue] = useState(0)
    //Botao de show/ hidden
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    //Final do botão show/hidden
    return (
        <>
            <div className="container-vertical" >

                <div className="Coluna-vertical-icons" >
                    <CgTemplate className="styleIcons" style={{ marginTop: 30 }} onClick={() => { SetValue(1) }} />
                    <GoSettings className="styleIcons" onClick={() => { SetValue(2) }} />
                    <FaShapes className="styleIcons" onClick={() => { SetValue(3) }} />
                    <FaRegImages className="styleIcons" onClick={() => { SetValue(4) }} />
                    <HiOutlineCloudUpload className="styleIcons" onClick={() => { SetValue(5) }} />
                    <TfiText className="styleIcons" onClick={() => { SetValue(6) }} />
                    <RiVideoAddFill className="styleIcons" onClick={() => { SetValue(7) }} />

                </div>
                {/* Botao de show/hidden */}
                <FormControlLabel style={{ position: "fixed", left: 2 }}
                    control={<Switch checked={checked} onChange={handleChange} />} />
                <Box sx={{ display: "flex" }}>
                    <Fade in={checked}>
                        {/* final do botao show/hidden */}
                        <div className="Coluna-Vertical-Images"  >
                            <div className="container-vertical" style={{ margin: 5 }} >
                                {value == 1 ? <Templates /> : value == 2 ? <Customize /> : value == 3 ? <Elements /> : value == 4 ? <Images /> : value == 5 ? <Uploads /> : value == 6 ? <Text /> : value == 7 ? <Video /> : <p>Sem Resultados</p>}
                            </div>
                            Coluna-Vertical-Images
                        </div>
                    </Fade>
                </Box>
            </div>
        </>
    );
}
export default CollumVerticalIcons;
