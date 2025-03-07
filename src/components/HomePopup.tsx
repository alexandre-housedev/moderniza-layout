
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const HomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a small delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4 p-6 animate-scale-in">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Aviso Importante</h3>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <p className="text-gray-700 mb-5 text-center">
          Participe de nossas reuniões, elas são abertas
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => setIsVisible(false)}
            className="px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-md transition-colors"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePopup;
