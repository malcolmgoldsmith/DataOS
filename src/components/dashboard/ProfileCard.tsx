import React from 'react';
import { RefreshCw, Users, Target, TrendingUp } from 'lucide-react';
export function ProfileCard() {
  return <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-900">Profile</h3>
        <button className="p-1 hover:bg-gray-50 rounded">
          <RefreshCw className="h-4 w-4 text-gray-400" />
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" alt="Profile" className="w-24 h-24 rounded-full object-cover ring-4 ring-pink-100" />
          <div className="absolute bottom-0 right-0 bg-black rounded-full p-1">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
        </div>
        <h4 className="mt-4 text-lg font-semibold text-gray-900">
          Kristin Watson
        </h4>
        <p className="text-sm text-gray-500">Design Manager</p>
        <div className="flex items-center justify-center space-x-6 mt-6 w-full">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4 text-red-500" />
            <span className="text-sm font-medium text-gray-900">11</span>
          </div>
          <div className="flex items-center space-x-1">
            <Target className="h-4 w-4 text-red-400" />
            <span className="text-sm font-medium text-gray-900">56</span>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-900">12</span>
          </div>
        </div>
      </div>
    </div>;
}