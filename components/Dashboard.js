import { useState } from 'react';
import Link from 'next/link';

const treatments = [
  // Demo data
  { id: 1, date: '2023-05-01', hospital: 'General Hospital', doctor: 'Dr. Smith', description: 'Checkup' },
  { id: 2, date: '2023-06-15', hospital: 'City Clinic', doctor: 'Dr. Johnson', description: 'Dental Cleaning' },
  // Add more treatments as needed
];

const Dashboard = () => {
  const [filter, setFilter] = useState('');
  const filteredTreatments = filter
    ? treatments.filter((t) => t.hospital === filter)
    : treatments;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <div>
        <label htmlFor="filter" className="block mb-2">Filter by Hospital/Clinic:</label>
        <input
          type="text"
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded mb-4"
        />
      </div>
      <ul>
        {filteredTreatments.map((treatment) => (
          <li key={treatment.id} className="mb-2 p-4 border rounded">
            <Link href={`/treatment/${treatment.id}`}>
              <a>
                {treatment.date} - {treatment.hospital} - {treatment.doctor}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
