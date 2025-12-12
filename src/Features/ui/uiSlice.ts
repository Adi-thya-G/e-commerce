import { createSlice } from "@reduxjs/toolkit"

interface uistate{
  IsSideNavbarOpen:boolean;
  IsSortButtonOpen:boolean;
}
const initailState:uistate={
  IsSideNavbarOpen:false,
   IsSortButtonOpen:false,
}

const uislice=createSlice({
  name:"ui",
  initialState:initailState,
  reducers:{
    toggleSideNavbar:(state):void=>{
      state.IsSideNavbarOpen=!state.IsSideNavbarOpen;

    }
    ,
    toggleSortButton:(state):void=>{
        state.IsSortButtonOpen=!state.IsSortButtonOpen
    }
  }
})
export const{toggleSideNavbar, toggleSortButton}=uislice.actions;
export default uislice.reducer