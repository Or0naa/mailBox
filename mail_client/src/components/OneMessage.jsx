import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext';
import { FaArrowLeft } from 'react-icons/fa';
import TextView from './TextView';

export default function OneMessage({ message, members }) {
    const { user } = useContext(DataContext)

    const [showFullMessage, setShowFullMessage] = useState(false);
    const shortMessage = (msg) => { return msg.split(' ').slice(0, 3).join(' ').concat('...'); }
  
    const handleClick = () => {
      setShowFullMessage(!showFullMessage);
    };
  

    return (
        <div onClick={handleClick} key={message._id} className={`flex rounded-md p-2 ${showFullMessage ? "flex-col" : "flex-row"}`}>
            <div className="flex justify-between items-center mb-2 gap-4 ">
                {user && <div className="flex items-center">
                    {message.from === user._id ? (
                        <>
                            <FaArrowLeft className="mr-2 text-gray-500" />
                            <p className="text-primary-900">You</p>
                        </>
                    ) : (
                        <>
                            <img src={members[message.from] ? members[message.from].avatar : ""} alt="" className="w-6 h-6 rounded-full mr-2" />
                            <p className="text-primary-900">{members[message.from] ? members[message.from].fullName : "loading..."}</p>
                        </>
                    )}
                </div>}
                {!showFullMessage &&   <p className="text-gray-800  ">{<TextView showFullMessage={showFullMessage} message={message.content}/>}</p> }
                <p className="text-gray-500 text-sm">{new Date(message.date).toLocaleString()}</p>
            </div>
            <div className="border-b border-gray-300 pb-2">
                <p className="text-gray-400 text-sm">
                    {showFullMessage&& <p className="text-gray-800 " >{<TextView message={message.content}/>}</p>}
                </p>
            </div>

        </div>
    )
}
