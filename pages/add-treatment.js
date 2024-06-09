import { useState } from 'react';

const AddTreatment = () => {
  const [formData, setFormData] = useState({
    date: '',
    hospital: '',
    doctor: '',
    description: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log(formData);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add New Treatment</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-2">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="hospital" className="block mb-2">Hospital/Clinic:</label>
          <input
            type="text"
            id="hospital"
            name="hospital"
            value={formData.hospital}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="doctor" className="block mb-2">Doctor:</label>
          <input
            type="text"
            id="doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">Treatment Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="notes" className="block mb-2">Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Add Treatment</button>
      </form>
    </div>
  );
};

export default AddTreatment;
