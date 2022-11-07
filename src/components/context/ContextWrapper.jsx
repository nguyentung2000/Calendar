import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

const ContextWrapper = (props) => {
    const [login, setLogin] = useState(false)
    const [listInfo, setListInfo] = useState([])
    return (
        <GlobalContext.Provider
            value={
                { login, setLogin, listInfo, setListInfo }
            }
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export default ContextWrapper;
