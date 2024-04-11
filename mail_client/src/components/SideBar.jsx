import { useContext, useState } from 'react'; // ייבוא ה useState מהריאקט
import { FaClock, FaRegCalendarCheck, FaEye, FaUserFriends, FaChartBar, FaVideo, FaBalanceScaleRight } from 'react-icons/fa'; // ייבוא האייקונים
import { NavLink } from 'react-router-dom';
import DataContext from '../context/DataContext';

export default function SideBar() {
  const [activeIcon, setActiveIcon] = useState(localStorage.activeIcon ? localStorage.activeIcon : 'clock'); // משתנה חדש לשמירת האייקון הפעיל
  const { user } = useContext(DataContext)
  console.log("from sidebar", user)


  const handleView = (icon) => { // שימוש במשתנה הפעיל בפונקציה
    setActiveIcon(icon); // עדכון האייקון הפעיל
    localStorage.activeIcon = icon
  }

  return (
    <div className="flex flex-col w-24 min-w-24 h-screen items-center justify-between p-2 border-r border-gray-300">
      <div className=" h-12 rounded-full">
        <img src="https://www.interload.co.il/wp-content/uploads/2019/07/%D7%A0%D7%A1%D7%99%D7%9B%D7%94-300x300.png" />
      </div>
      <div className={`flex flex-col items-center justify-between gap-2`}>
        <div className={`w-24 h-10  items-center flex justify-center  ${activeIcon === 'clock' && 'border-r-4 border-primary'}`}>
          <NavLink to="/login"
            title='timer'
            className={`my-4 text-gray-500  p-1 hover:text-primary ${activeIcon === 'clock' && 'text-primary  rounded-lg p-3  bg-gray-100'}`}
            onClick={() => handleView('clock')}>
            <FaClock />
          </NavLink>
        </div>
        <div className={`w-24 h-10  items-center flex justify-center ${activeIcon === 'calendar' && 'border-r-4 border-primary'}`}>
          <NavLink to="/calendar"
            title='tasks'
            className={`my-4 text-gray-500 p-1 hover:text-primary ${activeIcon === 'calendar' && 'text-primary rounded-lg p-3  bg-gray-100'}`}
            onClick={() => handleView('calendar')}>
            <FaRegCalendarCheck />
          </NavLink>
        </div>
        <div className={`w-24 h-10  items-center flex justify-center  ${activeIcon === 'watch' && 'border-r-4 border-primary '}`}>
          <NavLink to="/"
            title='watch'
            className={`my-4 text-gray-500 p-1 hover:text-primary ${activeIcon === 'watch' && 'text-primary rounded-lg p-3  bg-gray-100'}`}
            onClick={() => handleView('watch')}>
            <FaEye />
          </NavLink>
        </div>
        <div className={`w-24 h-10  items-center flex justify-center  ${activeIcon === 'emails' && 'border-r-4 border-primary'}`}>
          <NavLink to="/emails"
            title='emails'
            className={`my-4 text-gray-500 p-1 hover:text-primary ${activeIcon === 'emails' && 'text-primary rounded-lg p-3  bg-gray-100'}`}
            onClick={() => handleView('emails')}>
            <FaUserFriends />
          </NavLink>
        </div>
        <div className={`w-24 h-10  items-center flex justify-center  ${activeIcon === 'settings' && 'border-r-4 border-primary'}`}>
          <NavLink to="/settings"
            title='stats'
            className={`my-4 text-gray-500 p-1 hover:text-primary ${activeIcon === 'settings' && 'text-primary rounded-lg p-3  bg-gray-100'}`}
            onClick={() => handleView('settings')}>
            <FaChartBar />
          </NavLink>
        </div>
        <div className={` w-24 h-10 items-center flex justify-center  ${activeIcon === 'drafts' && 'border-r-4 border-primary'}`}>
          <NavLink to="/"
            title='video'
            className={`my-4 text-gray-500 p-1 hover:text-primary ${activeIcon === 'drafts' && 'text-primary rounded-lg p-3  bg-gray-100'}`}
            onClick={() => handleView('drafts')}>
            <FaVideo />
          </NavLink>
        </div>
      </div>
      <div>
        {user && user.avatar && <img src={user.avatar} alt="logo" className="w-14 h-14 rounded-full my-6" />}
      </div>
    </div>
  )
}
