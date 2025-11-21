import React from 'react';
export function Header() {
  return <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Smart Messaging Performance
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Comprehensive analysis of messaging metrics
          </p>
        </div>
      </div>
    </div>;
}