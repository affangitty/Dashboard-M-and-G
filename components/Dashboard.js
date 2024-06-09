import React, { useState } from 'react';

const treatmentsData = [
  { id: 1, date: '2024-01-01', clinic: 'Clinic A', doctor: 'Dr. X', description: 'Treatment A', notes: 'Notes A' },
  { id: 2, date: '2024-01-02', clinic: 'Clinic B', doctor: 'Dr. Y', description: 'Treatment B', notes: 'Notes B' },
  { id: 3, date: '2024-01-03', clinic: 'Clinic A', doctor: 'Dr. Z', description: 'Treatment C', notes: 'Notes C' },
];

const Dashboard = () => {
  const [selectedClinic, setSelectedClinic] = useState('');
  const [treatments, setTreatments] = useState(treatmentsData);

  const filteredTreatments = selectedClinic
    ? treatments.filter((treatment) => treatment.clinic === selectedClinic)
    : treatments;

  const handleAddTreatment = (newTreatment) => {
    const newTreatmentWithId = { ...newTreatment, id: treatments.length + 1 };
    setTreatments([...treatments, newTreatmentWithId]);
  };

  return (
    <div>
      {/* Filter and treatment list */}
      {/* Add new treatment form */}
      <AddTreatment onAddTreatment={handleAddTreatment} />
    </div>
  );
};

export default Dashboard;
