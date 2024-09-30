import React, { useContext } from 'react';
import { ChecklistContext } from './ChecklistContext';

const Checklist = () => {
  const { handleCheckboxChange } = useContext(ChecklistContext);

  return (
    <div>
      <h2>Select your options:</h2>
      <label>
        <input
          type="checkbox"
          name="Option 1"
          onChange={handleCheckboxChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="Option 2"
          onChange={handleCheckboxChange}
        />
        Option 2
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="Option 3"
          onChange={handleCheckboxChange}
        />
        Option 3
      </label>
      <br />
    </div>
  );
};

export default Checklist;
