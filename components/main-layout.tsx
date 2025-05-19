import React from 'react'
import Sidebar from './sidebar'
import Topbar from './topbar'

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex h-screen '>
        <Sidebar></Sidebar>
        <div>
            <Topbar></Topbar>
             {children}
        </div>

    </main>
  )
}

export default MainLayout
