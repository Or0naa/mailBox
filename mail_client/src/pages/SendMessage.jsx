import React, { useState } from 'react';
import NewMessage from '../components/NewMessage';
import Header from '../functions/Header';

export default function SendMessage() {
    const [members, setMembers] = useState([]);
    const [subject, setSubject] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMember = e.target['members'].value;
        setMembers(prevMembers => [...prevMembers, newMember]);
        e.target['members'].value = '';
    }

    return (
        <div className='overflow'>
            <Header>
             <p className='text-2xl font-bold'>  Send new message</p> 
            </Header>
            <form className="flex flex-col items-center bg-white p-8 rounded-lg " onSubmit={handleSubmit}>
                <div className="flex flex-row flex-wrap mb-4 w-full">
                    <label htmlFor='subject' className="mr-2 w-24 font-bold">Subject</label>
                    <input onChange={e => setSubject(e.target.value)}
                     type='text' name='subject' placeholder='subject...' className="p-2 border border-gray-300 rounded flex-grow" />
                </div>
                <div className='flex flex-row flex-wrap mb-4 w-full'>
                    <label htmlFor='members' className="mr-2 font-bold w-24">To</label>
                    <div className="p-2 border border-gray-300 rounded flex flex-row flex-wrap mb-4 flex-grow">
                        {members.map(member => (
                            <div key={member} className="bg-gray-200 text-gray-700 px-3 py-1 w-fit rounded mr-2 mb-2">
                                {member}
                            </div>
                        ))}
                        <input type='email' name='members' className="p-2 border border-none rounded mr-2 flex-grow" /> 
                    </div>
                    <button type='submit' className="bg-primary text-white h-8 p-1 rounded ml-2 mt-3 hover:bg-primary-400">Add</button>
                </div>
            </form>
            <NewMessage subjectNewChat={subject} membersNewChat={members} chatId={""} />
        </div>
    )
}
