import { useRouter } from 'next/router';

const treatments = [
  { id: 1, date: '2023-05-01', hospital: 'General Hospital', doctor: 'Dr. Smith', description: 'Checkup', notes: 'Regular annual checkup' },
  { id: 2, date: '2023-06-15', hospital: 'City Clinic', doctor: 'Dr. Johnson', description: 'Dental Cleaning', notes: 'Routine dental cleaning' },
  // Add more treatments as needed
];

const TreatmentInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const treatment = treatments.find((t) => t.id === parseInt(id));

  if (!treatment) return <p>Treatment not found</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Treatment Info</h1>
      <p><strong>Date:</strong> {treatment.date}</p>
      <p><strong>Hospital:</strong> {treatment.hospital}</p>
      <p><strong>Doctor:</strong> {treatment.doctor}</p>
      <p><strong>Description:</strong> {treatment.description}</p>
      <p><strong>Notes:</strong> {treatment.notes}</p>
    </div>
  );
};

export default TreatmentInfo;
