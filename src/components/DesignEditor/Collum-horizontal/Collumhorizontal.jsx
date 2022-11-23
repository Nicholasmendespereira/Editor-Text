import { useState } from "react";

import styleDesignEditor from "../styleDesignEditor.css";
import img from "../../../imgs/pexels-miguel-á-padriñán-2882636.jpg"



import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { RiImageAddFill } from "react-icons/ri"
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai"
import { MdOutlineRestore } from "react-icons/md"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import { IoIosColorPalette } from "react-icons/io";
import { AiOutlineArrowDown } from "react-icons/ai";


function Collumhorizontal() {
    const [size, SetSize] = useState(300)
    const [positionLeft, SetPositionLeft] = useState(10)
    const [color, SetColor] = useState("");
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
                        {/* imagem pequena com background-color */}
                        <div className="exmple-img-mini-mini" style={{ marginTop: 20, backgroundColor: color }}>.</div>
                    </div>
                    <div className="exmple-img" style={{ width: size, height: size, marginLeft: positionLeft, backgroundColor: color }}>.</div>
                </div>


                <div className="Coluna-Horizontal-config">
                    <div className="min-view-imges">
                        {/* imagem média com backgroun-color */}
                        <div style={{ height: 100, width: 100, backgroundColor: color, margin: 18 }}>.</div>


                        <ThemeProvider theme={customTheme}>
                            <StyledAvatar className="styleIcons" style={{ marginLeft: 32, marginTop: 50, backgroundColor: "#0511F2", color: "white" }}>
                                <label htmlFor="upload"><RiImageAddFill /></label>
                                <input type="file" name="upload" id="upload" />


                            </StyledAvatar>
                        </ThemeProvider>
                    </div>
                    <div>
                        {/* Efeito de abrir e fechar "Accordion", Costumize Color */}
                        <Accordion style={{ width: 420, margin: "auto" }}>
                            <AccordionSummary
                                expandIcon={<AiOutlineArrowDown style={{ width: 40, marginRight: 160, height: 25 }} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            ><Typography style={{ width: 25, marginLeft: 160, height: 30 }}><IoIosColorPalette style={{ fontSize: 30 }} /></Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <div className="container-colors">
                                    <div style={{width: 55}}>
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

                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div className="footer-config">
                        {/* <input type="range"  max={500} value={size} 
                    onChange={(e) => SetSize(e.target.value) + 10}/> */}
                        {/* //INICIO Sem FUNCIONALIDADE */}
                        <div>
                            <Button aria-describedby={id} variant="contained" onClick={handleClick} style={{ backgroundColor: "#020659" }}>
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
                            <Button variant="outlined" className="size-percentage" style={{ width: 180, marginLeft: 15 }}>Tamanho: {size * 10 / 100}%</Button>
                        </Stack>


                        <Stack spacing={3} direction="row" className="icons-footer-config">
                            <Button variant="outlined" className="buttonsZoom" style={{ backgroundColor: "#020659", color: "white" }} onClick={() => { SetPositionLeft(positionLeft - 10) }}><BsFillArrowLeftCircleFill /></Button>
                            <Button variant="outlined" className="buttonsZoom" style={{ backgroundColor: "#020659", color: "white" }} onClick={() => { SetPositionLeft(positionLeft + 10) }}><BsFillArrowRightCircleFill /></Button>
                            <Button variant="outlined" className="buttonsZoom" onClick={() => { SetSize(size + 10) }}> <AiOutlineZoomIn /></Button>
                            <Button variant="outlined" className="buttonsZoom" onClick={() => { SetSize(size - 10) }}> <AiOutlineZoomOut /></Button>
                            <Button variant="contained" className="buttonsZoom" style={{ backgroundColor: "#020659", color: "white" }} onClick={() => { SetSize(300), SetPositionLeft(320) }}> <MdOutlineRestore /></Button>
                        </Stack>

                    </div>
                </div>
            </div>





        </>
    );
}
export default Collumhorizontal;
