import { create } from 'zustand';

type DataMutationProps = {
  handleDataUpdate: (() => void) | null; 
  setHandleDataUpdate: (handleDataUpdate: (() => void) | null) => void;
};

export const useDataMutationStore = create<DataMutationProps>((set) => ({
  handleDataUpdate: null,
  setHandleDataUpdate: (handleDataUpdate) => set({ handleDataUpdate }),
}));