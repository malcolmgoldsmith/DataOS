import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { ChevronDown } from 'lucide-react';
export function FocusingChart() {
  const data = [{
    month: 'Sep',
    focus: 65,
    unfocus: 45
  }, {
    month: 'Oct',
    focus: 75,
    unfocus: 55
  }, {
    month: 'Nov',
    focus: 55,
    unfocus: 70
  }, {
    month: 'Dec',
    focus: 85,
    unfocus: 50
  }, {
    month: 'Jan',
    focus: 70,
    unfocus: 65
  }, {
    month: 'Feb',
    focus: 60,
    unfocus: 75
  }, {
    month: 'Mar',
    focus: 80,
    unfocus: 55
  }, {
    month: 'Apr',
    focus: 65,
    unfocus: 70
  }, {
    month: 'May',
    focus: 50,
    unfocus: 60
  }, {
    month: 'Jun',
    focus: 70,
    unfocus: 50
  }];
  return <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Focusing</h3>
          <p className="text-xs text-gray-500 mt-1">Productivity analytics</p>
        </div>
        <button className="flex items-center space-x-2 px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-700 hover:bg-gray-100">
          <span>Range: Last month</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
      <div className="relative">
        <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
          Sep
        </div>
        <div className="absolute top-12 left-32 text-xs text-gray-500">
          <div>Week 8</div>
          <div className="text-gray-400">Unbalanced</div>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorFocus" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorUnfocus" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{
            fontSize: 12
          }} />
            <YAxis hide />
            <Tooltip />
            <Area type="monotone" dataKey="focus" stroke="#ef4444" strokeWidth={2} fill="url(#colorFocus)" />
            <Area type="monotone" dataKey="unfocus" stroke="#3b82f6" strokeWidth={2} fill="url(#colorUnfocus)" />
          </AreaChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-6 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
              <span className="text-gray-600">Maximum of focus</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
              <span className="text-gray-600">Min or lack of focus</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-gray-900">41%</div>
            <p className="text-xs text-gray-500">Avg. Dedication</p>
          </div>
        </div>
      </div>
    </div>;
}