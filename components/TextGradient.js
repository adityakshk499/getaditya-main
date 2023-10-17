import React from 'react'

const TextGradient = ({children}) => {
  return (
    <h1
  className="font-extrabold w-fit text-transparent text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-purple-300 to-yellow-600"
>
  {children}
</h1>
  )
}

export default TextGradient