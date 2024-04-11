import React from 'react'
import Header from '../functions/Header'
import Search from '../components/Search'

export default function Emails() {
  return (
    <div className="flex flex-col h-screen">
      <Header>
        <Search />
      </Header>

    </div>
  )
}
