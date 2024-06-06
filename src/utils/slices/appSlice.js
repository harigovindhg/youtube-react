import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isSideBarOpen: true
    },
    reducers: {
        toggleSideBar: (store) => {
            store.isSideBarOpen = !store.isSideBarOpen
        },
        closeSideBar: (store) => {
            store.isSideBarOpen = false
        }
    }
});

export const { toggleSideBar, closeSideBar } = appSlice.actions;

export default appSlice.reducer;