import React from 'react'
import Sidebar from '../components/Sidebar'
import MainContent from './MainContent'

function Layout() {
  return (
    <div className="flex h-screen">
      <div className="w-56">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto place-items-center justify-items-center">
        <MainContent />
      </div>
    </div>
  )
}

export default Layout
