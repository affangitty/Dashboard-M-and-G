import React, { useState } from 'react';

const AddTreatment = ({ onAddTreatment }) => {
  const [formData, setFormData] = useState({
    date: '',
    clinic: '',
    doctor: '',
    description: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTreatment(formData);
    setFormData({
      date: '',
      clinic: '',
      doctor: '',
      description: '',
      notes: '',
    });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add New Treatment</h2>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6">
            <label htmlFor="date" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          {/* Other form fields */}
          <div className="w-full px-3 mb-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Treatment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTreatment;
