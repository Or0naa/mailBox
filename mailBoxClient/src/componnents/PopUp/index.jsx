import React from 'react'
import { usePopup } from '../../context/PopupContext';

export default function PopUp() {
    const { popupComp, setPopupComp } = usePopup();
    return (
        <div className={`fixed inset-0 flex items-center justify-center ${popupComp ? 'visible' : 'hidden'}`}>
            <div className="bg-black opacity-60 fixed inset-0" onClick={() => setPopupComp(false)}></div>
            <div className="bg-white shadow-lg rounded-md overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="px-6 py-4">
                    {popupComp}
                </div>
            </div>
        </div>
    )
}
