import React from 'react'

const Card = ({children}) => {
  return (
    <>
            <div className="w-full hover:scale-110 ease-in duration-300 gap-3 text-center  flex flex-col  items-center text-xs justify-center p-2 rounded-[10px] shadow-md shadow-cyan-800 border-cyan-800 border ">{children}</div>
    </>
  )
}

export default Card