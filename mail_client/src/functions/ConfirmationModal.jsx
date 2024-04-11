import React from 'react';

export default function ConfirmationModal({ isOpen, onCancel, onConfirm, message }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Confirmation</h2>
            <p className="mb-6">{message}</p>
            <div className="flex justify-end">
              <button onClick={onCancel} className="mr-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-md">Cancel</button>
              <button onClick={onConfirm} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
