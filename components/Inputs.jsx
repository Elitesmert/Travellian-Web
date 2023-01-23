import React, { useEffect, useState } from 'react'
import { useRef } from 'react'


const Input = ({ header, label, type = "text", ...props }) => {
    const inputRef = useRef()
    const [inputType, setType] = useState(type)


    return (
        <>
            <div>

                <p htmlFor="" id='header'>{header}</p>
                <label className=" relative flex rounded h-[38px] w-56">

                    <input ref={inputRef} required={true} type={inputType} className=" bg-transparent w-full outline-none px-2 text-black peer valid:pt-3" {...props} />
                    <small className="absolute text-[#767E86] left-2 top-1/2 -translate-y-1/2 text-base cursor-text pointer-events-none peer-valid:text-xs peer-valid:top-2 transition-all">{label}</small>
                </label>
            </div>
        </>
    )
}

export default Input