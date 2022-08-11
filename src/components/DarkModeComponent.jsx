import React from 'react';

import Moon from "../assets/svg/moon";
import Sun from "../assets/svg/sun";


function DarkModeComponent(){
    return(<>

        <div className="flex justify-center items-center">
            <Moon fill="white" />
            <Sun fill="white" />
        </div>

    
    </>)
}

export default DarkModeComponent;