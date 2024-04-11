import { useContext, useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../functions/Header'
import DataContext from '../context/DataContext'
import { useNavigate } from 'react-router-dom'
import api from '../functions/api'
import { FaEnvelope, FaStar } from 'react-icons/fa'

export default function GenericMailType({ type }) {
  const { user } = useContext(DataContext)
  const [chats, setChats] = useState([])
  const [originalChats, setOriginalChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null)

  useEffect(() => {
    console.log(`from `, type)
    api.get(`/chats/${type}`).then((res) => {
      setChats(res)
      setOriginalChats(res)
    })
  }, [])

  const nav = useNavigate()

  const gotoMail = (chat) => {
    setActiveChat(chat)
    api.put(`/users/${user._id}/${chat}`, { type: "isRead", value: true })
    setChats(chats.map(c => c.chat._id === chat ? { ...c, isRead: true } : c))
    nav(`/emails/${type}/${chat}`, {chats});
  }

  const handleLike = (chat) => {
    console.log(chat.chat._id)
    console.log(chat.isFavorite)
    if (!chat.isFavorite || chat.isFavorite == undefined) {
      api.put(`/users/${user._id}/${chat.chat._id}`, { type: "isFavorite", value: true })
      setChats(chats.map(c => c.chat._id === chat.chat._id ? { ...c, isFavorite: true } : c))
    }

    api.put(`/users/${user._id}/${chat.chat._id}`, { type: "isFavorite", value: false })
    setChats(chats.map(c => c.chat._id === chat.chat._id ? { ...c, isFavorite: false } : c))
  }



  return (
    <div className="flex flex-col h-screen bg-gray-100 rounded-lg m-2 p-2">
      <div className="h-20 border-b-2 border-primary-200">
        <Header>
          <div className='flex justify-between items-center'>
            <Search chats={chats} setChats={setChats} originalChats={originalChats} />
          </div>
        </Header>
      </div>

      <div>
        {chats.map((chat) => (
          <div
            key={chat._id}
            className={`bg-gray-100 rounded-md p-4 mb-4 cursor-pointer hover:drop-shadow-2xl flex flex-row items-center justify-between gap-2
            ${activeChat == chat.chat._id ? "drop-shadow-2xl" : ""} `}
          >
            <div className='flex flex-row' onClick={() => gotoMail(chat.chat._id)}>
              <img src={chat.chat.members[0].avatar} alt="avatar" className="w-10 h-10 rounded-full mr-4" />
              <div className="flex flex-col">
                <p title={chat.chat.msg[chat.chat.msg.length - 1].content}
                  className="font-bold text-sm">{chat.chat.subject}</p>
                <p title={chat.chat.members.map(m => m.fullName).join(", ")}
                  className="text-gray-500 text-sm">{chat.chat.members[0].fullName}{chat.chat.members.length > 2 ? `+${chat.chat.members.length - 2}` : ""}</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-gray-500 text-sm">{new Date(chat.chat.lastDate).toLocaleTimeString().slice(0, 5)}</p>
              {!chat.isRead ? <FaEnvelope className='text-primary' /> :
                <FaStar onClick={() => handleLike(chat)} className={`${chat.isFavorite ? "text-gold" : "text-primary-100"}`} />}            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
