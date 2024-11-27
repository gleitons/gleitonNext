import { useState } from 'react';

export default function AlertaPersonalizado() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-3/4 md:w-1/2 bg-blue-500 text-white shadow-lg rounded-lg p-4 z-50">
      <div className="flex justify-between items-center">
        <p className="text-sm md:text-base">
          Para uma melhor visualização, utilize um computador desktop.
        </p>
        <button
          className="block lx:hidden text-white bg-blue-700 hover:bg-blue-800 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => setIsVisible(false)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
