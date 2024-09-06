import { configureStore } from "@reduxjs/toolkit";
import toogleSidebar from "./slice/toogleSidebar";

export  const  store = configureStore({
    reducer:{
        sidebar: toogleSidebar
    }
})