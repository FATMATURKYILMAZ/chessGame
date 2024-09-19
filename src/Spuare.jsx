import React from 'react'

const Square = ({children,colorValue}) => {
  console.log(colorValue,"colorValue")
  return (
    <div className={`${colorValue ? 'bg-green-800' : 'bg-green-200'} w-[80px] h-[80px] flex items-center justify-center`}>
    {children}
  </div>
  
  )
}

export default Square
