import React from 'react';
import'./styles.css'
import { useState } from 'react';

const  App: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  function handleSelectedItem(item: string) {
    setSelectedItems([item])
  }
  return (
    <div className="container">
      <div className="content">
        <ul className="childs">

          <li 
          onClick={() => handleSelectedItem(item)}
          className={selectedItems.includes(item)? 'selected': ''}
          >
            <button type="button">
              <img src="https://avatars0.githubusercontent.com/u/52578096?s=460&u=d233e09f38650572379a534f8fa22788e4aa42bf&v=4" alt="Item"/>
            </button>
          </li>

          <li>
            <button type="button">
              <img src="https://avatars0.githubusercontent.com/u/52578096?s=460&u=d233e09f38650572379a534f8fa22788e4aa42bf&v=4" alt="Item"/>
            </button>
          </li>

          <li>
            <button type="button">
              <img src="https://avatars0.githubusercontent.com/u/52578096?s=460&u=d233e09f38650572379a534f8fa22788e4aa42bf&v=4" alt="Item"/>
            </button>
          </li>
        </ul>
      </div>
    </div>    
  );
}

export default App;
