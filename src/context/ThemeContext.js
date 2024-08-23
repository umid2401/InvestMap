import React, { createContext, useEffect, useState, useReducer } from "react";
import {dezThemeSet} from './ThemeDemo';

export const ThemeContext = createContext();

const reducer = (previousState, updatedState) => ({
	  ...previousState,
	  ...updatedState,
});

const initialState = {  
  primaryColor : "color-skin-1", 
  background : {value:"defualt", label:"defualt"}, 
  windowWidth: 0,
  windowHeight: 0,
};

const ThemeContextProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	  const {         
        primaryColor , 
        background,        
    } = state;
	

  const body = document.querySelector("body");
  
  const backgroundOption = [
    { value: "default", label: "default" },
    { value: "data-typography-1", label: "data-typography-1" },
  ];
  
  const changePrimaryColor = (name) => {	
	  dispatch({primaryColor: name });	  
    body.setAttribute("data-primary", name);
  };
  

  const changeBackground = (name) => {
    body.setAttribute("data-theme-version", name.value);    
    dispatch({background: name});
  };
  
  const setDemoTheme = (theme,direction) => {
    var setAttr = {};		    
    var themeSettings = dezThemeSet[theme];	      
    body.setAttribute("data-typography", themeSettings.typography);  
    setAttr.value = themeSettings.version;
    changeBackground(setAttr);       
    changePrimaryColor(themeSettings.primary);         
	
	};

  useEffect(() => {
	  const body = document.querySelector("body");
   
    body.setAttribute("data-theme-version", "default");
   
    body.setAttribute("data-primary", "color-skins-1");
   
		let resizeWindow = () => {			
      // dispatch({windowWidth:window.innerWidth});		
		};
      resizeWindow();
      window.addEventListener("resize", resizeWindow);
      return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        body,
       
        backgroundOption,
        primaryColor,	    	
        changePrimaryColor,  
        changeBackground,
        background,
        setDemoTheme,
	}}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;


