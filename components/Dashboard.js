import React, { useState } from 'react';

const treatmentsData = [
  { id: 1, date: '2024-01-01', clinic: 'Clinic A', doctor: 'Dr. X', description: 'Treatment A', notes: 'Notes A' },
  { id: 2, date: '2024-01-02', clinic: 'Clinic B', doctor: 'Dr. Y', description: 'Treatment B', notes: 'Notes B' },
  { id: 3, date: '2024-01-03', clinic: 'Clinic A', doctor: 'Dr. Z', description: 'Treatment C', notes: 'Notes C' },
];

const Dashboard = () => {
  const [selectedClinic, setSelectedClinic] = useState('');
  const filteredTreatments = selectedClinic
    ? treatmentsData.filter((treatment) => treatment.clinic === selectedClinic)
    : treatmentsData;

  return (
    <div>
      <h2>Dashboard</h2>
      <label htmlFor="clinicFilter">Filter by Clinic:</label>
      <select
        id="clinicFilter"
        value={selectedClinic}
        onChange={(e) => setSelectedClinic(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1"
      >
        <option value="">All</option>
        <option value="Clinic A">Clinic A</option>
        <option value="Clinic B">Clinic B</option>
      </select>
      {filteredTreatments.map((treatment) => (
        <div key={treatment.id} className="my-4 p-4 border border-gray-300 rounded">
          <p>Date: {treatment.date}</p>
          <p>Clinic: {treatment.clinic}</p>
          <p>Doctor: {treatment.doctor}</p>
          <p>Description: {treatment.description}</p>
          <p>Notes: {treatment.notes}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
