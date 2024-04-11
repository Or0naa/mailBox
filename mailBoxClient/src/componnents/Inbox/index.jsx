import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";
import jsonData from '../../../data.json'
import Contacts from "../Contacts";
import Search from "../Search";
import { useNavigate } from "react-router-dom";

export default function Inbox() {
  const inbox = jsonData.inbox

  const { mail, setMail } = useContext(DataContext)
  const [pressedIndex, setPressedIndex] = useState(null); // משתנה לאחזור אינדקס הכפתור שנלחץ

  // מיין ההודעות לפי השולח (sender)
  inbox.sort((a, b) => a.sender.localeCompare(b.sender));

  // יצירת מילון לאחסון מספר ההודעות מכל שולח
  const messagesCountBySender = {};

  // ספירת מספר ההודעות מכל שולח
  inbox.forEach((email) => {
    if (email.unread && !messagesCountBySender[email.sender]) {
      messagesCountBySender[email.sender] = 1;
    } else if (email.unread) {
      messagesCountBySender[email.sender]++;
    }
  });

 const images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdpRD2CPOKhzVs04hmrXvqMZ14Ad2lLu_vaCtD3Ca-w&s", 
  `https://images.maariv.co.il/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_270,w_500/845533`
]

const nav = useNavigate()

  return (
    <div className="overflow"> <Search/>
    <div className="p-4 bg-gray-100 border border-t-neutral-200">
     
      <ul>
        {inbox.map((email, index) => (
            <li key={index}
             className={`flex items-center justify-between border-b border-gray-300 py-2 ${pressedIndex === index ? 'bg-white shadow-md' : 'bg-slate-100'}`}
             onClick={() => nav(`/emails/inbox/${email._id}`)}
             >
            <img src={images[index]} alt={`Profile picture of ${email.sender}`} className="w-8 h-8 rounded-full mr-2" />
            <div className="flex items-center">
              <div>
                <p className="font-bold">{email.sender}</p>
                <p className="text-gray-600">{email.message}</p>
              </div>
            </div>
            <div>
              <p className="text-gray-600">{email.time}</p>
              {messagesCountBySender ? <p className="bg-teal-500 text-white rounded-3xl text-center">{messagesCountBySender[email.sender]}</p> : null}
            </div>
          </li>
        ))}
      </ul>
      <Contacts/>
    </div>
    </div>
  );
}
