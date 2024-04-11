
// import { useContext, useState } from 'react';
// import { FaChevronDown, FaEdit, FaInbox, FaStar, FaTrash, FaUserFriends } from 'react-icons/fa';
// import jsonData from '../../../data.json'
// ;import { useContext, useState } from 'react';
import { FaChevronDown, FaEdit, FaInbox, FaStar, FaTrash, FaUserFriends } from 'react-icons/fa';
import jsonData from '../../../data.json'
;
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar({ onlyIcons }) {
  const [activeBox, setActiveBox] = useState(null);
  const nav = useNavigate();

  const toggle = (sumthing) => {
    setActiveBox(activeBox === sumthing ? null : sumthing);
    nav(`/emails/${sumthing}`);
  };
  

  const unreadEmailsCount = jsonData.inbox.filter(email => email.unread).length;
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore(!more);
  };

  return (
    <div className='flex flex-col gap-2 w-full'>
      <div onClick={() => toggle("inbox")} className={`flex w-full items-center justify-between cursor-pointer mb-2 ${activeBox === 'inbox' ? 'text-teal-500' : ''}`}>
        <div className='flex'>
          <FaInbox className='mr-2' />
          {!onlyIcons ? <p>Inbox</p> : null}
        </div>
        <div>
          {unreadEmailsCount > 0 && <p className='bg-teal-500 rounded-3xl text-white p-1'>{unreadEmailsCount}</p>}
        </div>
      </div>

      <div onClick={() => toggle("favourites")} className={`flex cursor-pointer mb-2 ${activeBox === 'favourites' ? 'text-teal-500' : ''}`}>
        <FaStar className="mr-2" />
        {!onlyIcons ? <p>Favourites</p> : null}
      </div>

      <div onClick={() => toggle("drafts")} className={`flex items-center cursor-pointer mb-2 ${activeBox === 'drafts' ? 'text-teal-500' : ''}`}>
        <FaEdit className="mr-2" />
        {!onlyIcons ? <p>Drafts</p> : null}
      </div>

      <div onClick={() => toggle("deleted")} className={`flex items-center cursor-pointer mb-2 ${activeBox === 'deleted' ? 'text-teal-500' : ''}`}>
        <FaTrash className="mr-2" />
        {!onlyIcons ? <p>Deleted</p> : null}
      </div>

      <div onClick={handleMore} className='flex items-center justify-between cursor-pointer mb-2 mt-4'>
        <div className='flex'>
          <FaChevronDown className="mr-2" />
          {!onlyIcons ? <p>More</p> : null}
        </div>
      </div>

      {more && <div className='flex justify-between p-2 flex-col mt-2'>
        <div onClick={() => toggle("contact")} className={`flex items-center cursor-pointer mb-2 ${activeBox === 'contact' ? 'text-teal-500' : ''}`}>
          <FaUserFriends className="mr-2" />
          {!onlyIcons ? <p>Contact</p> : null}
        </div>
      </div>}
    </div>
  );
}

// import { useNavigate } from 'react-router-dom';

// export default function BoxMail({ onlyIcons }) {
//   const [activeBox, setActiveBox] = useState(null);

//   const nav = useNavigate();

//   const toggle = (sumthing) => {
//     setActiveBox(activeBox === sumthing ? null : `${sumthing}`);
//     nav(`/${messages/sumthing}`);
//   };

//   const unreadEmailsCount = jsonData.inbox.filter(email => email.unread).length;
//   const [more, setMore] = useState(false);

//   const handleMore = () => {
//     setMore(!more);
//   };

//   return (
//     <div className='flex flex-col gap-2 w-full ' >
//       <div onClick={() => toggle("inbox")} className={`flex w-full items-center justify-between cursor-pointer mb-2 ${activeBox === 'inbox' ? 'text-teal-500' : ''}`}>
//         <div className='flex '><FaInbox className='mr-2 ' />
//           {!onlyIcons ? <p>Inbox</p> : null}
//         </div> <div>
//           {unreadEmailsCount > 0 && <p className='bg-teal-500 rounded-3xl text-white p-1'>{unreadEmailsCount}</p>}
//         </div></div>

//       <div onClick={() => toggle("favourites")} className={`flex cursor-pointer mb-2 ${activeBox === 'favourites' ? 'text-teal-500' : ''}`}>
//         <FaStar className="mr-2" />
//         {!onlyIcons ? <p> Favourites</p> : null}
//       </div>

//       <div onClick={() => toggle("drafts")} className={`flex items-center cursor-pointer mb-2 ${activeBox === 'drafts' ? 'text-teal-500' : ''}`}>
//         <FaEdit className="mr-2" />
//         {!onlyIcons ? <p> Drafts</p> : null}
//       </div>

//       <div onClick={() => toggle("deleted")} className={`flex items-center cursor-pointer mb-2 ${activeBox === 'deleted' ? 'text-teal-500' : ''}`}>
//         <FaTrash className="mr-2" />
//         {!onlyIcons ? <p>Deleted </p> : null}
//       </div>

//       <div onClick={handleMore} className='flex items-center justify-between cursor-pointer mb-2 mt-4'>
//         <div className='flex'>
//         <FaChevronDown className="mr-2" />
//         {!onlyIcons ? <p>more</p> : null}
//       </div></div>

//       {more && <div className='flex justify-between p-2 flex-col mt-2'>
//         <div onClick={() => toggle("contact")} className={`flex items-center cursor-pointer mb-2 ${activeBox === 'contact' ? 'text-teal-500' : ''}`}>
//           <FaUserFriends className="mr-2 " />
//           {!onlyIcons ? <p> contact</p> : null}
//         </div>
//       </div>}
//     </div>
//   );
// }
