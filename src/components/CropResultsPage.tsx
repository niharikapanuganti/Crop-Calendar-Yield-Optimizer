import React from 'react';
import { ArrowLeft, Calendar, MapPin, Beaker, Target, Sprout, Droplets, Sun, Bug } from 'lucide-react';
import { CropResult } from '../App';

interface CropResultsPageProps {
  cropResult: CropResult;
  onBack: () => void;
}

const CropResultsPage: React.FC<CropResultsPageProps> = ({ cropResult, onBack }) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDaysUntil = (date: Date) => {
    const today = new Date();
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Crop Selection
      </button>

      {/* Header Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {cropResult.name} Optimization Plan
            </h1>
            <p className="text-gray-600">
              Sowing Date: {formatDate(cropResult.sowingDate)}
            </p>
          </div>
          <div className="p-4 bg-green-100 rounded-full">
            <Sprout className="w-8 h-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Timeline Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Yield Start</h3>
          </div>
          <p className="text-2xl font-bold text-blue-600 mb-2">
            {formatDate(cropResult.yieldStartDate)}
          </p>
          <p className="text-sm text-gray-600">
            {getDaysUntil(cropResult.yieldStartDate) > 0 
              ? `${getDaysUntil(cropResult.yieldStartDate)} days to go`
              : 'Yield period has started!'
            }
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Harvest Date</h3>
          </div>
          <p className="text-2xl font-bold text-orange-600 mb-2">
            {formatDate(cropResult.harvestDate)}
          </p>
          <p className="text-sm text-gray-600">
            {getDaysUntil(cropResult.harvestDate) > 0 
              ? `${getDaysUntil(cropResult.harvestDate)} days to harvest`
              : 'Ready for harvest!'
            }
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Sun className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Growth Period</h3>
          </div>
          <p className="text-2xl font-bold text-green-600 mb-2">
            {cropResult.daysToHarvest} days
          </p>
          <p className="text-sm text-gray-600">
            Total crop cycle duration
          </p>
        </div>
      </div>

      {/* Detailed Information */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Soil & Growing Conditions */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <MapPin className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Soil & Growing Conditions</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Recommended Soil Types</h4>
              <div className="flex flex-wrap gap-2">
                {cropResult.soilTypes.map((soil, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {soil}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Climate Requirements</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 text-yellow-600" />
                  <span>Temperature: {cropResult.temperature}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-blue-600" />
                  <span>Rainfall: {cropResult.rainfall}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pest Management */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Bug className="w-5 h-5 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Pest Management</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Recommended Pesticides</h4>
              <div className="space-y-2">
                {cropResult.pesticides.map((pesticide, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                    <Beaker className="w-4 h-4 text-orange-600" />
                    <span className="text-sm text-gray-700">{pesticide}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fertilizer Recommendations */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-purple-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Beaker className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Fertilizer Program</h3>
          </div>
          
          <div className="space-y-3">
            {cropResult.fertilizers.map((fertilizer, index) => (
              <div key={index} className="p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="font-medium text-gray-700 text-sm">{fertilizer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Tips */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Farming Tips</h3>
          </div>
          
          <div className="space-y-3">
            {cropResult.tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={onBack}
          className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Plan Another Crop
        </button>
      </div>
    </div>
  );
};

export default CropResultsPage;