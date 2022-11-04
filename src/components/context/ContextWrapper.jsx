import React, { useState } from 'react';
import GlobalContext from './GlobalContext';

const ContextWrapper = (props) => {
    const [listInfo, setListInfo] = useState([])
    return (
        <GlobalContext.Provider
            value={
                { listInfo, setListInfo }
            }
        >
            {props.children}
        </GlobalContext.Provider>
    );
}

export default ContextWrapper;
