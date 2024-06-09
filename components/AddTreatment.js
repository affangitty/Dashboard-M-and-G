// components/AddTreatment.js

import React from 'react';

const AddTreatment = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add New Treatment</h2>
      <form className="w-full max-w-sm">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6">
            <label htmlFor="date" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Date
            </label>
            <input id="date" type="date" className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
          </div>
          <div className="w-full px-3 mb-6">
            <label htmlFor="clinic" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Clinic
            </label>
            <input id="clinic" type="text" className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
          </div>
          <div className="w-full px-3 mb-6">
            <label htmlFor="doctor" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Doctor
            </label>
            <input id="doctor" type="text" className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
          </div>
          <div className="w-full px-3 mb-6">
            <label htmlFor="description" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Description
            </label>
            <textarea id="description" className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
          </div>
          <div className="w-full px-3 mb-6">
            <label htmlFor="notes" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Notes
            </label>
            <textarea id="notes" className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add Treatment
        </button>
      </form>
    </div>
  );
};

export default AddTreatment;
