import { useContext, useEffect, useState } from 'react'
import Search from '../components/Search'
import Header from '../functions/Header'
import DataContext from '../context/DataContext'
import { useNavigate } from 'react-router-dom'
import api from '../functions/api'

export default function Contact() {
    const { user } = useContext(DataContext)
    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log("from contact")
        api.get("/users").then((res) => setUsers(res));
    }, [])

    const nav = useNavigate()
    const gotoMail = (chat) => {
        nav(`/emails/contact/${chat}`);

    }
    return (
        <div className="flex flex-col h-screen">
        <Header>
          <Search />
        </Header>
      
        <div className="flex-grow overflow-auto">
          {users.map((u) => (
            <div
              key={u._id}
              className="bg-white shadow-md rounded-md mb-4 cursor-pointer hover:bg-gray-100"
            >
              {/* User Info */}
              <div className="flex items-center p-4">
                <img
                  src={u.avatar}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h3 className="text-lg font-semibold">{u.name}</h3>
              </div>
      
              {/* User Chats */}
              <div className="px-4 pb-4">
                {u.chats.map((chat) => (
                  <div
                    key={chat.chat_id}
                    onClick={() => gotoMail(chat.chat_id)}
                    className="bg-gray-100 rounded-md p-4 mb-2 cursor-pointer hover:bg-gray-200 transition-colors duration-200"
                  >
                    <p className="text-sm font-medium">{chat.chat_id}</p>
                    {/* Add additional chat info here */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}
