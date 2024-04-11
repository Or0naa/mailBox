import styles from './style.module.css'
import { useEffect, useState } from "react";
import jsonData from '../../../data.json'
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  const contacts = jsonData.contacts

  const [contactss, setContacts] = useState(contacts);
  const [originalContacts] = useState(contacts); // הוספת משתנה נפרד לקיום הרשימה המקורית
  const [selectedContact, setSelectedContact] = useState(null);
  const [viewSeach, setViewSearch] = useState("")
  const [show, setShow] = useState(false)

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setViewSearch(e.target.value)
    const filteredContacts = originalContacts.filter(contact => contact.toLowerCase().includes(searchTerm.toLowerCase())); // סינון לפי רשימה המקורית
    setContacts(filteredContacts);
  };

  useEffect(()=>{
   if( viewSeach.length>0){
    setShow(true)
   }
   else{
    setShow(false)
   }
  }, [viewSeach])

  const handleContactClick = (index) => {
    if (selectedContact === index) {
      setSelectedContact(null); // בטיחות נבדוק האם האיש קשר כבר נבחר, אם כן נסיר את הבחירה
    } else {
      setSelectedContact(index); // אחרת, נבחר את האיש קשר
    }
  };

  const pixer = [
    "https://img.mako.co.il/2017/06/04/uglyface5_g.jpg",
    "data:image/jpeg;base64,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",
    "https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE4OTkzfQ",
    "https://www.yomyom.net/UploadImg/ArticlesNew/images/2955/1(5).jpg",
    `https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_270,w_500/845533`,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGDjSypXc9R7LrTQ5cZfU1woQoJJl60aX2cg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtm303ChP2Bz1HqlsQyHYILnRL9642_A6pdA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1NK6Yfs3xcOf6A2pzsHWUseFKqw3GO11HZA&usqp=CAU",   
  ]

  return (
    <div className="p-4 bg-gray-100 rounded-md ">
      <div className="mb-4 ">
        <div className="flex items-center justify-between bg-gray-200 text-gray-400 rounded-md p-2">
      <input type="text" placeholder={`search `} className="w-full p-2 border border-none bg-gray-200 " onChange={handleSearch} />
      {<FaSearch />}
      </div></div>
      {show?
      <ul className="list-none">
        {contactss.map((contact, index) => (
          <li key={index} className={`flex items-center text-gray-800 p-2 mb-2 rounded-md shadow-md hover:shadow-2xl transition duration-300 ${selectedContact === index ? 'bg-white' : 'bg-slate-100'}`} onClick={() => handleContactClick(index)}>
            <img
              src={pixer[index]} // URL זמנית לתמונת פרופיל
              alt={`Profile picture of ${contact}`}
              className="w-10 h-10 rounded-full mr-4"
            />
            <span className="text-lg font-medium">{contact}</span>
          </li>
        ))}
      </ul>:null}
    </div>
  );
}
