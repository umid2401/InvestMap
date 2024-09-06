import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: true,
  count:0,
};

export const openSidebar = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toogleSidebar: (state) => {
      state.isOpen = !state?.isOpen;
    },
    inc:(state)=>{
      state.count+=1;
    }
  },
});
export const { toogleSidebar, inc } = openSidebar.actions;
export default openSidebar.reducer;