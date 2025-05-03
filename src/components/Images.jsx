import React from 'react'

function Images({shape, img, size, alt, click}) {
    let design = ""
  return (
    <div>
        <div onClick={click}>
            <img src={img} alt={alt} className={`${size} ${shape} ${design}`}/>
        </div>
    </div>
  )
}

export default Images