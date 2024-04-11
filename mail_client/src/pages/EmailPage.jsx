import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../functions/api'
import Header from '../functions/Header'
import { FaArrowLeft, FaEllipsisV, FaPrint, FaStar, FaTrash } from 'react-icons/fa'
import DataContext from '../context/DataContext'
import ConfirmationModal from '../functions/ConfirmationModal'
import { usePopup } from '../context/PopupContext'
import NewMessage from '../components/NewMessage'
import OneMessage from '../components/OneMessage'

export default function EmailPage({ props }) {
  const chatId = useParams()
  // const chats = props.chats
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(DataContext)
  const { popupComp, setPopupComp } = usePopup();
  const [members, setMembers] = useState([]);
  const nav = useNavigate()
  
  useEffect(() => {
    console.log("from EmailPage")
    setLoading(true);
    api.get(`/chats/id/${chatId.id}`)
      .then((res) => {
        setChat(res);
        setLoading(false);
      })
  }, [chatId])

  useEffect(() => {
    if (chat.members)
      chat.members.forEach((member) => {
        setMembers(prevMembers => ({ ...prevMembers, [member._id]: member }));
      });
  }, [chat.members]);

  const handleDelete = () => {
    setPopupComp(
      <ConfirmationModal
        isOpen={true}
        onCancel={() => setPopupComp(null)}
        onConfirm={() => {
          api.put(`/chats/delete/${chat._id}`)
          setPopupComp(null);
          setChat(chats.filter((chat) => chat._id !== chatId.id));
          setMembers([]);
          nav('/emails')
        }}
        message="Are you sure you want to delete this chat?"
      />
    );
  };

  console.log({chats})

  return (
    <div className=" flex flex-col h-screen">
      <Header>
        <div className="flex text-gray-300 items-center justify-between w-full ">
          <p>permission offers</p>
          <div className="flex gap-2">
            <FaStar className={`${chat.isFavorite ? "text-gold" : "text-primary-100"}`} />
            <FaPrint />
            <FaTrash className='cursor-pointer'
              onClick={() => handleDelete()} />

            <FaEllipsisV />
          </div>
        </div>
      </Header>
      <div className='overflow flex flex-col p-4'>
        <p className='text-gray-300'>{new Date(chat.lastDate).toLocaleString()}</p>
        <h1 className='text-xl'>{chat.subject}</h1>
        <div className="h-96 overflow-y-auto space-y-4">
          {loading ? (
            <p className="text-gray-400">Loading...</p>
          ) : chat.msg ? (
            chat.msg.map((message) => (
              <OneMessage key={message._id} message={message} user={user} members={members} />
            ))
          ) : (
            <p className="text-gray-400">No messages found</p>
          )}
        </div>
        <NewMessage members={members} chatId={chat._id} setChat={setChat} />
      </div></div>
  )
}