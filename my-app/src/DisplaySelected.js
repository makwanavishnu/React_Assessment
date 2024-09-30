import React, { useContext } from 'react';
import { ChecklistContext } from './ChecklistContext';

const DisplaySelected = () => {
  const { checkedItems } = useContext(ChecklistContext);

  return (
    <div>
      <h2>Selected Options:</h2>
      {checkedItems.length > 0 ? (
        <ul>
          {checkedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No options selected.</p>
      )}
    </div>
  );
};

export default DisplaySelected;
