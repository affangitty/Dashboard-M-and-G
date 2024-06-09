import { useRouter } from 'next/router';

const treatments = [
  { id: 1, date: '2023-05-01', hospital: 'General Hospital', doctor: 'Dr. Smith', description: 'Checkup', notes: 'Regular annual checkup' },
  { id: 2, date: '2023-06-15', hospital: 'City Clinic', doctor: 'Dr. Johnson', description: 'Dental Cleaning', notes: 'Routine dental cleaning' },
];

const TreatmentInfo = () => {
  const router = useRouter();
  const { id } = router.query;
  const treatment = treatments.find((t) => t.id === parseInt(id));

  if (!treatment) return <p className="text-center text-gray-500">Treatment not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Treatment Info</h1>
        <p className="mb-4"><strong className="text-gray-600">Date:</strong> {treatment.date}</p>
        <p className="mb-4"><strong className="text-gray-600">Hospital:</strong> {treatment.hospital}</p>
        <p className="mb-4"><strong className="text-gray-600">Doctor:</strong> {treatment.doctor}</p>
        <p className="mb-4"><strong className="text-gray-600">Description:</strong> {treatment.description}</p>
        <p className="mb-4"><strong className="text-gray-600">Notes:</strong> {treatment.notes}</p>
      </div>
    </div>
  );
};

export default TreatmentInfo;
