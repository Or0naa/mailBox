import { Route, Routes } from 'react-router-dom';

import SelectedMail from '../../pages/SelectedMail';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import Calendar from '../../pages/Calendar';
import Favourites from '../Favourites';
import Inbox from '../Inbox';
import Drafts from '../Drafts';
import Deleted from '../Deleted';
import NewMessage from '../newMessage';
import Contacts from '../Contacts';
import Addressee from '../../pages/Addressee';

export default function Content() {
  const { mail, setMail } = useContext(DataContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className={`w-full sm:w-auto p-4 ${mail ? 'sm:col-span-1' : 'sm:col-span-2'}`}>
        <Routes>
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/emails/inbox" element={<Inbox/>} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/Drafts" element={<Drafts />} />
          <Route path="/Deleted" element={<Deleted />} />
          <Route path="/newMessage" element={<NewMessage />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Addressee" element={<Addressee />} />
        </Routes>
      </div>
    
    </div>
  );
}
