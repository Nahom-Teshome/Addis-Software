import React from 'react'

export default function Button({children,onClick,className}){
    return(
        <button 
        onClick={onClick}
        className={`${className} w-fit h-fit pl-4 pr-4 pb-2 pt-2 font-normal items-center rounded-md font-poppins hover:cursor-pointer shadow-md  `}>
            {children}
        </button>
    )
}