import React, { Component } from 'react'
import { useSideBarStore } from './store/useSideBarStore';
import Canvas from './Components/white-board';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Home = () => {

  return (
    <div>
      Hello
    </div>
  )
}

export default Home