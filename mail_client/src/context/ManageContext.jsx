import React, { useEffect, useState } from 'react';
import DataContext from './DataContext';
import api from '../functions/api';

export function ManageContext({ children }) {

  const [user, setUser] = useState(null); 
  const [listToSearch, setListToSearch] = useState();


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !user) {
      const fetchUser = async () => {
        try {
          const res = await api.get("/users/6616a9d06a38323ef4582dbe"); // קריאה לשרת רק אם המשתמש לא מוגדר
          setUser(res);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };
      fetchUser();
    }
  }, [user]); // שימוש במשתנה user כתנאי והוספתו כתלות כדי למנוע לולאת קריאה אינסופית

  return (
    <DataContext.Provider value={{ user, setUser, listToSearch, setListToSearch }}>
      {children}
    </DataContext.Provider>
  );
}
