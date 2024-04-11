import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Terms from './pages/Terms'
import Settings from './pages/Settings'
import Menu from './components/Menu'
import Inbox from './pages/Inbox'
import Drafts from './pages/Drafts'
import Sent from './pages/Sent'
import Deleted from './pages/Deleted'
import Spam from './pages/Spam'
import Favorites from './pages/Favorites'
import SideBar from './components/SideBar'
import EmailPage from './pages/EmailPage'
import PopUp from './components/PopUp'
import { ManageContext } from './context/ManageContext'
import Contact from './pages/Contact'
import Calendar from './pages/Calendar'
import SendMessage from './pages/SendMessage'


export default function Layout() {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <ManageContext>
        <PopUp />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/terms' element={<Terms />} />
          <Route element={<><SideBar /><Outlet /></>}>
            <Route path="/" element={<div className="flex-grow">Home</div>} />
            <Route path="/settings" element={<div className="flex-grow"><Settings /></div>} />
            <Route path='/calendar' element={<div className="flex-grow"><Calendar /></div>} />
            <Route path='*' element={<div className="flex-grow">404</div>} />
            <Route path="emails" element={<> <Menu /><Outlet className="flex-grow" /> </>}>
              <Route path='new-message' element={<SendMessage className="flex-grow" />} />

              <Route path='contact' element={<>
                <Contact className="w-64 bg-gray-200" /><Outlet /></>}>
                <Route path=":id" element={<EmailPage className="flex-grow" />} />
              </Route>

              <Route path='inbox' element={<><Inbox className="w-64 bg-gray-200" /><Outlet /> </>}>
                <Route path=":id" element={<EmailPage className="flex-grow" />} />
              </Route>

              <Route path='favorites' element={<>
                <Favorites className="w-64 bg-gray-200" /><Outlet /></>} >
                <Route path=":id" element={<EmailPage />} />
              </Route>
              <Route path='drafts' element={<>
                <Drafts className="w-64 bg-gray-200" /><Outlet /></>} >
                <Route path=":id" element={<EmailPage />} />
              </Route>

              <Route path='sent' element={<>
                <Sent className="w-64 bg-gray-200" /><Outlet /></>} >
                <Route path=":id" element={<EmailPage />} />
              </Route>

              <Route path='deleted' element={<>
                <Deleted className="w-64 bg-gray-200" /><Outlet /></>} >
                <Route path=":id" element={<EmailPage />} />
              </Route>
              <Route path='spam' element={<>
                <Spam className="w-64 bg-gray-200" /><Outlet /></>} >
                <Route path=":id" element={<EmailPage />} />
              </Route >
            </Route >
          </Route >
        </Routes >
      </ManageContext>
    </div >
  )
}
