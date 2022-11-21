import StyleIconsVertical from './StyleIconsVertical.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import { HiOutlineCloudUpload } from "react-icons/hi";

function Uploads() {
    return (
        <>
            <div className='container-upload' >
                <h1>Upload</h1>
                <br /><br /><br />
                <div className='LabelandInput'>
                    <label htmlFor="upload" className='label-file'>Enviar Arquivo</label>
                    <input type="file" name="upload" id="upload" />
                </div>
            </div>
        </>
    )
};
export default Uploads;