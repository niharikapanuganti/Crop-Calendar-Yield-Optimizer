import React, { useState } from 'react';
import { Calendar, Sprout, Target, Beaker, MapPin, ArrowRight, ArrowLeft, Leaf } from 'lucide-react';
import CropInputPage from './components/CropInputPage';
import CropResultsPage from './components/CropResultsPage';
import { CropData, getCropData } from './data/cropData';

export interface CropInput {
  cropType: string;
  sowingDate: string;
}

export interface CropResult extends CropData {
  sowingDate: Date;
  yieldStartDate: Date;
  harvestDate: Date;
}

function App() {
  const [currentPage, setCurrentPage] = useState<'input' | 'results'>('input');
  const [cropInput, setCropInput] = useState<CropInput | null>(null);
  const [cropResult, setCropResult] = useState<CropResult | null>(null);

  const handleCropSubmit = (input: CropInput) => {
    const cropData = getCropData(input.cropType);
    if (cropData) {
      const sowingDate = new Date(input.sowingDate);
      const yieldStartDate = new Date(sowingDate);
      yieldStartDate.setDate(yieldStartDate.getDate() + cropData.daysToYieldStart);
      
      const harvestDate = new Date(sowingDate);
      harvestDate.setDate(harvestDate.getDate() + cropData.daysToHarvest);

      const result: CropResult = {
        ...cropData,
        sowingDate,
        yieldStartDate,
        harvestDate,
      };

      setCropInput(input);
      setCropResult(result);
      setCurrentPage('results');
    }
  };

  const handleBackToInput = () => {
    setCurrentPage('input');
    setCropInput(null);
    setCropResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-green-600 rounded-full">
              <Sprout className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800">AgriOptimize</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Smart crop calendar and yield optimization platform for modern farming
          </p>
        </div>

        {/* Page Navigation Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              currentPage === 'input' 
                ? 'bg-green-600 text-white' 
                : 'bg-white text-gray-600 border-2 border-green-200'
            }`}>
              <Calendar className="w-4 h-4" />
              <span className="font-medium">Crop Details</span>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400" />
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              currentPage === 'results' 
                ? 'bg-green-600 text-white' 
                : 'bg-white text-gray-600 border-2 border-green-200'
            }`}>
              <Target className="w-4 h-4" />
              <span className="font-medium">Optimization Plan</span>
            </div>
          </div>
        </div>

        {/* Page Content */}
        {currentPage === 'input' ? (
          <CropInputPage onSubmit={handleCropSubmit} />
        ) : (
          <CropResultsPage 
            cropResult={cropResult!} 
            onBack={handleBackToInput} 
          />
        )}
      </div>
    </div>
  );
}

export default App;