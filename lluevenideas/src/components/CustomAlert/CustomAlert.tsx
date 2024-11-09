import React from 'react';

interface CustomAlertProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, type, onClose }) => {
  return (
    <div className={`fixed top-4 right-4 z-50 px-4 py-4 rounded-md shadow-lg text-black  ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 font-bold">X</button>
      </div>
    </div>
  );
};

export default CustomAlert;
