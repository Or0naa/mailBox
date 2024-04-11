import { useContext, useState } from "react";
import DataContext from "./context/DataContext";
import Layout from "./Layout";

export default function App() {

  const [mail, setMail] = useState(false);

  const [onlyIcons, setOnlyIcons]= useState(false)


  return (
    <div >
      <DataContext.Provider value={{
        mail, setMail,
        onlyIcons, setOnlyIcons
      }}>
        <Layout />
      </DataContext.Provider>
    </div>
  )
}