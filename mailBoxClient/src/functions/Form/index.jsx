// import React, { useState } from 'react';

// const GenericForm = ({ onSubmit, onDone, children }) => {
//   const [loading, setLoading] = useState(false); // משתנה סטייט לניהול מצב הטעינה
//   const [errors, setErrors] = useState([]); // משתנה סטייט לניהול שגיאות הטופס

//   const handleSubmit = async (e) => { // פונקציה המתבצעת בעת שליחת הטופס
//     e.preventDefault(); // מניעת התנהגות הדפדפן המוגדרת עבור ה-submission הרגיל של טופס
    
//     setLoading(true); // סימון ההתחלתי של מצב הטעינה
//     setErrors([]); // איפוס שגיאות הטופס

//     try {
//       const formData = new FormData(e.target); // יצירת אובייקט FormData מהטופס
//       // באפשרותך לאסוף את נתוני הטופס ולבצע פעולות עם הנתונים כאן

//       await onSubmit(formData); // העברת הנתונים לפונקצית המקבלת את הנתונים לעיבוד נוסף (נניח, כשהיא פונקציה אסינכרונית)
//       onDone(); // קריאה לפונקציה המתבצעת לאחר שליחת הטופס (נניח, לנווט לדף אחר)
//     } catch (error) {
//       setErrors([error.message]); // הצגת שגיאה במקרה של חריגה בעיבוד הנתונים
//     } finally {
//       setLoading(false); // סיום מצב הטעינה, בלתי תלוי מה נתבצע לאחר כך
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {React.Children.map(children, child =>
//         React.cloneElement(child, {
//           // מעבר פרופס נוספים לפריטי ה-children במקרה הצורך
//         })
//       )}
//       {loading && <div>Loading...</div>} {/* הצגת הודעת טעינה כאשר הטופס נמצא במצב טעינה */}
//       {errors.length > 0 && ( {/* הצגת הודעות שגיאה במקרה של הופעת שגיאות */}
//         <div>
//           {errors.map((error, index) => (
//             <p key={index}>{error}</p>
//           ))}
//         </div>
//       ))}
//       <button type="submit">Submit</button> {/* כפתור ה-submit לטופס */}
//     </form>
//   );
// };

// export default GenericForm;


//דוגמה מאינגייגר:


import axios from "axios";
const isProduction = 'false';

// headers: {
//     'Content-Type': 'application/json', // Example header, you can add more as needed
//     'Authorization': 'Bearer yourAccessToken' // Example authorization header
//   }

const mainApi = async (method, path, data, headers) => {
  try {
    let fainlPath = path.startsWith("/") ? path.slice(1) : path;
    let auth = localStorage.token ? { Authorization: "Bearer " + localStorage.token } : {};

    let baseUrl = isProduction === 'true' ? 'https://engager-g262.onrender.com/' : 'http://localhost:2500/';

    const url = `${baseUrl}${fainlPath}`;

    const response = await axios({
      method,
      url,
      data,
      headers: { ...headers, ...auth },
    });

    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};

const get = async (path, data = {}, headers) => await mainApi("GET", path, data, headers);

const post = async (path, data = {}, headers) => await mainApi("POST", path, data, headers);

const put = async (path, data = {}, headers) => await mainApi("PUT", path, data, headers);

const del = async (path, data = {}, headers) => await mainApi("DELETE", path, data, headers);


// import the file in ur componnt

// import { api } from "./api";

//to get all users u need to send path(for exsple:"/user")
// and u get the users in the res (for exsple:console.log(res))
// api.get("/user", headers).then((res) => res);
// ----------------------------------------------------------------
// to post a new user u need to send path(for exsple:"/user")and send user data on (look in exsmple down)
// api.post("/user",
//   (data = {
//     name: "test",
//     email: "<EMAIL>",
//     password: "<PASSWORD>",
//   }),
//   headers
// ).then((res) => res.data);
// ----------------------------------------------------------------
// to update a user u need to send path(for exsple:"/user/id")
// and to send details that u want to update (look in exsmple down)
// api.put("/user/id",
//   (data = {
//     name: "test",
//     email: "<EMAIL>",
//     password: "<PASSWORD>",
//   }),
//   headers
// ).then((res) => res.data);
// ----------------------------------------------------------------
//to delete a user u need to send path and data(for exsple:_id)
// api.delete("/user/id",
//   (data = {
//     _id: "uigheiuty489958y45hj",
//   }),
//   headers
// ).then((res) => res.data);

export default { get, post, del, put };
 