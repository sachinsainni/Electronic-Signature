import React, { useRef, useState, useEffect } from 'react';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import './Paint.css';

const Paint = () => {
    const canvasRef = useRef(null);
    const [context, setContext] = useState(null);
    const [drawing, setDrawing] = useState(false);
    const [tool, setTool] = useState('pen');
    const [color, setColor] = useState('#000');
    const [brushSize, setBrushSize] = useState(5);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        setContext(ctx);
    }, []);

    const startDrawing = (e) => {
        setDrawing(true);
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    };

    const draw = (e) => {
        if (!drawing) return;

        context.lineCap = 'round';
        context.lineWidth = brushSize;
        context.strokeStyle = color;

        context.lineTo(e.clientX, e.clientY);
        context.stroke();
    };

    const stopDrawing = () => {
        setDrawing(false);
        context.closePath();
    };

    const clearCanvas = () => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    };

    return (
        <div>
            <ButtonGroup className="tool-buttons">
                <Button onClick={() => setTool('pen')}>Pen</Button>
                <Button onClick={() => setTool('eraser')}>Eraser</Button>
                <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle id="dropdown-custom-1">Brush Size</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setBrushSize(5)}>Small</Dropdown.Item>
                        <Dropdown.Item onClick={() => setBrushSize(10)}>Medium</Dropdown.Item>
                        <Dropdown.Item onClick={() => setBrushSize(15)}>Large</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <Button onClick={clearCanvas}>Clear</Button>
            </ButtonGroup>

            <canvas
                ref={canvasRef}
                className={`paint-canvas ${tool === 'eraser' && 'eraser'}`}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseOut={stopDrawing}
            />
        </div>
    );
};

export default Paint;
