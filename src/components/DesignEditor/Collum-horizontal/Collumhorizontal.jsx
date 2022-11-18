import { useState } from "react";

import styleDesignEditor from "../styleDesignEditor.css";
import img from "../../../imgs/pexels-miguel-á-padriñán-2882636.jpg"

import Customize from "../Collum-vertical/Icons-vertical/Customize";

import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import { RiImageAddFill } from "react-icons/ri"
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai"
import { MdOutlineRestore } from "react-icons/md"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import { Input } from "@mui/material";

function Collumhorizontal( { color }) {
    const [size, SetSize] = useState(300)
    const [positionLeft, SetPositionLeft] = useState(10)

    const customTheme = createTheme({
        palette: {
            primary: {
                main: deepPurple[500],
            },
        },
    });
    const StyledAvatar = styled(Avatar)`
${({ theme }) => `
cursor: pointer;
background-color: ${theme.palette.primary.main};
transition: ${theme.transitions.create(['background-color', 'transform'], {
        duration: theme.transitions.duration.standard,
    })};
&:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.3);
}
`}
`;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    var porcentSize = 0
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
                    <div className="min-view-imges">
                        <img src={img} alt="exemple-image" className="exmple-img-mini" />
                        <ThemeProvider theme={customTheme}>
                            <StyledAvatar className="styleIcons" style={{ marginLeft: 32, marginTop: 70, backgroundColor: "#0511F2", color: "white"}}>
                                <RiImageAddFill />
                            </StyledAvatar>
                        </ThemeProvider>
                    </div>

                    <div className="footer-config">
                        {/* <input type="range"  max={500} value={size} 
                    onChange={(e) => SetSize(e.target.value) + 10}/> */}
                        {/* //INICIO Sem FUNCIONALIDADE */}
                        <div>
                            <Button aria-describedby={id} variant="contained" onClick={handleClick}  style={{backgroundColor:"#020659"}}>
                                Modificar Tamanho
                            </Button>
                            <Popover style={{ width: 150 }}
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <Typography sx={{ p: 2 }}>
                                    <input type="text" id="inputPopovelValue" onChange={(e) => SetSize(e.target.value)} /><Button onClick={() => { alert("foi!") }}>Modificar</Button>
                                </Typography>
                            </Popover>
                        </div>
                        {/* //Sem FUNCIONALIDADE FIM*/}
                        <Stack spacing={3} direction="row">
                            <Button variant="outlined" className="size-percentage" style={{ width: 180, marginLeft: 15}}>Tamanho: {size * 10 / 100}%</Button>
                        </Stack>


                        <Stack spacing={3} direction="row" className="icons-footer-config">
                            <Button variant="outlined" className="buttonsZoom" style={{backgroundColor: "#020659", color: "white"}} onClick={() => { SetPositionLeft(positionLeft - 10) }}><BsFillArrowLeftCircleFill /></Button>
                            <Button variant="outlined" className="buttonsZoom" style={{backgroundColor: "#020659", color: "white"}} onClick={() => { SetPositionLeft(positionLeft + 10) }}><BsFillArrowRightCircleFill /></Button>
                            <Button variant="outlined" className="buttonsZoom" onClick={() => { SetSize(size + 10) }}> <AiOutlineZoomIn /></Button>
                            <Button variant="outlined" className="buttonsZoom" onClick={() => { SetSize(size - 10) }}> <AiOutlineZoomOut /></Button>
                            <Button variant="contained" className="buttonsZoom" style={{backgroundColor: "#020659", color: "white"}} onClick={() => { SetSize(300), SetPositionLeft(320) }}> <MdOutlineRestore /></Button>
                        </Stack>
                    
                    </div>
                </div>
            </div>





        </>
    );
}
export default Collumhorizontal;
