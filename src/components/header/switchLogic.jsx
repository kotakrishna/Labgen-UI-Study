import React from 'react'
import SecondSlider from '../SecondSilder';
import SystemDictionary from '../SecondSilder/SystemDictionary';

export default function SwitchLogic({checkValue}) {
    switch (checkValue) {
        case 0:
            return <SecondSlider />
            break;
        case 8:
            return <SystemDictionary />
            break;
    
        default:
            return (
    <div>
            data
        </div>
    )
    break;
}
    
}
