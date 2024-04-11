import { Outlet, Route, Routes } from 'react-router-dom';
import EmailsLayout from './EmailsLayout';
import SelectedMail from '../pages/SelectedMail';
import Inbox from '../components/Inbox';
import Favourites from '../components/Favourites';
import Drafts from '../components/Drafts';
import Deleted from '../components/Deleted';
import Contacts from '../components/Contacts';
import EmailsTypeLayout from '../Layout/EmailsTypeLayout';

const EmailsRoutes = () => {
  return (
    <Routes>
      <Route element={<EmailsLayout />}>
        <Route path="inbox" element={<Inbox />}>
          <Route path=":id" element={<SelectedMail />} />
        </Route>
        <Route path="favourites" element={<Favourites />}>
          <Route path=":id" element={<SelectedMail />} />
        </Route>
        <Route path="drafts" element={<Drafts />}>
          <Route path=":id" element={<SelectedMail />} />
        </Route>
        <Route path="deleted" element={<Deleted />}>
          <Route path=":id" element={<SelectedMail />} />
        </Route>
        <Route path="contacts" element={<Contacts />}>
          <Route path=":id" element={<SelectedMail />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default EmailsTypeLayout;