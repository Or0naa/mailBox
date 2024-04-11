import { FaAngleLeft, FaEnvelope } from 'react-icons/fa'
import BoxMail from '../BoxMail'
import Labels from '../Labels'
import {  useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import { usePopup } from '../../context/PopupContext';
import NewMessage from '../NewMessage';


export default function Menu({ jsonData }) {
  const { popupComp, setPopupComp } = usePopup();
  const nav = useNavigate()
  const { onlyIcons, setOnlyIcons } = useContext(DataContext)
  return (
    <div>
   <div>
  
</div>
      <div className="w-64 p-0.2 border border-r-neutral-200 rounded-lg p-4 h-full">
        <div className="flex items-center text-3xl font-bold p-5" >
          <FaAngleLeft className="mr-2" onClick={() => setOnlyIcons(!onlyIcons)} /> {!onlyIcons ? <p>Mail-Box</p> : null}
        </div>
        <div className="bg-teal-500 text-white flex items-center p-2 rounded-lg" onClick={() => setPopupComp(<NewMessage />)}>
          <FaEnvelope className="mr-2" />
          {!onlyIcons ? <span className="ml-2">New message</span> : null}
        </div>
        <div className="flex items-center justify-between mb-2 p-2">
          <BoxMail jsonData={jsonData} onlyIcons={onlyIcons} />
        </div >
        <Labels  onlyIcons={onlyIcons} />
      </div></div>
  )
}
