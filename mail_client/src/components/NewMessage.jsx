
import React, { useContext, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // יבוא עיצוב סטנדרטי של Quill
import { FiBold, FiItalic, FiUnderline, FiAlignLeft, FiAlignRight, FiAlignCenter, FiPaperclip, FiSend, FiEdit3, FiImage } from 'react-icons/fi';
import { FaEllipsisV, FaTrash } from 'react-icons/fa';
import { usePopup } from '../context/PopupContext';
import ConfirmationModal from '../functions/ConfirmationModal';
import DataContext from '../context/DataContext';
import api from '../functions/api';

export default function NewMessage({ subjectNewChat, membersNewChat, chatId, setChat }) {
    const [text, setText] = useState('');

    const { popupComp, setPopupComp } = usePopup();
    const { user } = useContext(DataContext)

    console.log(subjectNewChat, membersNewChat, chatId)


    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
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
        let newChat = {}

        if (chatId == "") {
            console.log(text)
            membersNewChat.unshift(user.email)

            newChat = {
                subject: subjectNewChat,
                members: membersNewChat,
                lastDate: new Date(),

                msg: [{
                    from: user._id,
                    content: text,
                    date: new Date(),
                },
                ],
            }
            console.log(newChat)
            api.post('/chats', newChat).then((res) => {
                console.log(res);
            });
        }
        else {
            const newMessage = {
                from: user._id,
                content: text,
                date: new Date(),
            }
            console.log(newMessage)
            console.log(chatId)
            api.put(`/chats/addMessage/${chatId}`, newMessage).then((res) => {
                console.log(res);
                setChat(res)
            })
        }
        setText("")
    }

    const handleDelete = () => {
        setText("")
        setPopupComp(null)
    }

    const [moreOptions, setMoreOptions] = useState(false);

    return (
        <div className="flex flex-col items-stretch justify-between border-t border-gray-300 py-2">
            <div className=" flex-grow">
                <div className="w-full p-2 border border-gray-300 rounded-xl bg-white">
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

                <div className="flex items-center ">
                    <FaTrash className="text-xl text-gray-400 cursor-pointer"
                        onClick={() => text.length > 0 ? (setPopupComp(<ConfirmationModal isOpen={true}
                            onCancel={() => setPopupComp(null)}
                            onConfirm={() => handleDelete()}
                            message="בטוחה שתרצי למחוק?" />)) : ""} />

                    <FaEllipsisV className="text-xl text-gray-400 cursor-pointer" onClick={() => setMoreOptions(!moreOptions)} />
                    {moreOptions ? (
                        <div className=" right-0 bottom-full mt-2 bg-gray-100 rounded-md shadow-md">
                            <p className="text-sm text-teal-300 px-2 min-w-fit py-1">More options</p>
                            <div className="flex flex-col items-start">
                                <p className="text-sm text-gray-500 px-2 py-1" style={{ whiteSpace: 'nowrap' }}>coffee</p>
                                <p className="text-sm text-gray-500 px-2 py-1" style={{ whiteSpace: 'nowrap' }}>tea</p>
                                <p className="text-sm text-gray-500 px-2 py-1" style={{ whiteSpace: 'nowrap' }}>cold water with lemon</p>
                            </div>
                        </div>
                    ) : null}
                    <button onClick={handleSend} className="bg-primary text-white font-bold py-2 px-4 rounded-xl ml-2 flex items-center gap-2">
                        <p>send </p> <FiSend className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
}
