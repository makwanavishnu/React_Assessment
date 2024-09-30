import React, { createContext, useState } from 'react';

// Create the context
const ChecklistContext = createContext();

const ChecklistProvider = ({ children }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prev) =>
      checked ? [...prev, name] : prev.filter((item) => item !== name)
    );
  };

  return (
    <ChecklistContext.Provider value={{ checkedItems, handleCheckboxChange }}>
      {children}
    </ChecklistContext.Provider>
  );
};

export { ChecklistContext, ChecklistProvider };
