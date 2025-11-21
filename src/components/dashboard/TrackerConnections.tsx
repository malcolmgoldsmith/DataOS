import React from 'react';
import { MoreHorizontal } from 'lucide-react';
export function TrackerConnections() {
  return <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900">
            Trackers connected
          </h3>
          <p className="text-xs text-gray-500 mt-1">3 active connections</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center -space-x-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center border-2 border-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#1E90FF">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center border-2 border-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <rect x="3" y="3" width="18" height="18" rx="2" />
              </svg>
            </div>
            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center border-2 border-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF8C00">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-50 rounded-lg">
            <MoreHorizontal className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>;
}