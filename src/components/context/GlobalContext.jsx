import React from "react";
const GlobalContext = React.createContext({
    login: false,
    setLogin: () => { },
    listInfo: [],
    setListInfo: () => { }
})
export default GlobalContext;