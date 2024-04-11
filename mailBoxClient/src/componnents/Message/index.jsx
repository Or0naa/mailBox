import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaBackspace, FaBackward } from 'react-icons/fa';

export default function Message({ message, lastMessage }) {
  const [showFullMessage, setShowFullMessage] = useState(false);

  message.senderImage = message.senderImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdpRD2CPOKhzVs04hmrXvqMZ14Ad2lLu_vaCtD3Ca-w&s";
  const isYou = message.sender === "You";
  const shortMessage = message.message.split(' ').slice(0, 3).join(' ').concat('...');

  const handleClick = () => {
    setShowFullMessage(!showFullMessage);
  };

  return (
    <div key={message} className="p-4 bg-white rounded-md shadow-md flex items-start" onClick={handleClick}>
      {isYou ? (
        <div className="mr-4">
          <FaArrowLeft className="text-gray-500" />
        </div>
      ) : (
        <div className="mr-4">
          <img src={message.senderImage} alt={message.sender} className="w-8 h-8 rounded-full" />
        </div>
      )}

      <div className="flex-1">
        <h2 className="text-gray-800"><strong>{message.sender}</strong></h2>
        <div className="flex items-center justify-between">
          <p className="text-gray-800">{showFullMessage ? message.message : (lastMessage ? message.message : shortMessage)}</p>
          <p className="text-sm text-gray-500">{message.time}</p>
        </div>
      </div>
    </div>
  );
}
