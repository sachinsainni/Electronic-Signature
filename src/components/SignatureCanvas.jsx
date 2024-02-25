// SignatureCanvas.js
import React, { useEffect, useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = () => {
    const sigCanvas = useRef({});
    const [penColor, setPenColor] = useState("#000000")
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    //     useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const signaturePad = new SignaturePad(canvas, {
    //       backgroundColor: 'rgb(255, 255, 255)',
    //     });
    //     signaturePadRef.current = signaturePad;

    //     const resizeCanvas = () => {
    //       const ratio = Math.max(window.devicePixelRatio || 1, 1);
    //       canvas.width = canvas.offsetWidth * ratio;
    //       canvas.height = canvas.offsetHeight * ratio;
    //       canvas.getContext('2d').scale(ratio, ratio);
    //     };

    //     window.addEventListener('resize', resizeCanvas);
    //     resizeCanvas();

    //     return () => {
    //       window.removeEventListener('resize', resizeCanvas);
    //     };
    //   }, []);

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
        const signatureImage = sigCanvas.current.getTrimmedCanvas().toDataURL('image/svg+xml');

        // Create a link element
        const downloadLink = document.createElement('a');
        // Set the href attribute with the data URI
        downloadLink.href = signatureImage;
        // Set the download attribute with a desired file name
        downloadLink.download = 'signature.svg';
        // Append the link to the body
        document.body.appendChild(downloadLink);
        // Trigger a click on the link to start the download
        downloadLink.click();
        // Remove the link from the body
        document.body.removeChild(downloadLink);
    };

    const handleSavePNG = () => {
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

    const handleSaveJPEG = () => {
        const signatureImage = sigCanvas.current.getTrimmedCanvas().toDataURL('image/jpeg');

        // Create a link element
        const downloadLink = document.createElement('a');
        // Set the href attribute with the data URI
        downloadLink.href = signatureImage;
        // Set the download attribute with a desired file name
        downloadLink.download = 'signature.jpeg';
        // Append the link to the body
        document.body.appendChild(downloadLink);
        // Trigger a click on the link to start the download
        downloadLink.click();
        // Remove the link from the body
        document.body.removeChild(downloadLink);
    };

    const handleSaveSVG = async () => {
        const signatureImage = sigCanvas.current.getTrimmedCanvas().toDataURL('image/svg+xml');

        // Create a link element
        const downloadLink = document.createElement('a');
        // Set the href attribute with the data URI
        downloadLink.href = signatureImage;
        // Set the download attribute with a desired file name
        downloadLink.download = 'signature.svg';
        // Append the link to the body
        document.body.appendChild(downloadLink);
        // Trigger a click on the link to start the download
        downloadLink.click();
        // Remove the link from the body
        document.body.removeChild(downloadLink);
    };

    const handleUndo = () => {
        const data = sigCanvas.current.toData();
        if (data) {
            data.pop(); // remove the last dot or line
            sigCanvas.current.fromData(data);
        }
    };



    console.log()
    const padStyle = {
        width: width - 300,
        height: height - 350,
        className: 'border border-5 border-black rounded-4 '
    }

    const outerPadStyle = {
        // cursor:'cell' , background:'#FFF8C9' , border:'2px solid black', borderRadius:'5px',
    }





    return (
        <div className='d-flex flex-column mx-4' >
            <h1 className='m-4' >Electronic Signature Pad ✏️</h1>
                <SignatureCanvas ref={sigCanvas} penColor={penColor} canvasProps={padStyle} backgroundColor={'#FFFEE6'} throttle={30} velocityFilterWeight={1.2} dotSize={10} />
            <div className='d-flex'>
                <div className='m-auto d-flex align-items-center'>
                    <div className='fs-5 fw-bold'>Pen Color</div>
                    <input type="color" id="favcolor" name="favcolor" className=' m-2' value={penColor} onChange={(event) => { setPenColor(event.target.value) }} />
                </div>
                <div className='m-auto d-flex align-items-center'>
                    <button className='btn btn-dark m-2' onClick={clearSignature}>Clear</button>
                    <button className='btn btn-dark m-2' onClick={handleSaveJPEG}>Save as JPEG</button>
                    <button className='btn btn-dark m-2' onClick={handleSavePNG}>Save as PNG</button>
                    {/* <button className='btn btn-dark m-2' onClick={handleSaveSVG}>Save as SVG</button> */}
                    <button className='btn btn-dark m-2' onClick={handleUndo}>Undo</button>
                </div>
            </div>
        </div>
    );
};

export default SignaturePad;
