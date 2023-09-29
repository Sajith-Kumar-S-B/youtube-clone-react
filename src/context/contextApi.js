const { createContext, useState } = require("react");



export const context = createContext();

export const AppContext = (props) =>{
    const [Loading,setLoading]= useState(false);
    const [SearchResults,setSearchResults]= useState(false);
    const [SetCategories,setSetCategories]= useState(false);
    const [MobileMenu,setMobileMenu]= useState(false);

}