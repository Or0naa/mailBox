import { useState } from 'react'; // ייבוא ה useState מהריאקט
import { FaClock, FaRegCalendarCheck, FaEye, FaUserFriends, FaChartBar, FaVideo, FaBalanceScaleRight } from 'react-icons/fa'; // ייבוא האייקונים
import { NavLink } from 'react-router-dom';

export default function SideBar() {
  const [activeIcon, setActiveIcon] = useState('clock'); // משתנה חדש לשמירת האייקון הפעיל

  const handleView = (icon) => { // שימוש במשתנה הפעיל בפונקציה
    setActiveIcon(icon); // עדכון האייקון הפעיל
  }

  return (
    <div className="flex flex-col h-screen justify-between min-w-24">
      <div className="flex flex-col items-center">
        <div className="mx-auto w-12 h-12 rounded-full"><img src="https://www.interload.co.il/wp-content/uploads/2019/07/%D7%A0%D7%A1%D7%99%D7%9B%D7%94-300x300.png" /></div>

        <NavLink to="/login"
          title='timer'
          className={`my-4 text-3xl p-1 hover:text-teal-500 ${activeIcon === 'clock' && 'text-teal-500 bg-gray-200 rounded-lg'}`}
          onClick={() => handleView('clock')}>
          <FaClock />
        </NavLink>

        <NavLink to="/calendar"
          title='tasks'
          className={`my-4 text-3xl p-1 hover:text-teal-500 ${activeIcon === 'calendar' && 'text-teal-500 bg-gray-200 rounded-lg'}`}
          onClick={() => handleView('calendar')}>
          <FaRegCalendarCheck />
        </NavLink>

        <NavLink to="/"
          title='watch'
          className={`my-4 text-3xl p-1 hover:text-teal-500 ${activeIcon === 'watch' && 'text-teal-500 bg-gray-200 rounded-lg'}`}
          onClick={() => handleView('watch')}>
          <FaEye />
        </NavLink>

        <NavLink to="/emails"
          title='emails'
          className={`my-4 text-3xl p-1 hover:text-teal-500 ${activeIcon === 'emails' && 'text-teal-500 bg-gray-200 rounded-lg'}`}
          onClick={() => handleView('emails')}>
          <FaUserFriends />
        </NavLink>

        <NavLink to="/settings"
          title='stats'
          className={`my-4 text-3xl p-1 hover:text-teal-500 ${activeIcon === 'settings' && 'text-teal-500 bg-gray-200 rounded-lg'}`}
          onClick={() => handleView('settings')}>
          <FaChartBar />
        </NavLink>

        <NavLink to="/"
          title='video'
          className={`my-4 text-3xl p-1 hover:text-teal-500 ${activeIcon === 'drafts' && 'text-teal-500 bg-gray-200 rounded-lg'}`}
          onClick={() => handleView('drafts')}>
          <FaVideo />
        </NavLink>
      </div>

      <div className="mb-4">
        <img src="https://email-system-phi.vercel.app/2.jpg" alt="logo"
          className="mx-auto w-12 h-12 rounded-full" />
      </div>
    </div>
  );
}
