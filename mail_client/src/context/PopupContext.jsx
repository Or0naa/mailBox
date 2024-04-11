import { createContext, useContext, useState } from "react";

const PopupContext = createContext();
export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
    const [popupComp, setPopupComp] = useState(false)

    return(
        <PopupContext.Provider value={{ popupComp, setPopupComp}}>
            {children}
        </PopupContext.Provider>
    )
}