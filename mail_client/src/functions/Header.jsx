import React from 'react'

export default function Header({ children }) {
  return (
    <div className="flex flex-row h-24 px-4 py-10 mx-2 border-b-2 border-primary-200">
      {children}
    </div>
  )
}
