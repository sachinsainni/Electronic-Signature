// src/Paint.js
import React, { useRef, useEffect, useState } from 'react';

const Paint = () => {
    const canvasRef = useRef(null);
    const [drawing, setDrawing] = useState(false);
    const [color, setColor] = useState('#000000');
    const [brushSize, setBrushSize] = useState(5);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.lineCap = 'round';
        context.strokeStyle = color;
        context.lineWidth = brushSize;


        const startDrawing = (e) => {
            setDrawing(true);
            context.beginPath();
            context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        };

        const draw = (e) => {
            if (!drawing) return;

            context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            context.stroke();
        };

        const stopDrawing = () => {
            setDrawing(false);
            context.closePath();
        };

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);

        return () => {
            canvas.removeEventListener('mousedown', startDrawing);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseup', stopDrawing);
        };
    }, [drawing, color, brushSize]);

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleBrushSizeChange = (e) => {
        setBrushSize(parseInt(e.target.value, 10));
    };

    return (
        <div>
            <div>
                <label htmlFor="colorPicker">Color:</label>
                <input
                    type="color"
                    id="colorPicker"
                    value={color}
                    onChange={handleColorChange}
                />
            </div>
            <div>
                <label htmlFor="brushSize">Brush Size:</label>
                <input
                    type="range"
                    id="brushSize"
                    min="1"
                    max="20"
                    value={brushSize}
                    onChange={handleBrushSizeChange}
                />
            </div>
            <canvas
                ref={canvasRef}
                width={window.innerWidth}
                height={window.innerHeight}
                style={{ border: '1px solid black' }}
            />
        </div>
    );
};

export default Paint;
