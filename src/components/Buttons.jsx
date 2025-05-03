import React from 'react'

function Buttons({btnColor, click, btnSize, btnLabel}) {
    let bgColor = ""
    let size = ""
    switch(btnColor){
        case "success":
            bgColor = "bg-green-600 text-white rounded-sm cursor-pointer hover:bg-green-400"
        break
        case "warning":
            bgColor = "bg-red-600 text-white rounded-sm cursor-pointer hover:bg-red-400"
        break
        case "normal":
            bgColor = "bg-blue-600 text-white rounded-sm cursor-pointer hover:bg-blue-400"
        break
    }

    switch(btnSize){
        case "small":
            size = "py-1 px-1 text-sm"
        break
    }
  return (
    <div>
        <button className={`${bgColor} ${size}`} onClick={click}>
            {btnLabel}
        </button>
    </div>
  )
}

export default Buttons