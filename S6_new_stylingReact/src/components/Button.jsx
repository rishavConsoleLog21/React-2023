import React from 'react'

function Button({children, ...props}) {
  return <button className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-green-400 hover:bg-green-500" {...props}>{children}</button>
}

export default Button