import NewMessage from "../NewMessage";
import Message from "../Message";
import jsonData from '../../../data.json'
import {  useState } from "react"; // נוסיף את useState
export default function Threads() {

  const [threads, setThreads] = useState(jsonData.threads || [{ subject: '', participants: [], messages: [] }]);
  const { subject, participants, messages } = threads[0];
  const currentDate = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  };

  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  // נשנה את השימוש בערך קבוע לשימוש בסטאט
  const [showFullMessage, setShowFullMessage] = useState(true);

  const shortMessage = (msg) => { return msg.split(' ').slice(0, 3).join(' ').concat('...'); }

  const handleClick = () => {
    setShowFullMessage(!showFullMessage);
  };


  return threads.length > 0 ? (
    <div className="overflow p-4 bg-gray-100 rounded-md relative">
      <p>{formattedDate}</p>
      <h2 className="text-lg font-bold mb-2">{threads[0].subject}</h2>
      <p className="text-gray-700 mb-4">
        <strong>Participants:</strong> {threads[0].participants.join(', ')}
      </p>
      <div className="space-y-4">
        {threads[0].messages.map((message, index) => (
          index === threads[0].messages.length - 1 ? (
            // Handle last message separately
            <div onClick={handleClick} key={index} className="p-4 bg-white  rounded-md shadow-md ">
              <div className="flex items-center justify-between">
                <div className="mr-4">
                  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdpRD2CPOKhzVs04hmrXvqMZ14Ad2lLu_vaCtD3Ca-w&s"} alt={message.sender} className="w-8 h-8 rounded-full" />
                </div>
                <h2 className="text-gray-800"><strong>{message.sender}</strong></h2>

                <p className="text-sm text-gray-500">{message.time}</p>

              </div>
              <div className="flex items-center justify-between">
                {showFullMessage ? <p className="text-gray-800">{message.message}</p> : <p className="text-gray-800" >{shortMessage(message.message)}</p>}

              </div>
            </div>
          ) : (
            <Message key={index} message={message} />
          )
        ))}
      </div>

      <NewMessage from={"You"} to={participants[0]} setShowFullMessage={setShowFullMessage} setThreads={setThreads} threads={threads} />
    </div>
  ) : (
    <div>Loading...</div>

  );
}
