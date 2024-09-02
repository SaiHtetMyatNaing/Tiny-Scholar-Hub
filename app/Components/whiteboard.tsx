'use client'
import React from 'react'
import { useSideBarStore } from '../store/useSideBarStore'
import Canvas from './white-board'

const Whiteboard = () => {
    const toggleWhiteBoard = useSideBarStore((state)=> state.openWhiteBoard);
  return (
    <>
    {toggleWhiteBoard && <Canvas/>}
    </>
  )
}

export default Whiteboard