import { useContext, useEffect, useState } from 'react';
import { FaEllipsisV, FaPlus, FaPlusCircle, FaSearch, FaTag } from 'react-icons/fa';
import DataContext from '../../context/DataContext';
import dataJson from '../../../data.json';

export default function Labels() {
  const labels = dataJson.labels;
  
  const [activeLabels, setActiveLabels] = useState([]);
  const [moreOptions, setMoreOptions] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null); // Added state for selected icon
  const {onlyIcons}= useContext(DataContext)


  useEffect(() => {
    if (!labels || labels.length === 0) {
      setActiveLabels(['inbox', 'favourites', 'contact', 'drafts', 'deleted', 'sent', 'spam', 'trash', 'all']);
    } else {
      setActiveLabels(labels);
    }
  }, []);

  const colors = ["#FFD700", "#98FB98", "#ADD8E6", "#FFA07A", "#FFC0CB", "#800000", "#000080", "#0000FF", "#00FFFF", "#008080", "#008000", "#00FF00", "#808000", "#808080", "#FF0000", "#FF00FF", "#FFFF00", "#FFFFFF"];

  const handleAddTag = () => {
    const tagName = prompt('Enter tag name');
    if (!tagName) return;
    const newLabels = [...activeLabels, tagName];
    setActiveLabels(newLabels);
  };

  const handleIconClick = (iconName) => {
    
    setSelectedIcon(iconName === selectedIcon ? null : iconName); // Toggle selected icon
    if (iconName === 'ellipsis') {
      setMoreOptions(!moreOptions);
    }
    if (iconName == 'plus'){
      handleAddTag()
    }
  };

  return (
    <div className="overflow">
      <div className=" flex items-center justify-between mb-2">
       {!onlyIcons? <div className="flex items-center">
          <h2 className="text-lg font-bold">Labels</h2>
        </div>:null}

        <div className=" flex items-center">
          <FaPlus
            className={`ml-2 text-xl text-gray-400 cursor-pointer  rounded-md p-1 ${selectedIcon === 'plus' ? 'bg-gray-100 text-teal-500' : ''}`}
            onClick={() => handleIconClick('plus')}
          />
          <div className="relative ml-2">
            <FaEllipsisV
              className={`text-xl text-gray-400 cursor-pointer rounded-md p-1 ${selectedIcon === 'ellipsis' ? 'bg-gray-100 text-teal-500' : ''}`}
              onClick={() => handleIconClick('ellipsis')}
            />
            {moreOptions ? (
              <div className="absolute left-0 top-full mt-2 bg-gray-100 rounded-md shadow-md">
                <p className="text-sm text-teal-300 px-2 min-w-fit py-1">More options</p>
                <div className="flex flex-col items-start">
                  <p className="text-sm text-gray-500 px-2 py-1" style={{ whiteSpace: 'nowrap' }}>coffee</p>
                  <p className="text-sm text-gray-500 px-2 py-1" style={{ whiteSpace: 'nowrap' }}>tea</p>
                  <p className="text-sm text-gray-500 px-2 py-1" style={{ whiteSpace: 'nowrap' }}>cold water with lemon</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>

      </div>
      <div className="p-4  rounded-md space-y-2">
        {activeLabels.map((label, index) => (
          <div key={index} className="flex items-center">
            <FaTag className={`mr-2`} style={{ color: colors[index] }} />
           {onlyIcons? null: <p className="text-gray-800">{label}</p>}
          
          </div>
        ))}
      </div>
    </div>
  );
}
