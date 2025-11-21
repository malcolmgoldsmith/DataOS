import React from 'react';
import { useMessageData } from '../../hooks/useMessageData';

export function MessageMetricsCards() {
  const { data, loading, error } = useMessageData();

  if (loading) {
    return <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-white rounded-2xl shadow-sm p-8 animate-pulse">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            <div className="h-12 w-32 bg-gray-200 rounded"></div>
            <div className="h-4 w-40 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>;
  }

  if (error) {
    return <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
      Error loading data: {error}
    </div>;
  }

  // Filter out items with NaN or null engagement_rate for accurate calculations
  const validData = data.filter(item =>
    item.engagement_rate !== null &&
    !isNaN(item.engagement_rate) &&
    isFinite(item.engagement_rate)
  );

  const totalSent = data.reduce((sum, item) => sum + item.number_of_messages_sent, 0);
  const totalDisplayed = data.reduce((sum, item) => sum + item.displayed, 0);
  const totalClicked = data.reduce((sum, item) => sum + item.clicked, 0);

  // Calculate engagement rate only from valid data
  const engagementRate = totalDisplayed > 0 ? ((totalClicked / totalDisplayed) * 100).toFixed(1) : '0.0';

  return <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gradient-to-br from-purple-200 via-orange-50 to-pink-300 rounded-2xl shadow-sm p-8">
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <div className="rounded-full p-4">
            <svg className="h-10 w-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-5xl font-bold text-gray-900">{totalSent.toLocaleString()}</h3>
          <p className="text-base font-medium text-gray-700 text-center">
            Total Messages Sent
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-br from-cyan-200 via-blue-100 to-blue-400 rounded-2xl shadow-sm p-8">
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <div className="rounded-lg p-4 rotate-45">
            <svg className="h-10 w-10 text-blue-600 -rotate-45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-5xl font-bold text-gray-900">{totalDisplayed.toLocaleString()}</h3>
          <p className="text-base font-medium text-gray-700 text-center">
            Messages Displayed
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-br from-pink-200 via-purple-100 to-indigo-300 rounded-2xl shadow-sm p-8">
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <div className="rounded-md p-4 transform -rotate-12">
            <svg className="h-10 w-10 text-purple-600 rotate-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-5xl font-bold text-gray-900">{engagementRate}%</h3>
          <p className="text-base font-medium text-gray-700 text-center">
            Engagement Rate
          </p>
        </div>
      </div>
    </div>;
}