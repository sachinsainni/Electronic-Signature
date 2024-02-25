// SignatureCanvas.js
import React, { useEffect, useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = () => {
    const sigCanvas = useRef({});
    const [penColor, setPenColor] = useState("#000000")
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const clearSignature = () => {
        sigCanvas.current.clear();
    };

    const saveSignature = () => {
        const signatureImage = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');

        // Create a link element
        const downloadLink = document.createElement('a');
        // Set the href attribute with the data URI
        downloadLink.href = signatureImage;
        // Set the download attribute with a desired file name
        downloadLink.download = 'signature.png';
        // Append the link to the body
        document.body.appendChild(downloadLink);
        // Trigger a click on the link to start the download
        downloadLink.click();
        // Remove the link from the body
        document.body.removeChild(downloadLink);
    };

    console.log()
    const padStyle = {
        width: width - 52,
        height: height - 202,
        
    }

    const outerPadStyle = {
        cursor:'cell' , background:'#FFF8C9' , border:'2px solid black', borderRadius:'5px',
    }

    

    

    return (
        <div className='d-flex flex-column mx-4'   >
            <span className='my-4' style={outerPadStyle} >
                <SignatureCanvas ref={sigCanvas} penColor={penColor} canvasProps={padStyle} backgroundColor={'#FFF8C9'}  throttle={30} velocityFilterWeight={1.2} dotSize={(event)=>{console.log(event)}}  />
            </span>
            <div className='d-flex'>
                <div className='m-auto d-flex align-items-center'>
                    <div className='fs-5 fw-bold'>Pen Color</div>
                    <input type="color" id="favcolor" name="favcolor" className=' m-2' value={penColor} onChange={(event) => { setPenColor(event.target.value) }} />
                </div>
                <div className='m-auto d-flex align-items-center'>
                    <button className='btn btn-dark m-2' onClick={clearSignature}>Clear</button>
                    <button className='btn btn-dark m-2' onClick={saveSignature}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default SignaturePad;
