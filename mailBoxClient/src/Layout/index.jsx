import { Outlet, Route, Routes } from 'react-router-dom'
import NewMessage from '../componnents/NewMessage'
import Inbox from '../componnents/Inbox'
import Favourites from '../componnents/Favourites'
import Drafts from '../componnents/Drafts'
import Deleted from '../componnents/Deleted'
import Contacts from '../componnents/Contacts'
import SelectedMail from '../pages/SelectedMail'
import Calendar from '../pages/Calendar'
import Sidebar from '../componnents/SideBar'
import PopUp from '../componnents/PopUp'
import Login from '../pages/Login'
import Register from '../pages/Register'
import TermsOfUse from '../pages/TermsOfUse'
import Settings from '../pages/Settings'
import Menu from '../componnents/Menu'

export default function Layout() {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <PopUp />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/terms' element={<TermsOfUse />} />
        <Route element={<><Sidebar className="w-24 bg-gray-200" /><Outlet/></>}>
          <Route path="/" element={<div >Home</div>} />
          <Route path="/settings" element={<Settings />} />
          <Route path='*' element={<div className="flex-grow">404</div>} />
          <Route path="emails" element={
            <>
              <Menu className="w-64 menmen" />
              <Outlet />
            </>
          }>
            <Route path='inbox' element={
              <>
                <Inbox className="w-64 bg-gray-200" />
                <Outlet />
              </>
            }>
              <Route path=":id" element={<SelectedMail className="flex-grow" />} />
            </Route>

            <Route path='favorites' element={<>
              <Favourites className="w-64 bg-gray-200" /><Outlet /></>} >
              <Route path=":id" element={<SelectedMail />} />
            </Route>
            <Route path='drafts' element={<>
              <Drafts className="w-64 bg-gray-200" /><Outlet /></>} >
              <Route path=":id" element={<SelectedMail />} />
            </Route>
            <Route path='deleted' element={<>
              <Deleted className="w-64 bg-gray-200" /><Outlet /></>} >
              <Route path=":id" element={<SelectedMail />} />
            </Route>

          </Route >
        </Route >
      </Routes >

    </div >
  )
}
