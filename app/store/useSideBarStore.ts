import { create } from 'zustand'

type sideBarProps = {
    openWhiteBoard : boolean;
    toggleWhiteBoard : () => void ,
}

export const useSideBarStore = create<sideBarProps> (
    (set) => ({ 
     openWhiteBoard : false ,
    toggleWhiteBoard : () => set((state)=> ( { openWhiteBoard : !state.openWhiteBoard } ))
    })
)

