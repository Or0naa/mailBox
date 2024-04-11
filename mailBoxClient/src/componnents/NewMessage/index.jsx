
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // יבוא עיצוב סטנדרטי של Quill
import { FiBold, FiItalic, FiUnderline, FiAlignLeft, FiAlignRight, FiAlignCenter, FiPaperclip, FiSend, FiEdit3, FiImage } from 'react-icons/fi';
import { FaEllipsisV, FaTrash } from 'react-icons/fa';

export default function NewMessage({from, to, setShowFullMessage, setThreads, threads}) {
  const [text, setText] = useState('');
  

  
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
      {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ]
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  const handleTextChange = (value) => {
    setText(value);
  };

  const [messageDetails, setMessageDetails] = useState({
    subject: '',
    recipients: [],
    // add more properties as needed
  });



  const handleSend = () => {
   
    const messageObj = {
      text: text, // text from ReactQuill
      // ...messageDetails, // additional details from state
    };
    const newMessage = {
      sender: from,
      time: new Date().toLocaleString(),
      message: text,
      senderImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdpRD2CPOKhzVs04hmrXvqMZ14Ad2lLu_vaCtD3Ca-w&s',
    }
    const newThreads = [...threads];
    newThreads[0].messages.push(newMessage);
  
    console.log({ newThreads });
    setThreads(newThreads);
    console.log({threads})
    console.log('Message object:', messageObj);
    // or send messageObj to server using fetch, axios, etc.
  };

  const [moreOptions, setMoreOptions] = useState(false);

  return (
    <div className="flex flex-col items-stretch justify-between border-t border-gray-300 py-2">
      <div className="relative flex-grow">
        <div className="textarea-wrapper w-full p-2 border border-gray-300 rounded-xl bg-white">
          <ReactQuill
            value={text}
            onChange={handleTextChange}
            modules={modules}
            formats={formats}
            placeholder="Write your message..."
          />
        </div> 
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <label htmlFor="attachment">
            <FiPaperclip className="text-xl text-gray-400 cursor-pointer" />
            <input id="attachment" type="file" className="hidden" />
          </label>
          <label htmlFor="attachment">
            <FiImage className="text-xl text-gray-400 cursor-pointer" />
            <input id="attachment" type="file" className="hidden" />
          </label></div>

        <div className="flex items-center relative">
          <FaTrash className="text-xl text-gray-400 cursor-pointer" onClick={handleSend} />
          <FaEllipsisV className="text-xl text-gray-400 cursor-pointer" onClick={() => setMoreOptions(!moreOptions)} />
          {moreOptions ? (
            <div className="absolute right-0 bottom-full mt-2 bg-gray-100 rounded-md shadow-md">
              <p className="text-sm text-teal-300 px-2 min-w-fit py-1">More options</p>
              <div className="flex flex-col items-start">
                <p className="text-sm text-gray-500 px-2 py-1" style={{ whiteSpace: 'nowrap' }}>coffee</p>
                <p className="text-sm text-gray-500 px-2 py-1" style={{ whiteSpace: 'nowrap' }}>tea</p>
                <p className="text-sm text-gray-500 px-2 py-1" style={{ whiteSpace: 'nowrap' }}>cold water with lemon</p>
              </div>
            </div>
          ) : null}
          <button onClick={handleSend} className="bg-teal-500 text-white font-bold py-2 px-4 rounded-xl ml-2 flex items-center gap-2">
            <p>send </p> <FiSend className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
