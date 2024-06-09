import React, { useState } from 'react';

const AddTreatment = () => {
  const [treatments, setTreatments] = useState([{ date: '', clinic: '', doctor: '', description: '', notes: '' }]);

  const handleAddTreatment = () => {
    setTreatments([...treatments, { date: '', clinic: '', doctor: '', description: '', notes: '' }]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newTreatments = [...treatments];
    newTreatments[index][name] = value;
    setTreatments(newTreatments);
  };

  const handleRemoveTreatment = (index) => {
    const newTreatments = [...treatments];
    newTreatments.splice(index, 1);
    setTreatments(newTreatments);
  };

  return (
    <div>
      <h2>Add New Treatments</h2>
      {treatments.map((treatment, index) => (
        <div key={index} className="my-4 p-4 border border-gray-300 rounded">
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={treatment.date}
            onChange={(e) => handleChange(index, e)}
            className="border border-gray-300 rounded px-2 py-1"
          />
          <label>Clinic:</label>
          <input
            type="text"
            name="clinic"
            value={treatment.clinic}
            onChange={(e) => handleChange(index, e)}
            className="border border-gray-300 rounded px-2 py-1"
          />
          <label>Doctor:</label>
          <input
            type="text"
            name="doctor"
            value={treatment.doctor}
            onChange={(e) => handleChange(index, e)}
            className="border border-gray-300 rounded px-2 py-1"
          />
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={treatment.description}
            onChange={(e) => handleChange(index, e)}
            className="border border-gray-300 rounded px-2 py-1"
          />
          <label>Notes:</label>
          <input
            type="text"
            name="notes"
            value={treatment.notes}
            onChange={(e) => handleChange(index, e)}
            className="border border-gray-300 rounded px-2 py-1"
          />
          <button type="button" onClick={() => handleRemoveTreatment(index)} className="text-red-600 ml-2">
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddTreatment} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Add More Treatments
      </button>
    </div>
  );
};

export default AddTreatment;
