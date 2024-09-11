"use client";
import {
  ReactSketchCanvas,
  type ReactSketchCanvasRef,
} from "react-sketch-canvas";
import { useRef, useState } from "react";
import { Box, Button } from "@mui/material";
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
    <Box
      sx={{
        position: "absolute",
        top: 90,
        left: 0, 
        right: 0,
        margin: "auto",// Adjust left position for medium screens and up
        backgroundColor: "white",
        maxWidth: "100%",
        width: {
          xs: "30em", // ~30em width on mobile
          md: "56em", // ~56em width on medium screens and up
        },
        zIndex: 1000,
        height: "40em",
        alignItems : 'center',
        padding : 1,
        border : 1,
        overflow : 'hidden',
        borderRadius : 3,
      }}
    >
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

      <ReactSketchCanvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%", // Adjust height to account for buttons
        }}
      />
    </Box>
  );
}
