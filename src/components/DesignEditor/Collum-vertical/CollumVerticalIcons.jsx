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
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
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
    const StyledAvatar = styled(Avatar)`
${({ theme }) => `
cursor: pointer;
background-color: #020659;
transition: ${theme.transitions.create(['background-color', 'transform'], {
        duration: theme.transitions.duration.standard,
    })};
&:hover {
    // background-color: ${theme.palette.secondary.main};
    transform: scale(1.3);
}
`}
`;
    return (
        <>
            <div className="container-vertical" >

                <div className="Coluna-vertical-icons" >
                    <StyledAvatar style={{ marginTop: 38 }} className="styleIcons">
                        <CgTemplate onClick={() => { SetValue(1) }} />
                    </StyledAvatar>
                    <StyledAvatar className="styleIcons">
                        <GoSettings onClick={() => { SetValue(2) }} />
                    </StyledAvatar>
                    <StyledAvatar className="styleIcons">
                        <FaShapes onClick={() => { SetValue(3) }} />
                    </StyledAvatar>
                    <StyledAvatar className="styleIcons">
                        <FaRegImages onClick={() => { SetValue(4) }} />
                    </StyledAvatar>
                    <StyledAvatar className="styleIcons">
                        <HiOutlineCloudUpload onClick={() => { SetValue(5) }} />
                    </StyledAvatar>
                    <StyledAvatar className="styleIcons">
                        <TfiText onClick={() => { SetValue(6) }} />
                    </StyledAvatar>
                    <StyledAvatar className="styleIcons">
                        <RiVideoAddFill onClick={() => { SetValue(7) }} />
                    </StyledAvatar>


                </div>
                {/* Botao de show/hidden */}
                <FormControlLabel style={{ position: "absolute", left: -5, padding: 2, width:60}}
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
