import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Search({ chats, setChats, originalChats }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredList = originalChats.filter(chat => chat.chat.subject.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log(originalChats);
    setChats(filteredList);
  }, [searchTerm])


  return (
    <div>
      <div className={`flex justify-between items-center bg-gray-200 rounded-lg p-2 mb-2`}>
        <input type="text" placeholder="Search"
          className="w-full p-2 border border-none bg-gray-200" onChange={(event) => { setSearchTerm(event.target.value) }} />
        <FaSearch />
      </div>
    </div>
  );
}
