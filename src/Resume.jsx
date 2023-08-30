import React from 'react';
import { saveAs } from 'file-saver';
import pdfFile from './assets/my-resume.pdf';


export default function Resume()
{
   const handleDownload = () => {
    saveAs(pdfFile, 'downloaded-file.pdf');
   };

   return(
    <div>
     <span onClick={handleDownload} style={{cursor:'pointer'}} className='resume'>Click to download My resume</span>
    </div>
   )
}