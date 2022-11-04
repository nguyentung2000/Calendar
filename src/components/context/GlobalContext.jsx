import React from "react";
// import { listInfo } from './../calendar/Calendar';
const GlobalContext = React.createContext({
    listInfo: [],
    setListInfo: () => { }
})
export default GlobalContext;