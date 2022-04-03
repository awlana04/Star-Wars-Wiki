import create from 'zustand';

export const dataStore = create(set => ({
  selectedData: null,
  setSelectedData: selectedData => set(selectedData),
}));
