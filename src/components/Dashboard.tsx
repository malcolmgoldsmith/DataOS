import React from 'react';
import { Header } from './dashboard/Header';
import { MessageMetricsCards } from './dashboard/MessageMetricsCards';
import { MessageCharts } from './dashboard/MessageCharts';
export function Dashboard() {
  return <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 p-6">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="mt-6 space-y-6">
          <MessageMetricsCards />
          <MessageCharts />
        </div>
      </div>
    </div>;
}