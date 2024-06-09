import { useState } from 'react';
import Link from 'next/link';
import AddTreatment from './AddTreatment';

const initialTreatments = [
  { id: 1, date: '2023-05-01', hospital: 'General Hospital', doctor: 'Dr. Smith', description: 'Checkup' },
  { id: 2, date: '2023-06-15', hospital: 'City Clinic', doctor: 'Dr. Johnson', description: 'Dental Cleaning' },
];

const Dashboard = () => {
  const [treatments, setTreatments] = useState(initialTreatments);
  const [filter, setFilter] = useState('');
  const [showForm, setShowForm] = useState(false);

  const filteredTreatments = filter ? treatments.filter(t => t.hospital === filter) : treatments;

  const addTreatment = (newTreatment) => {
    setTreatments([...treatments, { id: treatments.length + 1, ...newTreatment }]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">User Dashboard</h1>
        <div className="mb-6">
          <label htmlFor="filter" className="block mb-2 text-gray-600">Filter by Hospital/Clinic:</label>
          <input
            type="text"
            id="filter"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <ul className="space-y-4">
          {filteredTreatments.map(treatment => (
            <li key={treatment.id} className="bg-gray-50 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <Link href={`/treatment/${treatment.id}`}>
                <a className="block text-lg font-semibold text-gray-800 hover:text-blue-500">
                  {treatment.date} - {treatment.hospital} - {treatment.doctor}
                </a>
              </Link>
              <p className="text-gray-600">{treatment.description}</p>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setShowForm(!showForm)}
          className="mt-6 w-full py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition-colors duration-300"
        >
          {showForm ? 'Close Form' : 'Add New Treatment'}
        </button>
        {showForm && <AddTreatment addTreatment={addTreatment} />}
      </div>
    </div>
  );
};

export default Dashboard;
