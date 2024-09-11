'use client'
import React from 'react'
import { useSideBarStore } from '../store/useSideBarStore'
import Canvas from './white-board'
import { Container } from '@mui/material'

const Whiteboard = () => {
    const toggleWhiteBoard = useSideBarStore((state)=> state.openWhiteBoard);
  return (
    <Container >
    {toggleWhiteBoard && <Canvas/>}
    </Container>
  )
}

export default Whiteboard