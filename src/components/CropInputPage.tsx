import React, { useState } from 'react';
import { Calendar, Sprout, ArrowRight, Info } from 'lucide-react';
import { CropInput } from '../App';
import { CROP_OPTIONS } from '../data/cropData';

interface CropInputPageProps {
  onSubmit: (input: CropInput) => void;
}

const CropInputPage: React.FC<CropInputPageProps> = ({ onSubmit }) => {
  const [cropType, setCropType] = useState('');
  const [sowingDate, setSowingDate] = useState('');
  const [errors, setErrors] = useState<{cropType?: string; sowingDate?: string}>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: {cropType?: string; sowingDate?: string} = {};
    
    if (!cropType) {
      newErrors.cropType = 'Please select a crop type';
    }
    
    if (!sowingDate) {
      newErrors.sowingDate = 'Please select a sowing date';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    onSubmit({ cropType, sowingDate });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <Sprout className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium">Crop Planning</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Let's Plan Your Crop Cycle
          </h2>
          <p className="text-gray-600">
            Enter your crop details to get personalized farming recommendations
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Crop Type Selection */}
          <div>
            <label htmlFor="cropType" className="block text-sm font-semibold text-gray-700 mb-3">
              Select Crop Type
            </label>
            <div className="relative">
              <select
                id="cropType"
                value={cropType}
                onChange={(e) => setCropType(e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 transition-all ${
                  errors.cropType ? 'border-red-300' : 'border-gray-200'
                } appearance-none bg-white`}
              >
                <option value="">Choose a crop...</option>
                {CROP_OPTIONS.map((crop) => (
                  <option key={crop.value} value={crop.value}>
                    {crop.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {errors.cropType && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <Info className="w-4 h-4" />
                {errors.cropType}
              </p>
            )}
          </div>

          {/* Sowing Date */}
          <div>
            <label htmlFor="sowingDate" className="block text-sm font-semibold text-gray-700 mb-3">
              Sowing Date
            </label>
            <div className="relative">
              <input
                type="date"
                id="sowingDate"
                value={sowingDate}
                onChange={(e) => setSowingDate(e.target.value)}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-500 transition-all ${
                  errors.sowingDate ? 'border-red-300' : 'border-gray-200'
                }`}
              />
              <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            {errors.sowingDate && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <Info className="w-4 h-4" />
                {errors.sowingDate}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <span>Get Optimization Plan</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        {/* Info Card */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">What you'll get:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Optimal yield start and harvest dates</li>
                <li>• Soil type recommendations</li>
                <li>• Pesticide and fertilizer suggestions</li>
                <li>• Growth stage timeline</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropInputPage;