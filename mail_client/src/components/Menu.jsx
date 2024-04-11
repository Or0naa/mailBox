import { NavLink, useNavigate } from "react-router-dom"
import Header from "../functions/Header"
import { FaAngleLeft, FaTrash, FaChevronDown, FaEdit, FaEnvelope, FaHouseUser, FaInbox, FaSeedling, FaStar, FaTrashAlt, FaBan, FaPaperPlane, FaExclamationTriangle, FaFileContract } from "react-icons/fa"
import { useState } from "react"
import Labels from "./Labels"

export default function Menu() {

    const [showMore, setShowMore] = useState(false)
    const nav = useNavigate()
    const [activeIcon, setActiveIcon] = useState(localStorage.activeIcon ? localStorage.activeIcon : 'clock'); // משתנה חדש לשמירת האייקון הפעיל

    const handleView = (icon) => { // שימוש במשתנה הפעיל בפונקציה
        setActiveIcon(icon); // עדכון האייקון הפעיל
        localStorage.activeIcon = icon
    }

    return (
        <div className="flex flex-col h-screen  w-64 max-w-44 min-w-44 ">
            <Header>
                <div className="flex flex-row font-bold text-2xl items-center justify-between">
                    <FaAngleLeft className="bg-gray-100 text-gray-500 rounded-md" />
                    <p >Mail-Box</p>
                </div>
            </Header>

            <div className="p-2">
                <button
                    onClick={() => { nav('/emails/new-message') }}
                    className="bg-primary gap-2 hover:bg-primary-300 text-white flex flex-row items-center justify-between font-bold rounded-md py-2 px-4">
                    <FaEnvelope />   new message</button>
            </div>

            <div className="flex flex-col h-full p-4">
                <NavLink to="/emails/inbox"
                    onClick={() => handleView('inbox')}
                    className={`flex flex-row items-center p-2 rounded-md hover:text-primary ${activeIcon === 'inbox' && 'text-primary rounded-lg'}`}
                >  <FaInbox className={`w-6 h-6 mr-2 text-gray-500 hover:text-primary ${activeIcon === 'inbox' && 'text-primary rounded-lg'}`} /> inbox
                </NavLink>
                <NavLink to="/emails/sent" onClick={() => handleView('sent')}
                    className={`flex flex-row items-center p-2 rounded-md hover:text-primary ${activeIcon === 'sent' && 'text-primary rounded-lg'}`}>
                    <FaPaperPlane className={`w-6 h-6 mr-2 text-gray-500 hover:text-primary ${activeIcon === 'sent' && 'text-primary rounded-lg'}`} /> sent-emails
                </NavLink>
                <NavLink to="/emails/favorites" onClick={() => handleView('favorites')}
                    className={`flex flex-row items-center p-2 rounded-md hover:text-primary ${activeIcon === 'favorites' && 'text-primary rounded-lg'}`}>
                    <FaStar className={`w-6 h-6 mr-2 text-gray-500 hover:text-primary ${activeIcon === 'favorites' && 'text-primary rounded-lg'}`} /> favorites
                </NavLink>
                <NavLink to="/emails/drafts" onClick={() => handleView('drafts')}
                    className={`flex flex-row items-center p-2 rounded-md hover:text-primary ${activeIcon === 'drafts' && 'text-primary rounded-lg'}`}>
                    <FaEdit className={`w-6 h-6 mr-2 text-gray-500 hover:text-primary ${activeIcon === 'drafts' && 'text-primary rounded-lg'}`} />drafts
                </NavLink>
                <NavLink to="/emails/deleted" onClick={() => handleView('deleted')}
                    className={`flex flex-row items-center p-2 rounded-md hover:text-primary ${activeIcon === 'deleted' && 'text-primary rounded-lg'}`}>
                    <FaTrashAlt className={`w-6 h-6 mr-2 text-gray-500 hover:text-primary ${activeIcon === 'deleted' && 'text-primary rounded-lg'}`} />deleted
                </NavLink>


                <button
                className={`flex flex-row items-center p-2 rounded-md hover:text-primary`}
                 onClick={() => setShowMore(!showMore)}><FaChevronDown /> more</button>
                {showMore ?
                    <div>
                        <NavLink to="/emails/contact" onClick={() => handleView('contact')}
                            className={`flex flex-row items-center p-2 rounded-md hover:text-primary ${activeIcon === 'contact' && 'text-primary rounded-lg'}`}>
                            <FaFileContract className={`w-6 h-6 mr-2 text-gray-500 hover:text-primary ${activeIcon === 'contact' && 'text-primary rounded-lg'}`} /> Contact
                        </NavLink>
                        <NavLink to="/emails/spam" onClick={() => handleView('spam')}
                            className={`flex flex-row items-center p-2 rounded-md hover:text-primary ${activeIcon === 'spam' && 'text-primary rounded-lg'}`}>
                            <FaExclamationTriangle className={`w-6 h-6 mr-2 text-gray-500 hover:text-primary ${activeIcon === 'spam' && 'text-primary rounded-lg'}`} />spam
                        </NavLink>
                    </div> : null
                }
            </div>
            <Labels />

        </div>
    )
}
