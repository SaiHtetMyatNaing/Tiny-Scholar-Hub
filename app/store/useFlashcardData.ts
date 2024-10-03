import { create } from "zustand";


export type DataProps = {
    id: number ,
    name_mm : string,
    character : string,
    character_id: number,
    image_url ?: string,
  };


type DataStore = {
    data : DataProps[] | null;
    setData : (newData : DataProps[])  => void
}

export const useDataStore = create<DataStore>((set) => ({
    data: null, // Initial empty state
    setData: (newData) => set({ data: newData }), // Function to update the state
}));

