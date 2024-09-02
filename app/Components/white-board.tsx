'use client'
import {
    ReactSketchCanvas,
    type ReactSketchCanvasRef,
  } from "react-sketch-canvas";
  import { useRef, useState } from "react";
  import { Button } from "@mui/material";
  import { useSideBarStore } from "../store/useSideBarStore";
  
  export default function Canvas() {
    const canvasRef = useRef<ReactSketchCanvasRef>(null);
    const [eraseMode, setEraseMode] = useState(false);
    const closeWhiteBoard = useSideBarStore((state) => state.toggleWhiteBoard);
  
    const handleEraserClick = () => {
      setEraseMode(true);
      canvasRef.current?.eraseMode(true);
    };
  
    const handlePenClick = () => {
      setEraseMode(false);
      canvasRef.current?.eraseMode(false);
    };
  
    const handleUndoClick = () => {
      canvasRef.current?.undo();
    };
  
    const handleRedoClick = () => {
      canvasRef.current?.redo();
    };
  
    const handleClearClick = () => {
      canvasRef.current?.clearCanvas();
    };
  
    const handleResetClick = () => {
      canvasRef.current?.resetCanvas();
    };
  
    return (
      <div className="absolute top-20 md:left-56 bg-white max-w-full w-[30em] md:w-[56em] z-[1000] h-[40em]">
        <div className="flex flex-wrap">
          <Button type="button" disabled={!eraseMode} onClick={handlePenClick}>
            Draw
          </Button>
          <Button
            type="button"
            className="btn btn-sm btn-outline-primary"
            disabled={eraseMode}
            onClick={handleEraserClick}
          >
            Earse
          </Button>
          <div className="vr" />
          <Button
            type="button"
            className="btn btn-sm btn-outline-primary"
            onClick={handleUndoClick}
          >
            Undo
          </Button>
          <Button
            type="button"
            className="btn btn-sm btn-outline-primary"
            onClick={handleRedoClick}
          >
            Redo
          </Button>
          <Button
            type="button"
            className="btn btn-sm btn-outline-primary"
            onClick={handleClearClick}
          >
            Clear
          </Button>
          <Button
            type="button"
            className="btn btn-sm btn-outline-primary"
            onClick={handleResetClick}
          >
            Reset
          </Button>
          <Button
            type="button"
            className="btn btn-sm btn-outline-primary"
            onClick={closeWhiteBoard}
          >
            Close
          </Button>
        </div>
  
        <ReactSketchCanvas ref={canvasRef} />
      </div>
    );
  }
  